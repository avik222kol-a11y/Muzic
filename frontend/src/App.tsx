import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Home from './pages/Home';
import Search from './pages/Search';
import Playlist from './pages/Playlist';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  return (
    <Provider store={store}>
      <BrowserRouter>
        {!isLoggedIn ? (
          <Routes>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
          </Routes>
        ) : (
          <div className="flex h-screen bg-black text-white">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Navbar setIsLoggedIn={setIsLoggedIn} />
              <div className="flex-1 overflow-y-auto p-6">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/playlist/:id" element={<Playlist />} />
                  <Route path="/profile/:id" element={<Profile />} />
                </Routes>
              </div>
              <Player />
            </div>
          </div>
        )}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
