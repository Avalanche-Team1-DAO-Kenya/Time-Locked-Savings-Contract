from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from app.Models.User import User
from app.Models.Savings import Savings
from datetime import datetime, timedelta
from app import db
from app.utils import error_response
import re

auth_bp = Blueprint('auth', __name__)
account_bp = Blueprint('account', __name__)

@auth_bp.route('/api/v1/auth/signup', methods=['POST'])
def signup():
    data = request.get_json()
    
    # Validate required fields
    if not all(k in data for k in ['username', 'email', 'password']):
        return error_response('Missing required fields', 400)
    
    # Validate email format
    if not re.match(r"[^@]+@[^@]+\.[^@]+", data['email']):
        return error_response('Invalid email format', 400)
    
    # Check if user already exists
    if User.query.filter_by(username=data['username']).first():
        return error_response('Username already exists', 409)
    if User.query.filter_by(email=data['email']).first():
        return error_response('Email already exists', 409)
    
    # Create new user
    user = User(username=data['username'], email=data['email'])
    user.set_password(data['password'])
    
    db.session.add(user)
    db.session.commit()
    
    return jsonify({
        'message': 'User created successfully',
        'user': {
            'username': user.username,
            'email': user.email
        }
    }), 201

@auth_bp.route('/api/v1/auth/login', methods=['POST'])
def login():
    data = request.get_json()
    
    if not all(k in data for k in ['username', 'password']):
        return error_response('Missing required fields', 400)
    
    user = User.query.filter_by(username=data['username']).first()
    
    if user and user.check_password(data['password']):
        access_token = create_access_token(identity=user.username)
        return jsonify({
            'access_token': access_token,
            'user': {
                'username': user.username,
                'email': user.email
            }
        })
    
    return error_response('Invalid username or password', 401)

@account_bp.route('/api/v1/account/deposit', methods=['POST'])
def create_deposit():
    data = request.get_json()

    user_id = data.get('user_id')
    amount = data.get('amount')
    lock_duration_days = data.get('lock_duration_days')

    if not user_id or not amount or not lock_duration_days:
        return jsonify({'error': 'Missing required fields'}), 400

    lock_expiration = datetime.utcnow() + timedelta(days=int(lock_duration_days))

    new_savings = Savings(user_id=user_id, deposit_amount=amount, lock_expiration=lock_expiration)
    db.session.add(new_savings)
    db.session.commit()

    return jsonify({
        'message': 'Deposit successful',
        'lock_expiration': lock_expiration.isoformat(),
        'balance': amount
    }), 201

@account_bp.route('/api/v1/account/balance/<user_id>', methods=['GET'])
def get_balance(user_id):
    savings = Savings.query.filter_by(user_id=user_id).first()

    if not savings:
        return jsonify({'error': 'User not found'}), 404

    time_remaining = (savings.lock_expiration - datetime.utcnow()).total_seconds()

    return jsonify({
        'user_id': savings.user_id,
        'balance': savings.deposit_amount,
        'lock_expiration': savings.lock_expiration.isoformat(),
        'time_remaining_seconds': max(0, time_remaining)
    }), 200

@account_bp.route('/api/v1/account/withdraw/<user_id>', methods=['POST'])
def withdraw_funds(user_id):
    savings = Savings.query.filter_by(user_id=user_id).first()

    if not savings:
        return jsonify({'error': 'User not found'}), 404

    if datetime.utcnow() < savings.lock_expiration:
        penalty = savings.deposit_amount * savings.penalty_rate
        amount_withdrawn = savings.deposit_amount - penalty
        message = f"Early withdrawal. Penalty applied: {penalty}"
    else:
        amount_withdrawn = savings.deposit_amount
        message = "Withdrawal successful."

    db.session.delete(savings)
    db.session.commit()

    return jsonify({
        'message': message,
        'amount_withdrawn': amount_withdrawn
    }), 200

@account_bp.route('/api/v1/account/extend-lock/<user_id>', methods=['PUT'])
def extend_lock(user_id):
    data = request.get_json()
    additional_days = data.get('additional_days')

    if not additional_days:
        return jsonify({'error': 'Missing required field: additional_days'}), 400

    savings = Savings.query.filter_by(user_id=user_id).first()

    if not savings:
        return jsonify({'error': 'User not found'}), 404

    savings.lock_expiration += timedelta(days=int(additional_days))
    db.session.commit()

    return jsonify({
        'message': 'Lock period extended',
        'new_lock_expiration': savings.lock_expiration.isoformat()
    }), 200

@account_bp.route('/api/v1/account/all', methods=['GET'])
def get_all_savings():
    all_savings = Savings.query.all()
    results = [
        {
            'user_id': savings.user_id,
            'balance': savings.deposit_amount,
            'lock_expiration': savings.lock_expiration.isoformat()
        } for savings in all_savings
    ]

    return jsonify(results), 200

 
