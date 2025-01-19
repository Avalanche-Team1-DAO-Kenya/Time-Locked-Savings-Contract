from datetime import datetime
from app import db

class Savings(db.Model):
    __tablename__ = 'savings'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.String(50), nullable=False)
    deposit_amount = db.Column(db.Float, nullable=False)
    lock_expiration = db.Column(db.DateTime, nullable=False)
    penalty_rate = db.Column(db.Float, nullable=False, default=0.1)

    def __repr__(self):
        return f"<Savings user_id={self.user_id} deposit_amount={self.deposit_amount} lock_expiration={self.lock_expiration}>"
