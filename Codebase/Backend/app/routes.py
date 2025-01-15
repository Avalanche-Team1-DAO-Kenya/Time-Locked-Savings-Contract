from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from app.models import User
from app import db
from app.utils import error_response
import re

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/api/signup', methods=['POST'])
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

@auth_bp.route('/api/login', methods=['POST'])
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
 
