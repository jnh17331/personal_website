import os
import sqlite3
from sqlalchemy import create_engine
from pathlib import Path
from flask import Flask, jsonify, request, render_template, send_from_directory
from flask_cors import CORS, cross_origin

app_root = os.path.dirname(__file__)

database_path = os.path.join(os.path.dirname(__file__), 'sqlite_db', 'project_db.sqlite')

app = Flask(__name__, template_folder="../personal_website")
CORS(app)

@app.route('/')
def home():
    return ('')

@app.route('/api/projects', methods=['GET'])
def projects():
    conn = sqlite3.connect(database_path)
    cursor = conn.cursor()

    query = "SELECT * FROM project_db"
    params = ""

    cursor.execute(query, params)

    rows = cursor.fetchall()

    projects_data = [{
        'id': row[0],
        'name': row[1],
        'description': row[2],
        'skills':row[3],
        'imageURL': f'/api/images/{row[4]}'
        } for row in rows]

    conn.close()

    return jsonify(projects_data)

@app.route('/api/blogs', methods=['GET'])
def blogs():
    conn = sqlite3.connect(database_path)
    cursor = conn.cursor()

    query = "SELECT * FROM blog_db"
    params = ""

    cursor.execute(query, params)

    rows = cursor.fetchall()

    projects_data = [{
        'id': row[0],
        'blog_title': row[1],
        'blog_message': row[2],
        'date':row[3]
        } for row in rows]

    conn.close()

    return jsonify(projects_data)

@app.route('/api/images/<filename>', methods=['GET'])
def get_image(filename):
    image_folder = os.path.join(app_root, 'src', 'assets', 'images', 'projects')
    return send_from_directory(image_folder, filename)


@app.route('/api-test/', methods=['GET'])
def get_data():
    data = {"message": "Testing API with Flask"}
    return jsonify(data)

if __name__ == '__main__':
    app.run(port=8000, debug=True)

