import Song from '../models/Song.js';
import Playlist from '../models/Playlist.js';
import User from '../models/User.js';

const adminController = {
  getDashboard: async (req, res) => {
    try {
      const totalUsers = await User.countDocuments();
      const totalSongs = await Song.countDocuments();
      const totalPlaylists = await Playlist.countDocuments();
      const totalPlays = (await Song.aggregate([{ $group: { _id: null, total: { $sum: '$plays' } } }])).pop()?.total || 0;

      res.json({
        totalUsers,
        totalSongs,
        totalPlaylists,
        totalPlays,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const { page = 1, limit = 20 } = req.query;
      const users = await User.find()
        .limit(limit * 1)
        .skip((page - 1) * limit);
      const total = await User.countDocuments();
      res.json({ users, total, pages: Math.ceil(total / limit) });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllSongs: async (req, res) => {
    try {
      const { page = 1, limit = 20 } = req.query;
      const songs = await Song.find()
        .populate('artist')
        .limit(limit * 1)
        .skip((page - 1) * limit);
      const total = await Song.countDocuments();
      res.json({ songs, total, pages: Math.ceil(total / limit) });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  bulkUploadSongs: async (req, res) => {
    try {
      // Placeholder for bulk upload logic
      res.json({ message: 'Bulk upload functionality' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  autoGeneratePlaylists: async (req, res) => {
    try {
      const { type = 'mood', count = 5 } = req.body;
      // Placeholder for auto-generation logic
      res.json({ message: `Generated ${count} ${type} playlists` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAnalytics: async (req, res) => {
    try {
      const { period = 'month' } = req.query;
      // Placeholder for analytics logic
      res.json({ period, data: [] });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getSongAnalytics: async (req, res) => {
    try {
      const topSongs = await Song.find().sort({ plays: -1 }).limit(10);
      res.json(topSongs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getUserAnalytics: async (req, res) => {
    try {
      const totalPremium = await User.countDocuments({ isPremium: true });
      const totalActive = await User.countDocuments({ isActive: true });
      res.json({ totalPremium, totalActive });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default adminController;
