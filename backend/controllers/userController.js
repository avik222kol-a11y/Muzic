import User from '../models/User.js';

const userController = {
  getUserProfile: async (req, res) => {
    try {
      const user = await User.findById(req.params.id).populate('followers following');
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateProfile: async (req, res) => {
    try {
      const { firstName, lastName, bio, profileImage } = req.body;
      let user = await User.findByIdAndUpdate(
        req.params.id,
        { firstName, lastName, bio, profileImage },
        { new: true }
      );
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json({ message: 'User deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  followUser: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.user.id, { $addToSet: { following: req.params.id } });
      await User.findByIdAndUpdate(req.params.id, { $addToSet: { followers: req.user.id } });
      res.json({ message: 'Followed' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  unfollowUser: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.user.id, { $pull: { following: req.params.id } });
      await User.findByIdAndUpdate(req.params.id, { $pull: { followers: req.user.id } });
      res.json({ message: 'Unfollowed' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getFollowers: async (req, res) => {
    try {
      const user = await User.findById(req.params.id).populate('followers');
      res.json(user.followers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getFollowing: async (req, res) => {
    try {
      const user = await User.findById(req.params.id).populate('following');
      res.json(user.following);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default userController;
