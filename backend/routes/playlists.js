import express from 'express';
import { authenticate } from '../middleware/auth.js';
import playlistController from '../controllers/playlistController.js';

const router = express.Router();

router.get('/', authenticate, playlistController.getUserPlaylists);
router.post('/', authenticate, playlistController.createPlaylist);
router.get('/:id', playlistController.getPlaylistById);
router.put('/:id', authenticate, playlistController.updatePlaylist);
router.delete('/:id', authenticate, playlistController.deletePlaylist);
router.post('/:id/songs', authenticate, playlistController.addSongToPlaylist);
router.delete('/:id/songs/:songId', authenticate, playlistController.removeSongFromPlaylist);
router.post('/:id/like', authenticate, playlistController.likePlaylist);
router.delete('/:id/like', authenticate, playlistController.unlikePlaylist);

export default router;
