import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './slices/playerSlice';
import authReducer from './slices/authSlice';
import playlistReducer from './slices/playlistSlice';

const store = configureStore({
  reducer: {
    player: playerReducer,
    auth: authReducer,
    playlist: playlistReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
