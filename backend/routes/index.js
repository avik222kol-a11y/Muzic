import authRoutes from './auth.js';
import userRoutes from './users.js';
import songRoutes from './songs.js';
import playlistRoutes from './playlists.js';
import adminRoutes from './admin.js';
import express from 'express';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/songs', songRoutes);
router.use('/playlists', playlistRoutes);
router.use('/admin', adminRoutes);

export default router;
