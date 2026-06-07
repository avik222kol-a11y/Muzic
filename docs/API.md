# API Documentation - Muzic

## Base URL

```
http://localhost:5000/api/v1
```

## Authentication

All authenticated endpoints require JWT token in header:

```
Authorization: Bearer <token>
```

---

## Authentication Routes

### Register User

**POST** `/auth/register`

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "SecurePass@123"
}
```

**Response:**
```json
{
  "token": "eyJhbGc...",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

### Login User

**POST** `/auth/login`

```json
{
  "email": "john@example.com",
  "password": "SecurePass@123"
}
```

**Response:**
```json
{
  "token": "eyJhbGc...",
  "refreshToken": "eyJhbGc...",
  "user": {...}
}
```

### Get Current User

**GET** `/auth/me`

Authentication: Required

**Response:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "username": "john_doe",
  "email": "john@example.com",
  "isPremium": false,
  "followers": [],
  "following": []
}
```

---

## Songs Routes

### Get All Songs

**GET** `/songs?page=1&limit=20&genre=pop`

**Response:**
```json
{
  "songs": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Imagine",
      "artist": {...},
      "genre": "pop",
      "duration": 183,
      "plays": 1000,
      "likes": 500
    }
  ],
  "total": 100,
  "pages": 5
}
```

### Get Song by ID

**GET** `/songs/:id`

**Response:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Imagine",
  "artist": {...},
  "album": {...},
  "genre": "pop",
  "duration": 183,
  "audioUrl": "https://...",
  "coverImage": "https://...",
  "plays": 1000,
  "likes": 500
}
```

### Search Songs

**GET** `/songs/search?q=imagine`

**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Imagine",
    "artist": {...}
  }
]
```

### Create Song (Admin)

**POST** `/songs`

Authentication: Required (Admin)

Content-Type: multipart/form-data

```
Fields:
- title (string)
- artist (ObjectId)
- album (ObjectId)
- genre (string)
- duration (number)
- audioFile (file)
- coverImage (file)
```

### Update Song (Admin)

**PUT** `/songs/:id`

Authentication: Required (Admin)

```json
{
  "title": "New Title",
  "genre": "rock"
}
```

### Delete Song (Admin)

**DELETE** `/songs/:id`

Authentication: Required (Admin)

### Record Play

**POST** `/songs/:id/play`

Increments play count.

### Like Song

**POST** `/songs/:id/like`

Authentication: Required

### Unlike Song

**DELETE** `/songs/:id/like`

Authentication: Required

---

## Playlist Routes

### Get User Playlists

**GET** `/playlists`

Authentication: Required

**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "My Favorites",
    "description": "My favorite songs",
    "songs": [],
    "owner": "507f1f77bcf86cd799439012",
    "isPublic": true
  }
]
```

### Create Playlist

**POST** `/playlists`

Authentication: Required

```json
{
  "name": "My Playlist",
  "description": "Description",
  "isPublic": true
}
```

### Get Playlist

**GET** `/playlists/:id`

### Update Playlist

**PUT** `/playlists/:id`

Authentication: Required

### Delete Playlist

**DELETE** `/playlists/:id`

Authentication: Required

### Add Song to Playlist

**POST** `/playlists/:id/songs`

Authentication: Required

```json
{
  "songId": "507f1f77bcf86cd799439011"
}
```

### Remove Song from Playlist

**DELETE** `/playlists/:id/songs/:songId`

Authentication: Required

---

## User Routes

### Get User Profile

**GET** `/users/:id`

**Response:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "username": "john_doe",
  "email": "john@example.com",
  "profileImage": "https://...",
  "bio": "Music lover",
  "followers": [...],
  "following": [...],
  "isPremium": false
}
```

### Update Profile

**PUT** `/users/:id`

Authentication: Required

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "bio": "Music lover",
  "profileImage": "https://..."
}
```

### Follow User

**POST** `/users/:id/follow`

Authentication: Required

### Unfollow User

**DELETE** `/users/:id/follow`

Authentication: Required

---

## Admin Routes

### Get Dashboard

**GET** `/admin/dashboard`

Authentication: Required (Admin)

**Response:**
```json
{
  "totalUsers": 1000,
  "totalSongs": 5000,
  "totalPlaylists": 500,
  "totalPlays": 100000
}
```

### Get All Users

**GET** `/admin/users?page=1&limit=20`

Authentication: Required (Admin)

### Get All Songs

**GET** `/admin/songs?page=1&limit=20`

Authentication: Required (Admin)

### Bulk Upload Songs

**POST** `/admin/songs/bulk-upload`

Authentication: Required (Admin)

Content-Type: multipart/form-data

```
File: CSV or JSON with songs data
```

### Auto Generate Playlists

**POST** `/admin/playlists/auto-generate`

Authentication: Required (Admin)

```json
{
  "type": "mood",
  "count": 10
}
```

### Get Analytics

**GET** `/admin/analytics?period=month`

Authentication: Required (Admin)

---

## Error Responses

### 400 Bad Request

```json
{
  "success": false,
  "message": "Validation error",
  "errors": [...]
}
```

### 401 Unauthorized

```json
{
  "success": false,
  "message": "Invalid or missing token"
}
```

### 403 Forbidden

```json
{
  "success": false,
  "message": "You don't have permission"
}
```

### 404 Not Found

```json
{
  "success": false,
  "message": "Resource not found"
}
```

### 500 Server Error

```json
{
  "success": false,
  "message": "Internal server error"
}
```

---

## Status Codes

- `200` - OK
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Server Error

---

## Rate Limiting

- **Rate Limit:** 100 requests per 15 minutes
- **Header:** `X-RateLimit-Remaining`

---

## Testing Endpoints

You can test API endpoints using:
- Postman
- Insomnia
- Thunder Client (VS Code)
- cURL

---

**For more details, visit the repository documentation.**
