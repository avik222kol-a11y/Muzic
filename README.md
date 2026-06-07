# 🎵 Muzic - Professional Spotify Clone

**Complete Full-Stack Music Streaming Platform with Professional Admin Panel**

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Node](https://img.shields.io/badge/Node-v16+-green.svg)
![React](https://img.shields.io/badge/React-v18+-blue.svg)

## ✨ Features

### 👥 User Features
- ✅ User Authentication (Sign up, Login, Profile)
- ✅ Advanced Music Player (Play, Pause, Skip, Shuffle, Repeat)
- ✅ Playlist Management (Create, Edit, Delete, Share)
- ✅ Search & Discover Music
- ✅ Favorite Tracks & Artists
- ✅ User History & Recently Played
- ✅ Follow Artists & Users
- ✅ Premium/Subscription System
- ✅ Personalized Recommendations
- ✅ Social Features (Like, Share, Comments)
- ✅ Offline Download (Premium)
- ✅ High Quality Audio (320kbps Premium)

### 🎛️ Admin Panel Features
- ��� **Professional Dashboard** with Real-time Analytics
- ✅ **Song Management** (Add, Edit, Delete, Bulk Upload)
- ✅ **Artist Management** with Stats
- ✅ **Album Management**
- ✅ **Auto Playlist Generation** (AI-powered)
- ✅ **User Management & Analytics**
- ✅ **Revenue & Subscription Tracking**
- ✅ **Content Moderation**
- ✅ **System Settings & Configuration**
- ✅ **Backup & Export Features**
- ✅ **Performance Monitoring**
- ✅ **Advanced Reporting**

### 🔧 Technical Features
- ✅ JWT Authentication with Refresh Tokens
- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ Real-time Notifications
- ✅ Caching with Redis
- ✅ CDN for Audio/Image Streaming
- ✅ Database Optimization & Indexing
- ✅ API Rate Limiting
- ✅ Security (CORS, XSS, CSRF, Helmet)
- ✅ Docker Support with Docker Compose
- ✅ CI/CD Ready (GitHub Actions)
- ✅ Error Handling & Logging
- ✅ Input Validation & Sanitization

## 🏗️ Tech Stack

### Frontend
```
✓ React.js v18+ with TypeScript
✓ Tailwind CSS for styling
✓ Redux Toolkit for state management
✓ Axios for API calls
✓ React Router v6
✓ Framer Motion for animations
✓ Web Audio API for playback
✓ Chart.js for analytics
```

### Backend
```
✓ Node.js + Express.js
✓ MongoDB + Mongoose ODM
✓ Redis for caching
✓ JWT Authentication (jsonwebtoken)
✓ Multer for file uploads
✓ Winston for logging
✓ Nodemailer for emails
✓ Socket.io for real-time features
```

### Admin Panel
```
✓ React.js with TypeScript
✓ Material-UI (MUI) for components
✓ React Admin (ra) framework
✓ Advanced charting and analytics
✓ Drag-and-drop file upload
```

### DevOps
```
✓ Docker & Docker Compose
✓ MongoDB Atlas (cloud)
✓ Redis Cloud (cloud)
✓ AWS S3 / Cloudinary (file storage)
✓ GitHub Actions for CI/CD
✓ PM2 for process management
```

## 📁 Project Structure

```
Muzic/
├── backend/                  # Node.js Express Server
│   ├── config/              # Database & env config
│   ├── controllers/         # Route controllers
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API routes
│   ├── middleware/          # Custom middleware
│   ├── utils/               # Helper functions
│   ├── services/            # Business logic
│   ├── uploads/             # Uploaded files
│   ├── .env.example         # Environment template
│   ├── server.js            # Main entry point
│   └── package.json
│
├── frontend/                # React User App
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── store/           # Redux store
│   │   ├── services/        # API services
│   │   ├── hooks/           # Custom hooks
│   │   ├── utils/           # Utilities
│   │   ├── styles/          # Global styles
│   │   ├── App.tsx          # Main app
│   │   └── index.tsx        # Entry point
│   ├── public/              # Static files
│   ├── .env.example
│   └── package.json
│
├── admin-panel/             # React Admin Dashboard
│   ├── src/
│   │   ├── components/      # Admin components
│   │   ├── pages/           # Dashboard pages
│   │   ├── services/        # API services
│   │   ├── store/           # Redux store
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── public/
│   ├── .env.example
│   └── package.json
│
├── docker-compose.yml       # Docker configuration
├── .gitignore
├── LICENSE
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js v16+ installed
- MongoDB (local or Atlas)
- Redis (local or Redis Cloud)
- npm or yarn

### Option 1: Quick Setup (Recommended)

```bash
# 1. Clone repository
git clone https://github.com/avik222kol-a11y/Muzic.git
cd Muzic

# 2. Install all dependencies
npm run install-all

# 3. Setup environment variables
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
cp admin-panel/.env.example admin-panel/.env

# Edit the .env files with your credentials

# 4. Run all services
npm run dev
```

### Option 2: Using Docker

```bash
# Start all services with Docker
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Option 3: Manual Setup

#### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB & Redis credentials
npm run dev
# Server runs on http://localhost:5000
```

#### Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env
npm start
# App runs on http://localhost:3000
```

#### Admin Panel Setup
```bash
cd admin-panel
npm install
cp .env.example .env
npm start
# Admin runs on http://localhost:3001
```

## 🔐 Default Admin Credentials

```
Email: admin@muzic.com
Password: Admin@123456
```

**⚠️ Change these immediately in production!**

## 📡 API Documentation

API Base URL: `http://localhost:5000/api/v1`

### Authentication Endpoints

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "SecurePassword@123",
  "firstName": "John",
  "lastName": "Doe"
}
```

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePassword@123"
}

Response:
{
  "token": "eyJhbGc...",
  "refreshToken": "eyJhbGc...",
  "user": {...}
}
```

#### Get Current User
```http
GET /auth/me
Authorization: Bearer <token>
```

### Songs Endpoints

#### Get All Songs
```http
GET /songs?page=1&limit=20&genre=pop
```

#### Get Single Song
```http
GET /songs/:id
```

#### Search Songs
```http
GET /songs/search?q=imagine
```

#### Add Song (Admin)
```http
POST /songs
Authorization: Bearer <admin_token>
Content-Type: multipart/form-data

Fields:
- title (string)
- artist (ObjectId)
- album (ObjectId)
- genre (string)
- duration (number)
- audioFile (file)
- coverImage (file)
```

#### Update Song (Admin)
```http
PUT /songs/:id
Authorization: Bearer <admin_token>
Content-Type: application/json
```

#### Delete Song (Admin)
```http
DELETE /songs/:id
Authorization: Bearer <admin_token>
```

### Playlist Endpoints

#### Get User Playlists
```http
GET /playlists
Authorization: Bearer <token>
```

#### Create Playlist
```http
POST /playlists
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "My Favorites",
  "description": "My favorite songs",
  "isPublic": true
}
```

#### Add Song to Playlist
```http
POST /playlists/:id/songs
Authorization: Bearer <token>
Content-Type: application/json

{
  "songId": "507f1f77bcf86cd799439011"
}
```

#### Remove Song from Playlist
```http
DELETE /playlists/:id/songs/:songId
Authorization: Bearer <token>
```

### Admin Endpoints

#### Get Dashboard Stats
```http
GET /admin/dashboard
Authorization: Bearer <admin_token>
```

#### Get All Users
```http
GET /admin/users?page=1&limit=20
Authorization: Bearer <admin_token>
```

#### Get All Songs
```http
GET /admin/songs?page=1&limit=20
Authorization: Bearer <admin_token>
```

#### Bulk Upload Songs
```http
POST /admin/songs/bulk-upload
Authorization: Bearer <admin_token>
Content-Type: multipart/form-data

File: CSV or JSON with song data
```

#### Auto Generate Playlists
```http
POST /admin/playlists/auto-generate
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "type": "mood",  // or "genre", "trending"
  "count": 10
}
```

#### Get Analytics
```http
GET /admin/analytics?period=month
Authorization: Bearer <admin_token>
```

## 🗄️ Database Schema

### User Model
```javascript
{
  _id: ObjectId,
  username: String (unique),
  email: String (unique),
  password: String (hashed),
  firstName: String,
  lastName: String,
  profileImage: String,
  bio: String,
  followers: [ObjectId],
  following: [ObjectId],
  isPremium: Boolean (default: false),
  subscriptionEnd: Date,
  subscriptionType: String ("free", "pro", "premium"),
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### Song Model
```javascript
{
  _id: ObjectId,
  title: String,
  artist: ObjectId (ref: Artist),
  album: ObjectId (ref: Album),
  genre: String,
  mood: String,
  duration: Number,
  audioUrl: String,
  coverImage: String,
  releaseDate: Date,
  plays: Number (default: 0),
  likes: [ObjectId],
  likeCount: Number,
  lyrics: String,
  isExplicit: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Playlist Model
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  owner: ObjectId (ref: User),
  songs: [ObjectId],
  coverImage: String,
  isPublic: Boolean,
  isAutoGenerated: Boolean,
  category: String,
  mood: String,
  genre: String,
  likes: [ObjectId],
  followers: [ObjectId],
  createdAt: Date,
  updatedAt: Date
}
```

### Artist Model
```javascript
{
  _id: ObjectId,
  name: String,
  bio: String,
  profileImage: String,
  followers: [ObjectId],
  genres: [String],
  monthlyListeners: Number,
  verified: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Album Model
```javascript
{
  _id: ObjectId,
  title: String,
  artist: ObjectId (ref: Artist),
  coverImage: String,
  releaseDate: Date,
  songs: [ObjectId],
  genre: String,
  description: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🎯 Admin Panel Features in Detail

### 1. Dashboard
- Real-time user statistics
- Total plays tracking
- Revenue metrics
- New users this month
- Active subscriptions
- System health status
- Charts and graphs

### 2. Song Management
- Add individual songs
- Bulk upload (CSV/JSON)
- Edit song details
- Delete songs
- View song statistics
- Manage covers and audio files
- Genre classification
- Mood tagging

### 3. Artist Management
- Add/edit artists
- Upload profile images
- Verify artists
- View artist statistics
- Manage artist followings

### 4. Playlist Management
- Create playlists
- Auto-generate playlists by:
  - Mood (Happy, Sad, Energetic, etc.)
  - Genre (Pop, Rock, Hip-Hop, etc.)
  - Trending (Daily, Weekly, Monthly)
  - New releases
  - Artist collaborations
- Edit existing playlists
- Delete playlists
- Add/remove songs

### 5. User Management
- View all users
- Search and filter users
- Ban/unban users
- View user statistics
- Manage subscriptions
- Reset passwords
- Export user data

### 6. Analytics
- Play count analytics
- User engagement metrics
- Revenue tracking
- Subscription analytics
- Genre popularity
- Artist performance
- Custom date range reports
- Export reports

### 7. Settings
- System configuration
- Email templates
- Payment gateway settings
- Storage settings
- Security settings
- Backup and restore

## 🤖 AI-Powered Features

### Automatic Playlist Generation
```
✓ Mood Detection
  - Analyzes audio features
  - Groups similar songs
  - Creates mood-based playlists

✓ Genre Classification
  - Categorizes songs
  - Creates genre playlists
  - Cross-genre recommendations

✓ Trending Analysis
  - Tracks play counts
  - Identifies trending songs
  - Creates trending playlists
```

### Smart Recommendations
```
✓ Content-Based Filtering
  - Similar artists
  - Similar genres
  - Similar moods

✓ Collaborative Filtering
  - Users with similar taste
  - Songs liked by similar users

✓ Hybrid Approach
  - Combines both methods
  - Personalized suggestions
```

## 🔒 Security Features

✅ **Authentication & Authorization**
- JWT tokens with expiration
- Refresh token rotation
- Password hashing (bcrypt)
- Role-based access control (RBAC)
- Two-factor authentication (optional)

✅ **API Security**
- Rate limiting
- CORS protection
- CSRF token validation
- Input validation & sanitization
- SQL injection prevention
- XSS protection

✅ **Data Security**
- HTTPS/SSL encryption
- Database encryption
- Secure password reset
- Session management
- Audit logging

## ⚡ Performance Optimization

✅ **Caching Strategy**
- Redis for frequently accessed data
- Browser caching headers
- Database query optimization
- Indexed database fields

✅ **Frontend Optimization**
- Code splitting
- Lazy loading
- Image optimization
- CSS minification
- JavaScript bundling

✅ **Backend Optimization**
- Database indexing
- Query optimization
- Response compression
- CDN for static assets
- Connection pooling

## 📊 Monitoring & Logging

✅ **Application Logging**
- Winston logger
- Error tracking
- Request/response logging
- Performance monitoring

✅ **Monitoring Tools**
- Real-time dashboard
- System health checks
- Database monitoring
- API performance metrics

## 🧪 Testing

```bash
# Backend Tests
cd backend
npm test

# Frontend Tests
cd frontend
npm test

# Integration Tests
npm run test:integration

# E2E Tests
npm run test:e2e
```

## 📦 Deployment

### Heroku Deployment
```bash
heroku login
heroku create your-app-name
git push heroku main
```

### AWS Deployment
```bash
# EC2, ECS, or Elastic Beanstalk
# See deployment documentation
```

### Docker Deployment
```bash
docker-compose -f docker-compose.yml up -d
```

## 🛣️ Roadmap

- [ ] Live Streaming Support
- [ ] Podcast Integration
- [ ] Video Content Support
- [ ] AI Music Generation
- [ ] Advanced ML Recommendations
- [ ] Blockchain for Artist Payments
- [ ] VR/AR Music Experiences
- [ ] Artist Analytics Platform
- [ ] Mobile Apps (iOS & Android)
- [ ] Desktop Apps (Electron)
- [ ] Collaborative Playlists
- [ ] Karaoke Mode
- [ ] Concert Recommendations

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

## 💬 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Email: support@muzic.com
- Discord: [Join our community](https://discord.gg/muzic)

## 👨‍💻 Authors

**Created for Professional Music Streaming**

---

## 🎉 Acknowledgments

Thanks to all contributors and open-source community members!

---

**Made with ❤️ by Muzic Team**

⭐ Star this repository if you find it helpful!