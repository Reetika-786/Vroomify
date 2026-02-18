# Vroomify - Car Rental Platform

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-brightgreen)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19+-blue)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8+-green)](https://www.mongodb.com/)

A modern, full-stack car rental platform with a responsive frontend, comprehensive admin dashboard, and robust backend API.

**[Live Demo](#-live-demo)** • **[Tech Stack](#-tech-stack)** • **[Getting Started](#-getting-started)** • **[Documentation](#-documentation)**

</div>

---

## 🚀 Live Demo

| Component | Link | Status |
|-----------|------|--------|
| **Frontend (User Portal)** | [https://vroomify-frontend.vercel.app/](https://vroomify-frontend.vercel.app/) | ✅ Live |
| **Admin Dashboard** | [https://vroomify-admin.vercel.app/](https://vroomify-admin.vercel.app/) | ✅ Live |
| **Backend API** | [https://vroomify-backend-fqy2.onrender.com](https://vroomify-backend-fqy2.onrender.com) | ✅ Live |

---

## 📋 Project Overview

Vroomify is a fully functional car rental platform that enables users to browse, book, and manage rental vehicles. The platform includes a comprehensive admin panel for managing inventory, bookings, and payments, with integrated payment processing via Stripe.

### Key Features

#### 🎯 User Features
- **Browse Cars** - Explore available vehicles with detailed information
- **Advanced Search** - Filter cars by location, date, and specifications
- **Secure Booking** - Real-time availability and instant confirmation
- **Payment Integration** - Seamless Stripe payment processing
- **Booking Management** - View, track, and manage active/past bookings
- **User Authentication** - JWT-based secure authentication
- **Responsive Design** - Optimized for all devices

#### 🔐 Admin Features
- **Fleet Management** - Add, edit, and manage vehicle inventory
- **Booking Dashboard** - Monitor all bookings and customer details
- **Image Management** - Cloudinary integration for vehicle photos
- **User Management** - Manage user accounts and permissions
- **Analytics** - Booking and revenue tracking

---

## 🛠️ Tech Stack

### Frontend (User Portal)
- **Framework**: React 19 with Vite
- **Styling**: Tailwind CSS 4
- **HTTP Client**: Axios
- **Routing**: React Router v7
- **Icons**: Lucide React, React Icons
- **Notifications**: React Toastify
- **Build Tool**: Vite (Lightning-fast bundling)

### Admin Dashboard
- **Framework**: React 19 with Vite
- **Styling**: Tailwind CSS 4
- **UI Components**: Lucide React, React Icons
- **HTTP Client**: Axios
- **Routing**: React Router v7
- **Notifications**: React Toastify

### Backend API
- **Runtime**: Node.js with ES Modules
- **Framework**: Express.js 5
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **Security**: 
  - bcryptjs - Password hashing
  - Helmet - HTTP security headers
  - CORS - Cross-origin resource sharing
- **File Upload**: Multer with Cloudinary integration
- **Payment**: Stripe API integration
- **Development**: Nodemon for hot reload
- **Validation**: Validator.js
- **Logging**: Morgan

### Infrastructure
- **Hosting**: Render (All services)
- **Image CDN**: Cloudinary
- **Version Control**: Git/GitHub
- **Package Manager**: npm

---

## 📁 Project Structure

```
car_rental/
├── frontend/                    # User-facing React application
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   ├── pages/              # Route pages
│   │   ├── assets/             # Static data and styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── .env
│
├── admin/                       # Admin dashboard
│   ├── src/
│   │   ├── components/         # Admin-specific components
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── .env
│
├── backend/                     # Express.js API server
│   ├── controllers/             # Business logic
│   ├── models/                  # MongoDB schemas
│   ├── routes/                  # API endpoints
│   ├── middlewares/             # Authentication & file upload
│   ├── config/                  # Database & Cloudinary setup
│   ├── uploads/                 # Temporary file storage
│   ├── server.js               # Entry point
│   ├── package.json
│   ├── render.yaml             # Render deployment config
│   └── .env
│
└── package.json                 # Root dependencies (Tailwind)
```

---

## ⚙️ Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** 18.x or higher
- **npm** 9.x or higher
- **MongoDB** (local or Atlas)
- **Git**

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/Reetika-786/Vroomify.git
```

#### 2. Install Root Dependencies
```bash
npm install
```

#### 3. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cat > .env << EOF
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
FRONTEND_URL=http://localhost:5173
ADMIN_URL=http://localhost:5174
MONGODB_URI=your_mongodb_uri
PORT=5000
EOF

# Start development server
npm run dev
```

The backend will be available at `http://localhost:5000`

#### 4. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env file
cat > .env << EOF
VITE_API_URL=http://localhost:5000
EOF

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:5173`

#### 5. Admin Dashboard Setup

```bash
cd admin

# Install dependencies
npm install

# Create .env file
cat > .env << EOF
VITE_API_URL=http://localhost:5000
EOF

# Start development server
npm run dev
```

The admin panel will be available at `http://localhost:5174`

---

## 🔑 Environment Variables

### Backend (`.env`)

| Variable | Description | Example |
|----------|-------------|---------|
| `STRIPE_SECRET_KEY` | Stripe API secret key | `sk_test_...` |
| `JWT_SECRET` | Secret key for JWT signing | Any long random string |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | Your cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key | Your API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | Your secret |
| `FRONTEND_URL` | Frontend application URL | `http://localhost:5173` |
| `ADMIN_URL` | Admin dashboard URL | `http://localhost:5174` |
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://...` |
| `PORT` | Server port | `5000` |

### Frontend (`.env`)

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend API base URL |

### Admin (`.env`)

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend API base URL |

---

## 🚀 Build & Deploy

### Build for Production

```bash
# Frontend
cd frontend
npm run build

# Admin Dashboard
cd admin
npm run build

# Backend (Node.js, no build needed)
cd backend
# Ready to deploy
```

### Deployment

Frontend services are currently deployed on **Vercel** and Backend on **Render**:

- **Frontend**: Deployed with `npm run build` and static file serving
- **Admin**: Deployed with `npm run build` and static file serving
- **Backend**: Deployed with `npm run start` on production branch

Check [render.yaml](backend/render.yaml) and [vercel.json](frontend/vercel.json) for deployment configurations.

---

## 📚 API Documentation

### Authentication Endpoints

```
POST   /api/users/register     - Register new user
POST   /api/users/login        - Login user
GET    /api/users/profile      - Get user profile (Protected)
```

### Car Endpoints

```
GET    /api/cars               - Get all cars
GET    /api/cars/:id           - Get car details
POST   /api/cars               - Create car (Admin)
PUT    /api/cars/:id           - Update car (Admin)
DELETE /api/cars/:id           - Delete car (Admin)
```

### Booking Endpoints

```
POST   /api/bookings           - Create booking
GET    /api/bookings           - Get user bookings (Protected)
GET    /api/bookings/:id       - Get booking details
PATCH  /api/bookings/:id       - Update booking status (Admin)
```

### Payment Endpoints

```
POST   /api/payments/create    - Create payment intent
POST   /api/payments/verify    - Verify payment
```

---

## 🔒 Security Features

- ✅ JWT-based authentication
- ✅ Password encryption with bcryptjs
- ✅ HTTP security headers with Helmet
- ✅ CORS protection
- ✅ Environment variable protection
- ✅ Secure file uploads via Multer
- ✅ Input validation with Validator.js
- ✅ MongoDB injection prevention

---

## 📊 Database Schema

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  isAdmin: Boolean,
  createdAt: Date
}
```

### Car Model
```javascript
{
  name: String,
  category: String,
  price: Number,
  image: String,
  carType: String,
  transmission: String,
  capacity: Number,
  fuel: String,
  available: Boolean,
  createdAt: Date
}
```

### Booking Model
```javascript
{
  userId: ObjectId,
  carId: ObjectId,
  checkInDate: Date,
  checkOutDate: Date,
  totalPrice: Number,
  status: String (pending, confirmed, completed, cancelled),
  paymentStatus: String,
  createdAt: Date
}
```

---

## 🤝 Contributing

Contributions are welcome! Please follow this process:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Code Standards

- Use ES6+ syntax
- Follow ESLint configuration
- Add comments for complex logic
- Test your changes locally
- Keep commit messages descriptive

---

## 🐛 Troubleshooting

### Backend won't connect to MongoDB
- Verify MongoDB URI in `.env`
- Check MongoDB Atlas IP whitelist
- Ensure network connectivity

### Frontend can't reach API
- Verify `VITE_API_URL` in `.env`
- Check backend is running
- Review CORS configuration in backend

### Image uploads failing
- Verify Cloudinary credentials
- Check image size limits
- Ensure proper file types

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

Built with ❤️ for learning full-stack development.

---

## 📞 Support

For issues or questions:
- Create an issue on GitHub
- Check existing documentation
- Review the backend logs

---

<div align="center">

### Made with React + Express + MongoDB

**[⬆ Back to Top](#vroomify---car-rental-platform)**

</div>
