# 🍽️ Full Stack Restaurant WebApp

A comprehensive full-stack web application designed for restaurant management. This project allows users to browse menus, place orders, and make reservations, while providing administrators with powerful tools to manage the restaurant's operations.

## 🚀 Features

- 🧾 **Menu Management** – View and update restaurant menus.
- 📦 **Order Management** – Place and track orders.
- 🪑 **Table Reservations** – Book tables online with real-time availability.
- 🔒 **User Authentication** – Secure sign-up, login, and JWT-based authorization.
- 🧑‍💼 **Admin Panel** – Access dashboard to manage items, reservations, and more.
- 📱 **Responsive UI** – Works seamlessly on all screen sizes.

## 🛠️ Tech Stack

### 🔧 Frontend
- HTML, CSS, JavaScript
- (Add framework if used, e.g., React.js)

### 🔩 Backend
- Node.js
- Express.js

### 🗃️ Database
- MongoDB

### 🔐 Authentication
- JSON Web Tokens (JWT)
- bcrypt for password hashing

### ☁️ Deployment
- (Mention if deployed on Vercel, Netlify, or Heroku)

---

## 🧰 Installation

Follow these steps to get the app running locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/CodeAXwOrlD/FULL_STACK_RESTAURANT_WEBAPP.git
   cd FULL_STACK_RESTAURANT_WEBAPP

2. **Install server-side dependencies**
```bash
cd server
npm install
```

3. **Set up environment variables**
*Create a .env file in the /server directory:*
```bash
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
4. **Run the backend**
```bash
npm start
```
