import express from 'express';
import { authenticate, authorize } from '../middleware/auth.js';
import { validateRegister, validateLogin, validateRequest } from '../middleware/validators.js';
import authController from '../controllers/authController.js';

const router = express.Router();

router.post('/register', validateRegister, validateRequest, authController.register);
router.post('/login', validateLogin, validateRequest, authController.login);
router.post('/refresh', authController.refreshToken);
router.post('/logout', authenticate, authController.logout);
router.get('/me', authenticate, authController.getCurrentUser);

export default router;
