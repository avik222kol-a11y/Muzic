import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  register: (data: any) => api.post('/auth/register', data),
  login: (data: any) => api.post('/auth/login', data),
  getCurrentUser: () => api.get('/auth/me'),
};

export const songService = {
  getAllSongs: (params: any) => api.get('/songs', { params }),
  getSongById: (id: string) => api.get(`/songs/${id}`),
  searchSongs: (query: string) => api.get('/songs/search', { params: { q: query } }),
  likeSong: (id: string) => api.post(`/songs/${id}/like`),
  unlikeSong: (id: string) => api.delete(`/songs/${id}/like`),
  recordPlay: (id: string) => api.post(`/songs/${id}/play`),
};

export const playlistService = {
  getUserPlaylists: () => api.get('/playlists'),
  getPlaylistById: (id: string) => api.get(`/playlists/${id}`),
  createPlaylist: (data: any) => api.post('/playlists', data),
  updatePlaylist: (id: string, data: any) => api.put(`/playlists/${id}`, data),
  deletePlaylist: (id: string) => api.delete(`/playlists/${id}`),
  addSongToPlaylist: (id: string, songId: string) =>
    api.post(`/playlists/${id}/songs`, { songId }),
  removeSongFromPlaylist: (id: string, songId: string) =>
    api.delete(`/playlists/${id}/songs/${songId}`),
};

export const userService = {
  getUserProfile: (id: string) => api.get(`/users/${id}`),
  updateProfile: (id: string, data: any) => api.put(`/users/${id}`, data),
  followUser: (id: string) => api.post(`/users/${id}/follow`),
  unfollowUser: (id: string) => api.delete(`/users/${id}/follow`),
};

export default api;
