"use client";

import { useState, useRef } from "react";

export default function SleepGuide() {
  const [selectedAudio, setSelectedAudio] = useState("none");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const audioOptions = [
    { value: "none", label: "No Audio", file: null },
    { value: "rain", label: "Rain Sounds", file: "/audio/rain-sounds.mp3" },
    { value: "nature", label: "Nature Sounds", file: "/audio/nature-sounds.mp3" },
    { value: "white", label: "White Noise", file: "/audio/white-noise.mp3" },
    { value: "piano", label: "Piano Ambient", file: "/audio/piano-ambient.mp3" }
  ];

  const sleepTips = [
    {
      icon: "fas fa-bed",
      title: "Create a Sleep Routine",
      description: "Go to bed and wake up at the same time every day, even on weekends."
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Limit Screen Time",
      description: "Avoid screens for at least 1 hour before bedtime to improve sleep quality."
    },
    {
      icon: "fas fa-thermometer-half",
      title: "Cool Environment",
      description: "Keep your bedroom between 60-67°F (15-19°C) for optimal sleep."
    },
    {
      icon: "fas fa-coffee",
      title: "Watch Caffeine Intake",
      description: "Avoid caffeine 6-8 hours before bedtime as it can interfere with sleep."
    }
  ];

  const breathingExercise = {
    title: "4-7-8 Breathing Technique",
    steps: [
      "Exhale completely through your mouth",
      "Close your mouth and inhale through nose for 4 counts",
      "Hold your breath for 7 counts",
      "Exhale through mouth for 8 counts",
      "Repeat 3-4 times"
    ]
  };

  const handleAudioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newAudio = e.target.value;
    setSelectedAudio(newAudio);
    
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleAudio = () => {
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

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      {/* Calming Audio Section */}
      <div className="music-section">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '15px' }}>
          <i className="fas fa-volume-up" style={{ color: 'var(--accent-secondary)' }}></i>
          <h3 style={{ margin: 0, color: 'var(--accent-secondary)' }}>Calming Sleep Sounds</h3>
        </div>
        
        <div className="music-controls">
          <select
            value={selectedAudio}
            onChange={handleAudioChange}
            className="music-select"
          >
            {audioOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
          {selectedAudio !== "none" && (
            <button
              onClick={toggleAudio}
              className="btn btn-secondary"
              style={{ padding: '8px 16px' }}
            >
              <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
              {isPlaying ? ' Pause' : ' Play'}
            </button>
          )}
        </div>
      </div>

      {/* Breathing Exercise */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
          <i className="fas fa-lungs"></i> {breathingExercise.title}
        </h3>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {breathingExercise.steps.map((step, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ 
                background: 'var(--accent-primary)', 
                color: 'white', 
                borderRadius: '50%', 
                width: '30px', 
                height: '30px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontWeight: 'bold',
                flexShrink: 0
              }}>
                {index + 1}
              </div>
              <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sleep Tips Grid */}
      <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-primary)' }}>
        Sleep Improvement Tips
      </h3>
      <div className="grid grid-2" style={{ marginBottom: '2rem' }}>
        {sleepTips.map((tip, index) => (
          <div key={index} className="card">
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <i className={tip.icon} style={{ fontSize: '2.5rem', color: 'var(--accent-secondary)' }}></i>
            </div>
            <h4 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
              {tip.title}
            </h4>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
              {tip.description}
            </p>
          </div>
        ))}
      </div>

      {/* Progressive Muscle Relaxation */}
      <div className="card">
        <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
          <i className="fas fa-spa"></i> Progressive Muscle Relaxation
        </h3>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          This technique helps release physical tension that can interfere with sleep:
        </p>
        <ol style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
          <li>Start by lying comfortably in bed</li>
          <li>Tense your toes for 5 seconds, then relax</li>
          <li>Move up to your calves, thighs, abdomen, chest</li>
          <li>Continue with arms, hands, shoulders, neck, and face</li>
          <li>Hold each tension for 5 seconds, then release</li>
          <li>Notice the contrast between tension and relaxation</li>
          <li>End by taking deep, slow breaths</li>
        </ol>
      </div>

      {/* Audio Element */}
      {selectedAudio !== "none" && (
        <audio
          ref={audioRef}
          src={audioOptions.find(option => option.value === selectedAudio)?.file || ""}
          loop
          preload="metadata"
        />
      )}
    </div>
  );
}
