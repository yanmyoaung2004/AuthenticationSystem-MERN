# MERN Stack Authentication System (Secure Version)

A full-featured **MERN (MongoDB, Express, React, Node.js) authentication system** with **JWT-based login, registration, and role-based access control**, built with best practices for security.

---

## Features

* User registration and login with **JWT tokens**
* Role-based access control (admin, user) with protected routes
* Passwords securely hashed with **bcrypt**
* Token refresh and logout
* RESTful API for frontend integration

---

## Tech Stack

* **Frontend:** React, Context API / Redux, Axios
* **Backend:** Node.js, Express.js, JWT, bcrypt
* **Database:** MongoDB
* **Environment:** dotenv for secret management

---

## Backend Setup (Secure)

### 1. Clone the repository

```bash
git clone https://github.com/yanmyoaung2004/AuthenticationSystem-MERN.git
cd AuthenticationSystem-MERN/backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

Create a `.env` file in the `backend/` folder:

```
JWT_SECRET=<your_jwt_secret_here>
EMAIL=<your_testing_email>
PASSWORD=<your_email_password>
ATLAS_URI=<your_mongodb_atlas_uri>
```

**Note:** Do **not** commit this file to GitHub. Add `.env` to `.gitignore`.

### 4. Update `config.js` to use environment variables

```javascript
// config.js
export default {
    JWT_SECRET: process.env.JWT_SECRET,
    EMAIL: process.env.EMAIL,
    PASSWORD: process.env.PASSWORD,
    ATLAS_URI: process.env.ATLAS_URI
};
```

### 5. Load `.env` in your entry file

```javascript
// server.js or app.js
import dotenv from 'dotenv';
dotenv.config();
```

### 6. Run the backend

```bash
npm run dev
```

Backend will run on `http://localhost:5000` (default). Adjust proxy in frontend if needed.

---

## Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

Frontend will run on `http://localhost:3000` and communicate securely with the backend.

---

## Key Benefits of This Approach

1. **Secrets are safe** — JWT secret, email, and DB URI are never hard-coded.
2. **Environment flexibility** — easily switch between dev, staging, and production.
3. **Professional setup** — makes your repo look secure and ready for production.

---
