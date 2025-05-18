# Node.js and Express.js MongoDB API

This project is a simple API built with Node.js, Express.js, and MongoDB. It provides user registration and authentication functionalities.

## Project Structure

```
node-express-mongo-api
├── src
│   ├── app.js                # Entry point of the application
│   ├── config
│   │   └── db.js            # Database connection logic
│   ├── controllers
│   │   ├── authController.js # Handles user authentication
│   │   └── userController.js # Handles user-related operations
│   ├── models
│   │   └── userModel.js      # Mongoose schema for users
│   ├── routes
│   │   ├── authRoutes.js     # Authentication routes
│   │   └── userRoutes.js     # User-related routes
│   └── middleware
│       └── authMiddleware.js  # Authentication middleware
├── package.json               # NPM configuration file
├── .env                       # Environment variables
└── README.md                  # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd node-express-mongo-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string and any other necessary environment variables:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The API will be running on `http://localhost:3000`.

## Endpoints

- **POST /api/auth/register**: Create a new user.
- **POST /api/auth/login**: Authenticate a user and return a token.

## License

This project is licensed under the MIT License.