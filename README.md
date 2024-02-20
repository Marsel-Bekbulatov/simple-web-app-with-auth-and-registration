# Simple Web App with Authentication and Registration

This is a simple web application with authentication and registration functionality.

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js
- Database: MongoDB

## Project Structure

  - `src/`: Contains the source code for the web application.
  - `scripts/`: Contains server-side and client-side scripts.
  - `styles/`: Contains stylesheets for the web pages.

## Setup

1. Clone the repository:

   git clone https://github.com/your-username/simple-web-app-with-auth.git

## Install dependencies:

cd simple-web-app-with-auth
npm install

Configure MongoDB:

    Update the MongoDB connection string in src/scripts/server.js.

Run the server:

    node src/scripts/server.js

    Open the web app in your browser:

    http://localhost:4000

Usage

    Access the registration page: http://localhost:4000/registration.html
    Access the authentication page: http://localhost:4000/auth.html
    Access the home page (after successful authentication): http://localhost:4000/home.html