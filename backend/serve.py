# Flask server - Used for user authentication
# This code is hosted on PythonAnywhere. React makes requests to the Flask server on PythonAnywhere
#
# If you wish to run the React application locally, you must also run this Python script if you wish to utilize
# the functionality specific to users, such as registering/logging in, uploading previous sorts
from flask import Flask, jsonify, request, json
from flask_pymongo import PyMongo
import pymongo
from bson.objectid import ObjectId
from datetime import datetime
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token
from pprint import pprint

app = Flask(__name__)

# The database name, it's URI, and the JWT secret key
app.config['MONGO_DBNAME'] = 'algorithms_visualizer'
app.config['MONGO_URI'] = 'mongodb://admin:admin123@ds217809.mlab.com:17809/algorithms_visualizer?retryWrites=false'
app.config['JWT_SECRET_KEY'] = 'secret'

mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

CORS(app)

# Register method
@app.route('/register', methods=['POST'])
def register():
    users = mongo.db.users # Database of users

    first_name = request.get_json()['first_name']
    last_name = request.get_json()['last_name']
    email = request.get_json()['email']
    password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8') # Hashes the password usig bcrypt
    created = datetime.utcnow()

    # Creates a user with the following parameters
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

# Login method
@app.route('/login', methods=['POST'])
def login():
    users = mongo.db.users # Database of userws
    
    email = request.get_json()['email']
    password = request.get_json()['password']
    result = ''

    # Finds user by email
    response = users.find_one({ 'email': email })

    unique = users.find({'email': { "email": email}}).count()
    print(unique)

    # If application can successfully find a user with the email specified and the passwords match,
    # create an access token
    if response:
        if bcrypt.check_password_hash(response['password'], password):
            access_token = create_access_token(identity = {
                'first_name': response['first_name'],
                'last_name': response['last_name'],
                'email': response['email']
            })

            # Notify user that they have successfully logged in
            result = jsonify({ 'Successfully logged in. Token': access_token })
        else:
            result = jsonify({ 'ERROR: Invalid username or password' })
    else:
        result = jsonify({ 'result': 'No results found' })
        
    return result

@app.route('/', methods=['GET'])
def server_info():
    return "<h1>Flask server for Kevin Niland's Algorithms Visualizer</h1> \
    <p>Owner: Kevin Niland</p> \
    <p>Running since: 02/03/2020</p>"

if __name__ == '__main__':
    app.run(debug=True)

