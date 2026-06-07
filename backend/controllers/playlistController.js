import Playlist from '../models/Playlist.js';

const playlistController = {
  getUserPlaylists: async (req, res) => {
    try {
      const playlists = await Playlist.find({ owner: req.user.id }).populate('songs');
      res.json(playlists);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createPlaylist: async (req, res) => {
    try {
      const { name, description, isPublic } = req.body;
      const playlist = new Playlist({
        name,
        description,
        isPublic,
        owner: req.user.id,
      });
      await playlist.save();
      res.status(201).json(playlist);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getPlaylistById: async (req, res) => {
    try {
      const playlist = await Playlist.findById(req.params.id).populate('songs owner');
      if (!playlist) return res.status(404).json({ message: 'Playlist not found' });
      res.json(playlist);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updatePlaylist: async (req, res) => {
    try {
      const playlist = await Playlist.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(playlist);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deletePlaylist: async (req, res) => {
    try {
      await Playlist.findByIdAndDelete(req.params.id);
      res.json({ message: 'Playlist deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  addSongToPlaylist: async (req, res) => {
    try {
      const { songId } = req.body;
      await Playlist.findByIdAndUpdate(
        req.params.id,
        { $addToSet: { songs: songId } },
        { new: true }
      );
      res.json({ message: 'Song added to playlist' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  removeSongFromPlaylist: async (req, res) => {
    try {
      await Playlist.findByIdAndUpdate(
        req.params.id,
        { $pull: { songs: req.params.songId } },
        { new: true }
      );
      res.json({ message: 'Song removed from playlist' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  likePlaylist: async (req, res) => {
    try {
      await Playlist.findByIdAndUpdate(
        req.params.id,
        { $addToSet: { likes: req.user.id } }
      );
      res.json({ message: 'Playlist liked' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  unlikePlaylist: async (req, res) => {
    try {
      await Playlist.findByIdAndUpdate(
        req.params.id,
        { $pull: { likes: req.user.id } }
      );
      res.json({ message: 'Playlist unliked' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default playlistController;
