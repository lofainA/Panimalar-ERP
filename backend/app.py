from flask import Flask, jsonify
from models import db, Faculty

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///flaskdb.db'

SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True

db.init_app(app)

with app.app_context():
    db.create_all()

@app.route("/")
def hello_world():
    return "<p>Hello world</p>"

@app.route("/users", method=['GET'])
def list_users():
    return jsonify({"result": "show all data"})

if __name__ == "__main__":
    app.run(debug=True)