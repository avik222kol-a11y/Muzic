import mongoose from 'mongoose';

const albumSchema = new mongoose.Schema(
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
    coverImage: String,
    releaseDate: Date,
    songs: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Song',
    }],
    genre: String,
    description: String,
  },
  { timestamps: true }
);

export default mongoose.model('Album', albumSchema);
