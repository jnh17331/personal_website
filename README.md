# Jesse Heaton's Personal Website

[www.jesse-heaton.com](https://www.jesse-heaton.com)

![website_snippet](https://github.com/jnh17331/personal_website/blob/main/frontend/src/assets/images/projects/website_capture.png)

I created this website to showcase my projects that I have made and am going to make in the future. I also created this website to dive more into frontend development.

## Table of Contents

- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [APIs](#apis)
- [Deployment](#deployment)
- [Contact](#contact)

## Project Structure

This website is built using a technology stack that covers various aspects, including React for the frontend, Flask for the backend and APIs, SQLite for the database, Git for version control and storage, and Heroku for cloud hosting.

## Dependencies

The requirements.txt file contains all necessary Python libraries for running the Flask server, also included in the Python virtual environment (venv). The package.json file holds all required npm installations for the website. Run pip install -r requirements.txt for Python dependencies and npm install for React frontend dependencies.

## Installation

```
# Clone the repository
git clone https://github.com/jnh17331/personal_website.git

# Install Python libraries
pip install -r requirements.txt

# Install npm dependencies
npm install
```

Ensure you are using the virtual environment (venv).

## Usage

- Run the Flask app
- Execute npm start while in the frontend directory
- Adjust ports for Flask or React app if needed

## Features

```
- Project Showcase
- About Me Section
- Blog Section
- Contact Form
- Homepage with Animations
```

## APIs

- /api/projects: Displays all current projects from the database
- /api/blogs: Displays all current blog posts from the database
- /api/images/<filename>: Shows a picture for a specified project
- /api-test: A test for API functionality

## Deployment

Deployed using Heroku Cloud Applications. Read about deploying to Heroku [Here](https://devcenter.heroku.com/categories/deployment)

## Contact

Contact me on the form page or at jnh17331@gmail.com
