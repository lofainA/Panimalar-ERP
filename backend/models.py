from flask_sqlalchemy import SQLAlchemy

db =  SQLAlchemy()

class Faculty(db.Model):
    __tablename__ = "tblusers"
    facultyID = db.Column(db.Integer, primary_key=True)
    password = db.Column(db.String(255), index=True)
    firstName = db.Column(db.String(150), index=True)
    lastName = db.Column(db.String(150), index=True)
    email =  db.Column(db.String(150), index=True, unique=True)
    phone = db.Column(db.String(10), index=True, unique=True)
    address = db.column(db.String(200), index=True)
    departmentID = db.Column(db.Integer(20), index=True)
    hireDate = db.Column(db.Date, index=True)