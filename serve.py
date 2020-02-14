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