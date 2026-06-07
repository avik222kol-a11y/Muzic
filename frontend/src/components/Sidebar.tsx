import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiSearch, FiMusic, FiPlus } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Sidebar: React.FC = () => {
  const playlists = useSelector((state: RootState) => state.playlist.playlists);

  return (
    <aside className="w-64 bg-black border-r border-gray-800 p-6 flex flex-col h-screen overflow-y-auto scrollbar">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-green-500 flex items-center gap-2">
          🎵 Muzic
        </h1>
      </div>

      {/* Main Navigation */}
      <nav className="space-y-4 mb-8">
        <Link
          to="/"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-900 transition text-gray-300 hover:text-white"
        >
          <FiHome size={24} />
          <span>Home</span>
        </Link>
        <Link
          to="/search"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-900 transition text-gray-300 hover:text-white"
        >
          <FiSearch size={24} />
          <span>Search</span>
        </Link>
      </nav>

      {/* Your Library */}
      <div className="border-t border-gray-800 pt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-300">
            <FiMusic size={20} />
            Your Library
          </h2>
          <button className="text-gray-500 hover:text-white transition">
            <FiPlus size={20} />
          </button>
        </div>

        {/* Playlists */}
        <div className="space-y-2">
          {playlists.map((playlist) => (
            <Link
              key={playlist._id}
              to={`/playlist/${playlist._id}`}
              className="block px-3 py-2 rounded text-sm text-gray-400 hover:text-white hover:bg-gray-900 transition truncate"
            >
              {playlist.name}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
