# Backend Intro - Node.js, Express & MongoDB

A modular RESTful backend API built from scratch with Node.js, Express, and MongoDB (Mongoose), following the FreeCodeCamp Node.js & Express backend architecture patterns.

## 🚀 Features

- **Authentication & User Management**: User registration, login with `bcrypt` password hashing, and logout.
- **Character Posts CRUD**: Create, read, update, and delete posts with Mongoose schema validation.
- **Clean Architecture**: Clear separation of concerns with controllers, models, routes, and config.
- **Production-Ready Database Connection**: MongoDB Atlas connection handling with error catching and database name separation.

---

## 📁 Project Structure

```text
/backend
  /src
    /config
      constants.js
      database.js
    /controllers
      user.controller.js
      post.controller.js
    /models
      user.model.js
      post.model.js
    /routes
      user.route.js
      post.route.js
    app.js
    index.js
  .env
  .env.sample
  .gitignore
  package.json
  README.md
```

---

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/M0hitra0/backend-intro.git
cd backend-intro
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory:
```env
PORT=4000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxxxx.mongodb.net/
```

### 4. Run the application
- Development mode (with nodemon):
```bash
npm run dev
```
- Production mode:
```bash
npm start
```

---

## 📡 API Endpoints

### User Routes (`/api/v1/users`)
| Method | Endpoint | Description | Status Codes |
|---|---|---|---|
| `POST` | `/api/v1/users/register` | Register a new user | `201`, `400`, `500` |
| `POST` | `/api/v1/users/login` | Log in user with password verification | `200`, `400`, `404`, `500` |
| `POST` | `/api/v1/users/logout` | Log out user | `200`, `400`, `404`, `500` |

#### Example Request: Register User
```bash
POST /api/v1/users/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "secretpassword"
}
```

---

### Post Routes (`/api/v1/posts`)
| Method | Endpoint | Description | Status Codes |
|---|---|---|---|
| `POST` | `/api/v1/posts/create` | Create a new character post | `201`, `400`, `500` |
| `GET` | `/api/v1/posts/get-posts` | Fetch all posts | `200`, `500` |
| `PATCH` | `/api/v1/posts/update/:id` | Update post by MongoDB `_id` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/posts/delete/:id` | Delete post by MongoDB `_id` | `200`, `404`, `500` |

#### Example Request: Create Post
```bash
POST /api/v1/posts/create
Content-Type: application/json

{
  "name": "Aragorn",
  "description": "Strider, Chieftain of the Dúnedain and King of Gondor",
  "age": 87
}
```

---

## 🛡️ License
ISC
