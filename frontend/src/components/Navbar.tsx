import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { FiSearch, FiBell, FiUser, FiLogOut } from 'react-icons/fi';

interface NavbarProps {
  setIsLoggedIn: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setIsLoggedIn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout as any);
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="relative w-80">
          <FiSearch className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search songs, artists, playlists..."
            className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="relative text-gray-300 hover:text-white transition">
          <FiBell size={24} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </button>
        <Link
          to="/profile/me"
          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full transition"
        >
          <FiUser size={20} />
          <span>Profile</span>
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full transition"
        >
          <FiLogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
