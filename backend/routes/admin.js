import express from 'express';
import { authenticate, authorize } from '../middleware/auth.js';
import adminController from '../controllers/adminController.js';

const router = express.Router();

// All admin routes require authentication and admin role
router.use(authenticate);
router.use(authorize(['admin']));

router.get('/dashboard', adminController.getDashboard);
router.get('/users', adminController.getAllUsers);
router.get('/songs', adminController.getAllSongs);
router.post('/songs/bulk-upload', adminController.bulkUploadSongs);
router.post('/playlists/auto-generate', adminController.autoGeneratePlaylists);
router.get('/analytics', adminController.getAnalytics);
router.get('/analytics/songs', adminController.getSongAnalytics);
router.get('/analytics/users', adminController.getUserAnalytics);

export default router;
