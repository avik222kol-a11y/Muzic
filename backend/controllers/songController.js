import Song from '../models/Song.js';

const songController = {
  getAllSongs: async (req, res) => {
    try {
      const { page = 1, limit = 20, genre } = req.query;
      const query = genre ? { genre } : {};
      const songs = await Song.find(query)
        .populate('artist')
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort({ createdAt: -1 });
      const total = await Song.countDocuments(query);
      res.json({ songs, total, pages: Math.ceil(total / limit) });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getSongById: async (req, res) => {
    try {
      const song = await Song.findById(req.params.id).populate('artist album');
      if (!song) return res.status(404).json({ message: 'Song not found' });
      res.json(song);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  searchSongs: async (req, res) => {
    try {
      const { q } = req.query;
      if (!q) return res.status(400).json({ message: 'Search query required' });
      const songs = await Song.find({ $text: { $search: q } }).populate('artist');
      res.json(songs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createSong: async (req, res) => {
    try {
      const { title, artist, album, genre, mood, duration } = req.body;
      const song = new Song({
        title,
        artist,
        album,
        genre,
        mood,
        duration,
        audioUrl: req.files?.audio?.[0]?.path || '',
        coverImage: req.files?.cover?.[0]?.path || '',
        uploadedBy: req.user.id,
      });
      await song.save();
      res.status(201).json(song);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateSong: async (req, res) => {
    try {
      const song = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(song);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteSong: async (req, res) => {
    try {
      await Song.findByIdAndDelete(req.params.id);
      res.json({ message: 'Song deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  recordPlay: async (req, res) => {
    try {
      const song = await Song.findByIdAndUpdate(
        req.params.id,
        { $inc: { plays: 1 } },
        { new: true }
      );
      res.json(song);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  likeSong: async (req, res) => {
    try {
      await Song.findByIdAndUpdate(
        req.params.id,
        { $addToSet: { likes: req.user.id }, $inc: { likeCount: 1 } }
      );
      res.json({ message: 'Song liked' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  unlikeSong: async (req, res) => {
    try {
      await Song.findByIdAndUpdate(
        req.params.id,
        { $pull: { likes: req.user.id }, $inc: { likeCount: -1 } }
      );
      res.json({ message: 'Song unliked' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default songController;
