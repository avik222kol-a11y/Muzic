import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const authController = {
  register: async (req, res) => {
    try {
      const { email, password, username } = req.body;
      let user = await User.findOne({ $or: [{ email }, { username }] });
      if (user) return res.status(400).json({ message: 'User already exists' });

      user = new User({ email, password, username });
      await user.save();

      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
      });

      res.status(201).json({ token, user: { id: user._id, email, username } });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email }).select('+password');
      if (!user) return res.status(401).json({ message: 'Invalid credentials' });

      const isMatch = await user.comparePassword(password);
      if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
      });
      const refreshToken = jwt.sign({ id: user._id }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRE,
      });

      user.lastLogin = new Date();
      await user.save();

      res.json({ token, refreshToken, user: { id: user._id, email, username: user.username } });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  refreshToken: async (req, res) => {
    try {
      const { refreshToken } = req.body;
      const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
      const user = await User.findById(decoded.id);
      if (!user) return res.status(401).json({ message: 'User not found' });

      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
      });

      res.json({ token });
    } catch (error) {
      res.status(401).json({ message: 'Invalid refresh token' });
    }
  },

  logout: (req, res) => {
    res.json({ message: 'Logged out successfully' });
  },

  getCurrentUser: async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default authController;
