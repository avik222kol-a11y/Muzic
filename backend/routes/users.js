import express from 'express';
import { authenticate } from '../middleware/auth.js';
import userController from '../controllers/userController.js';

const router = express.Router();

router.get('/:id', userController.getUserProfile);
router.put('/:id', authenticate, userController.updateProfile);
router.delete('/:id', authenticate, userController.deleteUser);
router.post('/:id/follow', authenticate, userController.followUser);
router.delete('/:id/follow', authenticate, userController.unfollowUser);
router.get('/:id/followers', userController.getFollowers);
router.get('/:id/following', userController.getFollowing);

export default router;
