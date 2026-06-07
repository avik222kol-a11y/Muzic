import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import SongManagement from './pages/SongManagement';
import UserManagement from './pages/UserManagement';
import PlaylistManagement from './pages/PlaylistManagement';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import AdminLayout from './components/AdminLayout';
import './App.css';

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(
    !!localStorage.getItem('adminToken')
  );

  return (
    <Provider store={store}>
      <BrowserRouter>
        {!isAdminLoggedIn ? (
          <Routes>
            <Route
              path="/*"
              element={
                <AdminLogin setIsAdminLoggedIn={setIsAdminLoggedIn} />
              }
            />
          </Routes>
        ) : (
          <AdminLayout setIsAdminLoggedIn={setIsAdminLoggedIn}>
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/songs" element={<SongManagement />} />
              <Route path="/users" element={<UserManagement />} />
              <Route path="/playlists" element={<PlaylistManagement />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </AdminLayout>
        )}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
