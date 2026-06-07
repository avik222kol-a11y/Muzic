import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlayerState {
  currentSong: any;
  isPlaying: boolean;
  queue: any[];
  currentIndex: number;
  volume: number;
  duration: number;
  currentTime: number;
}

const initialState: PlayerState = {
  currentSong: null,
  isPlaying: false,
  queue: [],
  currentIndex: 0,
  volume: 70,
  duration: 0,
  currentTime: 0,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrentSong: (state, action: PayloadAction<any>) => {
      state.currentSong = action.payload;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setQueue: (state, action: PayloadAction<any[]>) => {
      state.queue = action.payload;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    nextTrack: (state) => {
      if (state.currentIndex < state.queue.length - 1) {
        state.currentIndex++;
        state.currentSong = state.queue[state.currentIndex];
      }
    },
    prevTrack: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex--;
        state.currentSong = state.queue[state.currentIndex];
      }
    },
  },
});

export const {
  setCurrentSong,
  setIsPlaying,
  setQueue,
  setVolume,
  setCurrentTime,
  setDuration,
  nextTrack,
  prevTrack,
} = playerSlice.actions;

export default playerSlice.reducer;
