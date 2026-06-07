import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import {
  setIsPlaying,
  setCurrentTime,
  setDuration,
  nextTrack,
  prevTrack,
} from '../store/slices/playerSlice';
import { FiPlay, FiPause, FiSkipBack, FiSkipForward, FiVolume2 } from 'react-icons/fi';

const Player: React.FC = () => {
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>(null);
  const { currentSong, isPlaying, volume, currentTime, duration } = useSelector(
    (state: RootState) => state.player
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      dispatch(setCurrentTime(audioRef.current.currentTime));
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      dispatch(setDuration(audioRef.current.duration));
    }
  };

  const formatTime = (time: number) => {
    if (!time) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gray-900 border-t border-gray-800 p-4">
      {currentSong ? (
        <>
          <audio
            ref={audioRef}
            src={currentSong.audioUrl}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          />
          <div className="flex items-center justify-between mb-3">
            <div className="flex-1">
              <h3 className="font-semibold text-white">{currentSong.title}</h3>
              <p className="text-sm text-gray-400">{currentSong.artist?.name}</p>
            </div>
            <div className="flex-1 mx-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch(prevTrack())}
                  className="text-gray-400 hover:text-white transition"
                >
                  <FiSkipBack size={20} />
                </button>
                <button
                  onClick={() => dispatch(setIsPlaying(!isPlaying))}
                  className="bg-green-500 hover:bg-green-600 p-2 rounded-full transition"
                >
                  {isPlaying ? <FiPause size={24} /> : <FiPlay size={24} />}
                </button>
                <button
                  onClick={() => dispatch(nextTrack())}
                  className="text-gray-400 hover:text-white transition"
                >
                  <FiSkipForward size={20} />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-1 justify-end">
              <FiVolume2 size={20} />
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => {
                  if (audioRef.current) {
                    audioRef.current.volume = Number(e.target.value) / 100;
                  }
                }}
                className="w-24"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 w-10">{formatTime(currentTime)}</span>
            <div className="flex-1 bg-gray-700 rounded-full h-1">
              <div
                className="bg-green-500 h-1 rounded-full"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>
            <span className="text-xs text-gray-400 w-10 text-right">{formatTime(duration)}</span>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-500">Select a song to play</div>
      )}
    </div>
  );
};

export default Player;
