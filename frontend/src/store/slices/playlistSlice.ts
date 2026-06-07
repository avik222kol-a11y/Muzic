import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlaylistState {
  playlists: any[];
  currentPlaylist: any;
}

const initialState: PlaylistState = {
  playlists: [],
  currentPlaylist: null,
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setPlaylists: (state, action: PayloadAction<any[]>) => {
      state.playlists = action.payload;
    },
    setCurrentPlaylist: (state, action: PayloadAction<any>) => {
      state.currentPlaylist = action.payload;
    },
    addPlaylist: (state, action: PayloadAction<any>) => {
      state.playlists.push(action.payload);
    },
  },
});

export const { setPlaylists, setCurrentPlaylist, addPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
