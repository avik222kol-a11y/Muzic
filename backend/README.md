# Backend - Muzic Spotify Clone

Node.js Express API Server with MongoDB, Redis, JWT Authentication, and Admin Features.

## Installation

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

## Environment Variables

Create `.env` file:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/muzic-db
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_jwt_secret_key_here_change_in_production
JWT_EXPIRE=7d
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRE=30d
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
CORS_ORIGIN=http://localhost:3000,http://localhost:3001
```

## API Documentation

Base URL: `http://localhost:5000/api/v1`

### Authentication Routes
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user
- `POST /auth/refresh` - Refresh token
- `POST /auth/logout` - Logout user
- `GET /auth/me` - Get current user

### User Routes
- `GET /users/:id` - Get user profile
- `PUT /users/:id` - Update user profile
- `DELETE /users/:id` - Delete user
- `POST /users/:id/follow` - Follow user
- `DELETE /users/:id/follow` - Unfollow user

### Song Routes
- `GET /songs` - Get all songs
- `GET /songs/:id` - Get song details
- `GET /songs/search` - Search songs
- `POST /songs` - Create song (Admin)
- `PUT /songs/:id` - Update song (Admin)
- `DELETE /songs/:id` - Delete song (Admin)
- `POST /songs/:id/play` - Record play
- `POST /songs/:id/like` - Like song
- `DELETE /songs/:id/like` - Unlike song

### Playlist Routes
- `GET /playlists` - Get user playlists
- `POST /playlists` - Create playlist
- `GET /playlists/:id` - Get playlist details
- `PUT /playlists/:id` - Update playlist
- `DELETE /playlists/:id` - Delete playlist
- `POST /playlists/:id/songs` - Add song to playlist
- `DELETE /playlists/:id/songs/:songId` - Remove song from playlist

### Admin Routes
- `GET /admin/dashboard` - Dashboard statistics
- `GET /admin/users` - All users
- `GET /admin/songs` - All songs
- `POST /admin/songs/bulk-upload` - Bulk upload songs
- `POST /admin/playlists/auto-generate` - Auto generate playlists
- `GET /admin/analytics` - System analytics

## Features

✅ JWT Authentication with Refresh Tokens
✅ User Registration & Login
✅ Song Management (CRUD)
✅ Playlist Management
✅ Search & Filtering
✅ Play Count Tracking
✅ Like/Favorite System
✅ Admin Dashboard
✅ Auto Playlist Generation
✅ Redis Caching
✅ Error Handling
✅ Rate Limiting
✅ Input Validation
