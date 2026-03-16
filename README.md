STUDENT AUTHENTICATION API (ASSIGNMENT 6B)

A simple Node.js and Express-based authentication API with JWT support and MongoDB integration.

FEATURES
--------
- User Registration: Register with full name, email, and password. 
- User Login: Secure login with Argon2 password hashing and JWT token generation.
- Profile Endpoint: Fetch currently logged-in user's details using a protected route.
- Middleware Integration:
  - Request logging (Logger).
  - Centralized error handling.
  - JWT verification (Auth).
- Optional Observable Logging: Support for SolarWinds log shipping.

TECH STACK
----------
- Runtime: Node.js (ES Modules)
- Framework: Express 5
- Database: MongoDB (Mongoose)
- Security: Argon2, JSON Web Token (JWT)
- Utilities: http-errors, http-status-codes, axios

INSTALLATION
------------
1. Install dependencies:
   npm install

2. Set up environment variables:
   Create a .env file in the root directory based on .env.example:
   PORT=3000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_super_secret_key
   JWT_EXPIRES_IN=1d
   SOLARWINDS_TOKEN=optional

GETTING STARTED
---------------
1. Start the development server:
   npm run dev

2. Start for production:
   npm start

API ENDPOINTS
-------------
- POST /users/register: Register a new user.
- POST /users/login: Authenticate and receive a JWT.
- GET /users/me: Get protected profile information (Requires Bearer Token).

DEPLOYMENT
----------
Configured for deployment on Vercel via vercel.json.
