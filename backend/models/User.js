import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
    firstName: String,
    lastName: String,
    profileImage: String,
    bio: String,
    followers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }],
    following: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }],
    likedSongs: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Song',
    }],
    playlists: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Playlist',
    }],
    isPremium: {
      type: Boolean,
      default: false,
    },
    subscriptionType: {
      type: String,
      enum: ['free', 'pro', 'premium'],
      default: 'free',
    },
    subscriptionEnd: Date,
    role: {
      type: String,
      enum: ['user', 'artist', 'admin'],
      default: 'user',
    },
    lastLogin: Date,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model('User', userSchema);
