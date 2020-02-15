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

@app.route('/signUp', methods=['POST'])
def register():
    users = mongo.db.users
    first_name = request.get_json()['first_name']
    last_name = request.get_json()['first_name']
    email = request.get_json()['email']
    password = bcrypt.generate_password_hash(request.get_json()['password'].decode('utf-8'))
    created = datetime.utcnow()

    user_id = users.insert({
        'first_name': first_name,
        'last_name': last_name,
        'email': email,
        'password': password,
        'created': created
    })

    new_user = users.find_one({
        '_id': user_id
    })

    result = {'email': new_user['email'] + ' registered'}

    return jsonify({
        'result': result
    })

@app.route('/login', methods=['POST'])
def login():
    users = mongo.db.users
    email = request.get_json()['email']
    password = request.get_json()['password']
    result = ''

    response = users.find_one({ 'email': email })

    if response:
        if bcrypt.check_password_hash(response['password'], password):
            access_token = create_access_token(identity = {
                'first_name': response['first_name'],
                'last_name': response['last_name'],
                'email': response['email'],
            })

            result = jsonify({ 'token': access_token })
        else:
            result = jsonify({ 'ERROR: Invalid username or password' })
    else:
        result = jsonify({ 'result': 'No results found' })
    return result

if __name__ == 'main':
    app.run(debug=True)