"use client";

import { useState, useEffect } from "react";

export default function StressRelief() {
  const [currentExercise, setCurrentExercise] = useState<string | null>(null);
  const [breathingTimer, setBreathingTimer] = useState(0);
  const [breathingPhase, setBreathingPhase] = useState<"inhale" | "hold" | "exhale">("inhale");
  const [isBreathingActive, setIsBreathingActive] = useState(false);

  const exercises = [
    {
      id: "breathing",
      title: "Box Breathing",
      icon: "fas fa-lungs",
      description: "4-4-4-4 breathing pattern to calm your nervous system",
      duration: "5 minutes"
    },
    {
      id: "grounding",
      title: "5-4-3-2-1 Grounding",
      icon: "fas fa-eye",
      description: "Use your senses to anchor yourself in the present moment",
      duration: "3 minutes"
    },
    {
      id: "muscle",
      title: "Quick Muscle Relaxation",
      icon: "fas fa-spa",
      description: "Release tension from your shoulders, neck, and jaw",
      duration: "2 minutes"
    },
    {
      id: "mindfulness",
      title: "Mindful Moment",
      icon: "fas fa-meditation",
      description: "Brief mindfulness exercise to reset your mental state",
      duration: "2 minutes"
    }
  ];

  const stressTips = [
    {
      icon: "fas fa-water",
      title: "Stay Hydrated",
      description: "Drink water regularly. Dehydration can increase stress hormones."
    },
    {
      icon: "fas fa-walking",
      title: "Take a Walk",
      description: "Even a 5-minute walk can reduce stress and improve mood."
    },
    {
      icon: "fas fa-phone",
      title: "Connect with Others",
      description: "Reach out to friends, family, or a mental health professional."
    },
    {
      icon: "fas fa-moon",
      title: "Prioritize Sleep",
      description: "Good sleep is essential for stress management and mental health."
    }
  ];

  // Box breathing timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isBreathingActive) {
      interval = setInterval(() => {
        setBreathingTimer(prev => {
          const newTime = prev + 1;
          
          // Box breathing cycle: inhale 4s, hold 4s, exhale 4s, hold 4s
          if (newTime <= 4) {
            setBreathingPhase("inhale");
          } else if (newTime <= 8) {
            setBreathingPhase("hold");
          } else if (newTime <= 12) {
            setBreathingPhase("exhale");
          } else if (newTime <= 16) {
            setBreathingPhase("hold");
          } else {
            return 0; // Reset cycle
          }
          
          return newTime > 16 ? 0 : newTime;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isBreathingActive]);

  const startBreathing = () => {
    setIsBreathingActive(true);
    setBreathingTimer(0);
    setCurrentExercise("breathing");
  };

  const stopBreathing = () => {
    setIsBreathingActive(false);
    setBreathingTimer(0);
    setCurrentExercise(null);
  };

  const renderBreathingExercise = () => (
    <div className="card" style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
      <h3 style={{ marginBottom: '2rem', color: 'var(--accent-primary)' }}>
        Box Breathing Exercise
      </h3>
      
      <div style={{ 
        width: '200px', 
        height: '200px', 
        margin: '0 auto 2rem', 
        borderRadius: '50%',
        background: 'var(--gradient-secondary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: breathingPhase === "inhale" ? 'scale(1.2)' : 'scale(1)',
        transition: 'transform 4s ease-in-out',
        opacity: breathingPhase === "exhale" ? '0.6' : '1'
      }}>
        <div style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
          {breathingPhase === "inhale" && "Breathe In"}
          {breathingPhase === "exhale" && "Breathe Out"}
          {breathingPhase === "hold" && "Hold"}
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-secondary)' }}>
          {4 - (breathingTimer % 4)}
        </div>
        <div style={{ color: 'var(--text-secondary)' }}>
          {breathingPhase === "inhale" && "Inhale slowly through your nose"}
          {breathingPhase === "exhale" && "Exhale slowly through your mouth"}
          {breathingPhase === "hold" && "Hold your breath gently"}
        </div>
      </div>

      <button onClick={stopBreathing} className="btn btn-secondary">
        Stop Exercise
      </button>
    </div>
  );

  const renderGroundingExercise = () => (
    <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--accent-primary)' }}>
        5-4-3-2-1 Grounding Technique
      </h3>
      
      <div style={{ display: 'grid', gap: '1rem' }}>
        <div className="card" style={{ background: 'var(--black-tertiary)' }}>
          <strong style={{ color: 'var(--accent-secondary)' }}>5 Things You Can See</strong>
          <p style={{ margin: '0.5rem 0 0', color: 'var(--text-secondary)' }}>
            Look around and name 5 things you can see right now
          </p>
        </div>
        
        <div className="card" style={{ background: 'var(--black-tertiary)' }}>
          <strong style={{ color: 'var(--accent-secondary)' }}>4 Things You Can Touch</strong>
          <p style={{ margin: '0.5rem 0 0', color: 'var(--text-secondary)' }}>
            Notice 4 different textures or objects you can feel
          </p>
        </div>
        
        <div className="card" style={{ background: 'var(--black-tertiary)' }}>
          <strong style={{ color: 'var(--accent-secondary)' }}>3 Things You Can Hear</strong>
          <p style={{ margin: '0.5rem 0 0', color: 'var(--text-secondary)' }}>
            Listen carefully and identify 3 sounds around you
          </p>
        </div>
        
        <div className="card" style={{ background: 'var(--black-tertiary)' }}>
          <strong style={{ color: 'var(--accent-secondary)' }}>2 Things You Can Smell</strong>
          <p style={{ margin: '0.5rem 0 0', color: 'var(--text-secondary)' }}>
            Take a deep breath and notice 2 scents
          </p>
        </div>
        
        <div className="card" style={{ background: 'var(--black-tertiary)' }}>
          <strong style={{ color: 'var(--accent-secondary)' }}>1 Thing You Can Taste</strong>
          <p style={{ margin: '0.5rem 0 0', color: 'var(--text-secondary)' }}>
            Notice any taste in your mouth, or take a sip of water
          </p>
        </div>
      </div>
      
      <button 
        onClick={() => setCurrentExercise(null)} 
        className="btn btn-secondary"
        style={{ width: '100%', marginTop: '1rem' }}
      >
        Complete Exercise
      </button>
    </div>
  );

  if (currentExercise === "breathing") {
    return renderBreathingExercise();
  }

  if (currentExercise === "grounding") {
    return renderGroundingExercise();
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      {/* Quick Exercises */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-primary)' }}>
          Quick Stress Relief Exercises
        </h3>
        <div className="grid grid-2">
          {exercises.map((exercise) => (
            <div key={exercise.id} className="card" style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '1rem' }}>
                <i className={exercise.icon} style={{ fontSize: '3rem', color: 'var(--accent-primary)' }}></i>
              </div>
              <h4 style={{ marginBottom: '1rem', color: 'var(--accent-secondary)' }}>
                {exercise.title}
              </h4>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                {exercise.description}
              </p>
              <div style={{ marginBottom: '1.5rem', color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
                <i className="fas fa-clock"></i> {exercise.duration}
              </div>
              <button
                onClick={() => {
                  if (exercise.id === "breathing") {
                    startBreathing();
                  } else if (exercise.id === "grounding") {
                    setCurrentExercise("grounding");
                  }
                }}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Start Exercise
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Coping Strategies */}
      <div className="card" style={{ marginBottom: '3rem', background: 'var(--maroon-tertiary)' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>
          <i className="fas fa-exclamation-triangle"></i> Feeling Overwhelmed?
        </h3>
        <div style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            If you're in crisis or having thoughts of self-harm, please reach out for help immediately:
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a 
              href="tel:988" 
              className="btn btn-primary"
              style={{ textDecoration: 'none' }}
            >
              <i className="fas fa-phone"></i> Crisis Hotline: 988
            </a>
            <a 
              href="sms:741741" 
              className="btn btn-secondary"
              style={{ textDecoration: 'none' }}
            >
              <i className="fas fa-sms"></i> Text HOME to 741741
            </a>
          </div>
        </div>
      </div>

      {/* Stress Management Tips */}
      <div>
        <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-primary)' }}>
          Daily Stress Management Tips
        </h3>
        <div className="grid grid-2">
          {stressTips.map((tip, index) => (
            <div key={index} className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <i className={tip.icon} style={{ fontSize: '2rem', color: 'var(--accent-secondary)' }}></i>
                <h4 style={{ margin: 0, color: 'var(--accent-primary)' }}>{tip.title}</h4>
              </div>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
