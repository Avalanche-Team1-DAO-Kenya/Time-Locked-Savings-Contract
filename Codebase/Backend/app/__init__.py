from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from config import Config

db = SQLAlchemy()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    # Initialize extensions
    db.init_app(app)
    jwt.init_app(app)
    CORS(app)
    
    # Import and register blueprints
    from app.routes import auth_bp, account_bp
    app.register_blueprint(auth_bp)
    app.register_blueprint(account_bp)
    
    # Create database tables
    with app.app_context():
        db.create_all()
    
    return app 
