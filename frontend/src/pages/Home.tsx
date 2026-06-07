import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { songService } from '../services/api';
import { setCurrentSong, setQueue, setIsPlaying } from '../store/slices/playerSlice';
import { RootState } from '../store';
import { FiPlay, FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [songs, setSongs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { currentSong } = useSelector((state: RootState) => state.player);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      const response = await songService.getAllSongs({ page: 1, limit: 20 });
      setSongs(response.data.songs);
      dispatch(setQueue(response.data.songs));
    } catch (error) {
      console.error('Error fetching songs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePlaySong = (song: any) => {
    dispatch(setCurrentSong(song));
    dispatch(setIsPlaying(true));
    songService.recordPlay(song._id);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Welcome to Muzic</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Popular Songs</h2>
        {loading ? (
          <div className="text-gray-400">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {songs.map((song) => (
              <div
                key={song._id}
                className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition group cursor-pointer"
                onClick={() => handlePlaySong(song)}
              >
                {song.coverImage && (
                  <img
                    src={song.coverImage}
                    alt={song.title}
                    className="w-full h-40 object-cover rounded-lg mb-4 group-hover:opacity-75 transition"
                  />
                )}
                <h3 className="font-semibold text-white truncate">{song.title}</h3>
                <p className="text-sm text-gray-400 truncate">{song.artist?.name}</p>
                <div className="flex items-center justify-between mt-4 opacity-0 group-hover:opacity-100 transition">
                  <button
                    className="bg-green-500 hover:bg-green-600 p-2 rounded-full"
                    onClick={() => handlePlaySong(song)}
                  >
                    <FiPlay size={20} />
                  </button>
                  <button className="text-gray-400 hover:text-red-500 transition">
                    <FiHeart size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
