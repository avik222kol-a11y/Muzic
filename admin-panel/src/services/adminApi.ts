import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1';

const adminApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
adminApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const adminAuthService = {
  login: (data: any) => adminApi.post('/auth/login', data),
  logout: () => adminApi.post('/auth/logout'),
};

export const adminDashboardService = {
  getDashboard: () => adminApi.get('/admin/dashboard'),
  getAnalytics: (params?: any) => adminApi.get('/admin/analytics', { params }),
};

export const adminSongService = {
  getAllSongs: (params?: any) => adminApi.get('/admin/songs', { params }),
  createSong: (data: any) => adminApi.post('/songs', data),
  updateSong: (id: string, data: any) => adminApi.put(`/songs/${id}`, data),
  deleteSong: (id: string) => adminApi.delete(`/songs/${id}`),
  bulkUploadSongs: (data: FormData) =>
    adminApi.post('/admin/songs/bulk-upload', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
};

export const adminUserService = {
  getAllUsers: (params?: any) => adminApi.get('/admin/users', { params }),
  getUserById: (id: string) => adminApi.get(`/users/${id}`),
  updateUser: (id: string, data: any) => adminApi.put(`/users/${id}`, data),
  deleteUser: (id: string) => adminApi.delete(`/users/${id}`),
};

export const adminPlaylistService = {
  getAllPlaylists: (params?: any) => adminApi.get('/playlists', { params }),
  autoGeneratePlaylists: (data: any) =>
    adminApi.post('/admin/playlists/auto-generate', data),
  createPlaylist: (data: any) => adminApi.post('/playlists', data),
  updatePlaylist: (id: string, data: any) => adminApi.put(`/playlists/${id}`, data),
  deletePlaylist: (id: string) => adminApi.delete(`/playlists/${id}`),
};

export default adminApi;
