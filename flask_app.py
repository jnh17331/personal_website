import os
import sqlite3
from pathlib import Path
from flask import Flask, jsonify, request, render_template, send_from_directory
from flask_cors import CORS, cross_origin

app_root = os.path.dirname(__file__)

database_path = os.path.join(os.path.dirname(__file__), 'sqlite_db', 'project_db.sqlite')

app = Flask(__name__, static_folder='frontend/build')
CORS(app)

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/static/js/<path:filename>')
def serve_js(filename):
    return send_from_directory(os.path.join(app.static_folder, 'static', 'js'), filename)

@app.route('/static/css/<path:filename>')
def serve_css(filename):
    return send_from_directory(os.path.join(app.static_folder, 'static', 'css'), filename)

@app.route('/static/media/<path:filename>')
def serve_media(filename):
    return send_from_directory(os.path.join(app.static_folder, 'static', 'media'), filename)


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
        'imageURL': f'/api/images/{row[4]}',
        'link': row[6]
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
    image_folder = os.path.join(app_root, 'frontend', 'src', 'assets', 'images', 'projects')
    return send_from_directory(image_folder, filename)


@app.route('/api-test/', methods=['GET'])
def get_data():
    data = {"message": "Testing API with Flask"}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)

