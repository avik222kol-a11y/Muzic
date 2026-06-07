# Troubleshooting Guide - Muzic

## Common Issues & Solutions

### Backend Issues

#### MongoDB Connection Failed

**Error:** `MongoDB connection error: connect ECONNREFUSED`

**Solution:**
```bash
# Check if MongoDB is running
mongo --version

# Start MongoDB
brew services start mongodb-community

# Or verify connection string
# MONGODB_URI=mongodb://localhost:27017/muzic-db
```

#### Redis Connection Failed

**Error:** `Error: connect ECONNREFUSED 127.0.0.1:6379`

**Solution:**
```bash
# Check if Redis is running
redis-cli ping

# Start Redis
brew services start redis

# Or verify connection string
# REDIS_URL=redis://localhost:6379
```

#### Port Already in Use

**Error:** `listen EADDRINUSE: address already in use :::5000`

**Solution:**
```bash
# Kill process on port 5000
kill -9 $(lsof -ti:5000)

# Or change port in .env
PORT=5001
```

#### JWT Secret Not Set

**Error:** `JWT_SECRET is not defined`

**Solution:**
```bash
# Add to .env
JWT_SECRET=your_super_secret_key_here
```

### Frontend Issues

#### API Connection Failed

**Error:** `CORS policy: No 'Access-Control-Allow-Origin' header`

**Solution:**
```bash
# Check backend is running
# http://localhost:5000

# Verify CORS settings in backend
# CORS_ORIGIN=http://localhost:3000
```

#### Redux Store Not Working

**Error:** `Cannot read properties of undefined`

**Solution:**
```bash
# Clear browser cache
# Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

# Check Redux DevTools
# Install Redux DevTools browser extension
```

#### Routing Issues

**Error:** `Cannot GET /route`

**Solution:**
```bash
# Ensure React Router is properly configured
# Check BrowserRouter in App.tsx
# Clear browser cache and refresh
```

### Admin Panel Issues

#### Login Fails

**Error:** `Login failed: Invalid credentials`

**Solution:**
```bash
# Use default credentials
Email: admin@muzic.com
Password: Admin@123456

# Or check backend is running
# Verify API_URL in .env
```

#### Dashboard Not Loading

**Error:** `Failed to fetch dashboard`

**Solution:**
```bash
# Check backend is running
# Verify authentication token
# Check browser console for errors
```

### Docker Issues

#### Container Won't Start

**Error:** `Docker daemon is not running`

**Solution:**
```bash
# Start Docker Desktop (macOS/Windows)
# Or start Docker service (Linux)

# Check Docker status
docker ps
```

#### Port Conflicts with Docker

**Error:** `port is already allocated`

**Solution:**
```bash
# Stop existing containers
docker-compose down

# Or change ports in docker-compose.yml
```

#### Database Not Persisting

**Solution:**
```bash
# Check volumes in docker-compose.yml
# Ensure mongodb_data volume exists

# List volumes
docker volume ls

# Create if missing
docker volume create mongodb_data
```

### npm/Package Issues

#### npm install fails

**Error:** `npm ERR! code E503`

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Try again
npm install

# Or use yarn
yarn install
```

#### Missing Dependencies

**Error:** `Cannot find module 'express'`

**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules
npm install

# Or in specific directory
cd backend && npm install
```

### Database Issues

#### MongoDB Data Loss

**Solution:**
```bash
# Backup database
mongodump --uri "mongodb://localhost:27017/muzic-db" --out ./backup

# Restore from backup
mongorestore --uri "mongodb://localhost:27017/muzic-db" ./backup
```

#### Redis Memory Issues

**Solution:**
```bash
# Check Redis memory
redis-cli info memory

# Clear Redis cache
redis-cli FLUSHALL

# Set max memory
redis-cli CONFIG SET maxmemory 256mb
```

### Performance Issues

#### Slow API Responses

**Solution:**
```bash
# Check database indexes
# Enable caching with Redis
# Optimize database queries
# Check backend logs
```

#### Frontend Slow Loading

**Solution:**
```bash
# Enable code splitting
# Optimize images
# Use lazy loading
# Check browser DevTools Performance tab
```

### Security Issues

#### CSRF Token Missing

**Solution:**
```bash
# Ensure CSRF middleware is enabled
# Check headers
# Verify session configuration
```

#### XSS Vulnerabilities

**Solution:**
```bash
# Sanitize user input
# Use helmet.js middleware
# Escape output in templates
```

## Getting More Help

1. **Check Logs:**
   ```bash
   # Backend logs
   npm run dev:backend
   
   # Docker logs
   docker-compose logs -f
   ```

2. **Check GitHub Issues:**
   - Search existing issues
   - Open new issue with details

3. **Contact Support:**
   - Email: support@muzic.com
   - Discord: [Join community](https://discord.gg/muzic)

4. **Debug Mode:**
   ```bash
   DEBUG=* npm run dev
   ```

---

**Still stuck? Open a GitHub issue with:**
- Error message
- Steps to reproduce
- Environment info (OS, Node version, etc.)
- Logs output
