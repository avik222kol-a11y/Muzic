import express from 'express';
import { authenticate, authorize } from '../middleware/auth.js';
import songController from '../controllers/songController.js';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.get('/', songController.getAllSongs);
router.get('/search', songController.searchSongs);
router.get('/:id', songController.getSongById);
router.post('/', authenticate, authorize(['admin']), upload.fields([{ name: 'audio' }, { name: 'cover' }]), songController.createSong);
router.put('/:id', authenticate, authorize(['admin']), songController.updateSong);
router.delete('/:id', authenticate, authorize(['admin']), songController.deleteSong);
router.post('/:id/play', songController.recordPlay);
router.post('/:id/like', authenticate, songController.likeSong);
router.delete('/:id/like', authenticate, songController.unlikeSong);

export default router;
