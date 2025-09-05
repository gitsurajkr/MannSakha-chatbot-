"use client";

import { useState, useEffect, useRef } from "react";

export default function FocusTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [selectedMusic, setSelectedMusic] = useState("none");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const musicOptions = [
    { value: "none", label: "No Music", file: null },
    { value: "calm", label: "Calm Music", file: "/audio/calm-music.mp3" },
    { value: "coffee", label: "Coffee Shop", file: "/audio/coffee-shop.mp3" },
    { value: "lofi", label: "Lo-Fi Chill", file: "/audio/lofi-chill.mp3" },
    { value: "nature", label: "Nature Sounds", file: "/audio/nature-sounds.mp3" },
    { value: "piano", label: "Piano Ambient", file: "/audio/piano-ambient.mp3" },
    { value: "rain", label: "Rain Sounds", file: "/audio/rain-sounds.mp3" },
    { value: "white", label: "White Noise", file: "/audio/white-noise.mp3" }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Timer finished
      setIsActive(false);
      if (isBreak) {
        // Break finished, start work session
        setTimeLeft(25 * 60);
        setIsBreak(false);
      } else {
        // Work session finished, start break
        setTimeLeft(5 * 60);
        setIsBreak(true);
      }
      // Play notification sound or show notification
      playNotification();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, isBreak]);

  const playNotification = () => {
    // Simple browser notification
    if (Notification.permission === "granted") {
      new Notification(isBreak ? "Break time!" : "Work time!", {
        body: isBreak ? "Time for a 5-minute break" : "Ready for another focus session?",
        icon: "/icon.png"
      });
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const startTimer = () => {
    setIsActive(true);
    if (selectedMusic !== "none" && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseTimer = () => {
    setIsActive(false);
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(isBreak ? 5 * 60 : 25 * 60);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleMusicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMusic = e.target.value;
    setSelectedMusic(newMusic);
    
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }

    if (newMusic !== "none" && isActive) {
      // Load new audio and play if timer is active
      setTimeout(() => {
        if (audioRef.current && isActive) {
          audioRef.current.play();
          setIsPlaying(true);
        }
      }, 100);
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const progress = ((isBreak ? 5 * 60 : 25 * 60) - timeLeft) / (isBreak ? 5 * 60 : 25 * 60) * 100;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Background Music Section */}
      <div className="music-section">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '15px' }}>
          <i className="fas fa-music" style={{ color: 'var(--accent-secondary)' }}></i>
          <h3 style={{ margin: 0, color: 'var(--accent-secondary)' }}>Background Music</h3>
        </div>
        
        <div className="music-controls">
          <select
            value={selectedMusic}
            onChange={handleMusicChange}
            className="music-select"
          >
            {musicOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
          {selectedMusic !== "none" && (
            <button
              onClick={toggleMusic}
              className="btn btn-secondary"
              style={{ padding: '8px 16px' }}
            >
              <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
              {isPlaying ? ' Pause' : ' Play'}
            </button>
          )}
        </div>
      </div>

      {/* Timer Section */}
      <div className="timer-container">
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ textAlign: 'center', color: 'var(--accent-primary)', marginBottom: '1rem' }}>
            {isBreak ? 'Break Time' : 'Focus Time'}
          </h2>
          
          {/* Progress Bar */}
          <div style={{ 
            width: '100%', 
            height: '8px', 
            background: 'var(--black-tertiary)', 
            borderRadius: '4px',
            marginBottom: '2rem',
            overflow: 'hidden'
          }}>
            <div 
              style={{ 
                width: `${progress}%`, 
                height: '100%', 
                background: 'var(--gradient-secondary)',
                transition: 'width 1s ease'
              }}
            ></div>
          </div>
        </div>

        <div className="timer-display">
          {formatTime(timeLeft)}
        </div>

        <div className="timer-controls">
          {!isActive ? (
            <button onClick={startTimer} className="timer-btn">
              <i className="fas fa-play"></i> Start
            </button>
          ) : (
            <button onClick={pauseTimer} className="timer-btn">
              <i className="fas fa-pause"></i> Pause
            </button>
          )}
          
          <button onClick={resetTimer} className="timer-btn">
            <i className="fas fa-refresh"></i> Reset
          </button>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            {isBreak 
              ? "Take a break! Stretch, hydrate, or just relax." 
              : "Focus on your task. Minimize distractions and stay productive."
            }
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>
            <span><i className="fas fa-clock"></i> Work: 25 min</span>
            <span><i className="fas fa-coffee"></i> Break: 5 min</span>
          </div>
        </div>
      </div>

      {/* Audio Element */}
      {selectedMusic !== "none" && (
        <audio
          ref={audioRef}
          src={musicOptions.find(option => option.value === selectedMusic)?.file || ""}
          loop
          preload="metadata"
        />
      )}
    </div>
  );
}
