# Installation & Setup Guide - Muzic Spotify Clone

## 📋 Prerequisites

- Node.js v16+
- MongoDB (local or MongoDB Atlas)
- Redis (local or Redis Cloud)
- Git
- npm or yarn

## 🚀 Quick Start (5 Minutes)

### Step 1: Clone Repository

```bash
git clone https://github.com/avik222kol-a11y/Muzic.git
cd Muzic
```

### Step 2: Install Dependencies

```bash
npm run install-all
```

This installs all dependencies for:
- Backend
- Frontend
- Admin Panel

### Step 3: Setup Environment Variables

```bash
# Backend
cp backend/.env.example backend/.env

# Frontend
cp frontend/.env.example frontend/.env

# Admin Panel
cp admin-panel/.env.example admin-panel/.env
```

### Step 4: Configure MongoDB & Redis

Edit `backend/.env`:

```env
MONGODB_URI=mongodb://localhost:27017/muzic-db
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_super_secret_key_here
```

### Step 5: Run All Services

```bash
npm run dev
```

This starts:
- Backend: http://localhost:5000
- Frontend: http://localhost:3000
- Admin Panel: http://localhost:3001

---

## 🐳 Docker Setup (Even Faster)

### Prerequisites
- Docker
- Docker Compose

### Run

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

Services will be available at:
- Backend: http://localhost:5000
- Frontend: http://localhost:3000
- Admin Panel: http://localhost:3001
- MongoDB: localhost:27017
- Redis: localhost:6379

---

## 📝 Manual Setup

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env

# Edit .env with your database credentials
npm run dev
```

Server runs on: `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env
npm start
```

App runs on: `http://localhost:3000`

### Admin Panel Setup

```bash
cd admin-panel
npm install
cp .env.example .env
npm start
```

Admin runs on: `http://localhost:3001`

---

## 🔐 Login Credentials

### User Account
- Email: `user@example.com`
- Password: `User@123456`

### Admin Account
- Email: `admin@muzic.com`
- Password: `Admin@123456`

**⚠️ Change these in production!**

---

## 🌐 Environment Variables

### Backend (.env)

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/muzic-db
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRE=30d

# File Upload (Cloudinary)
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# CORS
CORS_ORIGIN=http://localhost:3000,http://localhost:3001
```

### Frontend (.env)

```env
REACT_APP_API_URL=http://localhost:5000/api/v1
REACT_APP_CLOUDINARY_NAME=your_cloudinary_name
```

### Admin Panel (.env)

```env
REACT_APP_API_URL=http://localhost:5000/api/v1
REACT_APP_ADMIN_SECRET=admin_secret_2024
```

---

## 📦 Project Structure

```
Muzic/
├── backend/                 # Node.js Express API
│   ├── config/             # Database & Redis config
│   ├── controllers/        # Route handlers
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes
│   ├── middleware/         # Auth, validation, errors
│   ├── services/           # Business logic
│   ├── uploads/            # Uploaded files
│   ├── .env.example
│   ├── server.js           # Entry point
│   └── package.json
│
├── frontend/                # React.js User App
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── store/          # Redux store
│   │   ├── services/       # API services
│   │   ├── hooks/          # Custom hooks
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── public/
│   ├── .env.example
│   └── package.json
│
├── admin-panel/            # React Admin Dashboard
│   ├── src/
│   │   ├── components/     # Admin components
│   │   ├── pages/          # Dashboard pages
│   │   ├── services/       # API services
│   │   ├── store/          # Redux store
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── public/
│   ├── .env.example
│   └── package.json
│
├── docs/                   # Documentation
├── docker-compose.yml      # Docker configuration
├── .gitignore
├── LICENSE
├── package.json            # Root package.json
└── README.md
```

---

## 🧪 Testing

### Run All Tests

```bash
npm run test
```

### Backend Tests

```bash
cd backend
npm test
```

### Frontend Tests

```bash
cd frontend
npm test
```

---

## 📊 Database Setup

### MongoDB

**Local MongoDB:**

```bash
# macOS with Homebrew
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**MongoDB Atlas (Cloud):**

1. Visit [mongodb.com/cloud](https://www.mongodb.com/cloud)
2. Create free account
3. Create cluster
4. Get connection string
5. Update `MONGODB_URI` in `.env`

### Redis

**Local Redis:**

```bash
# macOS with Homebrew
brew install redis
brew services start redis
```

**Redis Cloud:**

1. Visit [redis.com/cloud](https://redis.com/cloud)
2. Create free tier database
3. Get connection URL
4. Update `REDIS_URL` in `.env`

---

## 🔧 Common Issues

### Port Already in Use

```bash
# Kill process on port 5000 (Backend)
kill -9 $(lsof -ti:5000)

# Kill process on port 3000 (Frontend)
kill -9 $(lsof -ti:3000)

# Kill process on port 3001 (Admin)
kill -9 $(lsof -ti:3001)
```

### MongoDB Connection Failed

```bash
# Check if MongoDB is running
mongo --version

# Start MongoDB
brew services start mongodb-community
```

### Redis Connection Failed

```bash
# Check if Redis is running
redis-cli ping

# Start Redis
brew services start redis
```

### npm install fails

```bash
# Clear npm cache
npm cache clean --force

# Try install again
npm install
```

---

## 📈 Production Deployment

### Heroku

```bash
# Install Heroku CLI
brew tap heroku/brew && brew install heroku

# Login
heroku login

# Create app
heroku create your-app-name

# Set environment variables
heroku config:set JWT_SECRET=your_secret

# Deploy
git push heroku main
```

### AWS

1. EC2 Instance Setup
2. Install Node.js and npm
3. Clone repository
4. Setup environment variables
5. Use PM2 for process management
6. Setup Nginx reverse proxy
7. Enable SSL with Let's Encrypt

### DigitalOcean / Linode

1. Create Droplet
2. SSH into server
3. Follow manual setup steps
4. Use PM2 + Nginx

---

## 🔐 Security Checklist

- [ ] Change default admin password
- [ ] Change JWT_SECRET in production
- [ ] Enable HTTPS/SSL
- [ ] Setup firewall rules
- [ ] Enable CORS properly
- [ ] Setup rate limiting
- [ ] Enable MongoDB authentication
- [ ] Use strong database passwords
- [ ] Setup environment variables properly
- [ ] Enable logging and monitoring

---

## 📚 Additional Resources

- [MongoDB Documentation](https://docs.mongodb.com)
- [Redis Documentation](https://redis.io/documentation)
- [Express.js Guide](https://expressjs.com)
- [React Documentation](https://react.dev)
- [JWT.io](https://jwt.io)

---

## 🆘 Support

For issues:
1. Check this guide
2. Check logs: `docker-compose logs -f`
3. Open GitHub issue
4. Email: support@muzic.com

---

## 📄 License

MIT License - See LICENSE file

---

**Made with ❤️ by Muzic Team**
