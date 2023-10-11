import os
from pathlib import Path
from flask import Flask, jsonify, request, render_template
from flask_cors import CORS, cross_origin

app = Flask(__name__, template_folder="../personal_website")
CORS(app)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/contact', methods=['GET'])
def contact():
    return "Under Construction"

@app.route('/projects', methods=['GET'])
def projects():
    return "This is Also Under Construction"

@app.route('/about', methods=['GET'])
def about():
    return "Under Construction"

@app.route('/api-test/', methods=['GET'])
def get_data():
    data = {"message": "Testing API with Flask"}
    return jsonify(data)

if __name__ == '__main__':
    app.run(port=8000, debug=True)

