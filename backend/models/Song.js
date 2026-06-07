import mongoose from 'mongoose';

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artist',
      required: true,
    },
    album: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Album',
    },
    genre: String,
    mood: String,
    duration: Number, // in seconds
    audioUrl: {
      type: String,
      required: true,
    },
    coverImage: String,
    releaseDate: Date,
    lyrics: String,
    isExplicit: {
      type: Boolean,
      default: false,
    },
    plays: {
      type: Number,
      default: 0,
    },
    likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }],
    likeCount: {
      type: Number,
      default: 0,
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

// Index for search
songSchema.index({ title: 'text', genre: 'text' });

export default mongoose.model('Song', songSchema);
