from flask import Flask, jsonify, request, json
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from datetime import datetime
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'algorithms_visualizer'
app.config['MONGO_URI'] = 'mongodb://admin:admin123@ds217809.mlab.com:17809/algorithms_visualizer?retryWrites=false'
app.config['JWT_SECRET_KEY'] = 'secret'

mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

CORS(app)

@app.route(methods=['POST'])
def register():
    users = mongo.db.users
    first_name = request.get_json()['first_name']
    last_name = request.get_json()['first_name']
    email = request.get_json()['email']
    password = bcrypt.generate_password_hash(request.get_json()['password'].decode('utf-8'))
    created = datetime.utcnow()