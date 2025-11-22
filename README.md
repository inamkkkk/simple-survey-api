# Simple Survey API

A Node.js API for creating surveys and storing user responses.

## Features

*   Create surveys
*   Submit responses to surveys
*   User authentication (optional)

## Technologies

*   Node.js
*   Express.js
*   Mongoose (for MongoDB integration)
*   JSON Web Tokens (JWT) for authentication
*   bcrypt for password hashing

## Getting Started

1.  Clone the repository:

    
    git clone <repository_url>
    

2.  Install dependencies:

    
    npm install
    

3.  Configure environment variables:

    Create a `.env` file in the root directory and add the following variables:

    
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/survey_db
    JWT_SECRET=your_jwt_secret
    

4.  Run the application:

    
    npm start
    

## API Endpoints

### Surveys

*   `POST /api/surveys` - Create a new survey
*   `GET /api/surveys` - Get all surveys
*   `GET /api/surveys/:id` - Get a survey by ID
*   `PUT /api/surveys/:id` - Update a survey by ID
*   `DELETE /api/surveys/:id` - Delete a survey by ID

### Responses

*   `POST /api/surveys/:surveyId/responses` - Submit a response to a survey
*   `GET /api/surveys/:surveyId/responses` - Get all responses for a survey

### Auth (if enabled)

*   `POST /api/auth/register` - Register a new user
*   `POST /api/auth/login` - Login a user

## Database

The application uses MongoDB to store survey and response data.

## Authentication

The application uses JSON Web Tokens (JWT) for authentication.  (Optional, configure .env and routes)
