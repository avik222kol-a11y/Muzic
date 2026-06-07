import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    bio: String,
    profileImage: String,
    followers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }],
    genres: [String],
    monthlyListeners: {
      type: Number,
      default: 0,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Artist', artistSchema);
