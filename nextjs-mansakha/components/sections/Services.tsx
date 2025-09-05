import Link from "next/link";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="fade-in">
        <h2>Our Services</h2>
        <div className="grid grid-3">
          <div className="card">
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <i className="fas fa-comments" style={{ fontSize: '3rem', color: 'var(--accent-primary)' }}></i>
            </div>
            <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>AI Chat Support</h3>
            <p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              Instant emotional support through intelligent conversations with our AI companion.
            </p>
            <Link href="/chat" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
              Start Chat
            </Link>
          </div>
          
          <div className="card">
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <i className="fas fa-meditation" style={{ fontSize: '3rem', color: 'var(--accent-primary)' }}></i>
            </div>
            <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Focus Timer</h3>
            <p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              Pomodoro technique with ambient sounds to improve focus and reduce stress.
            </p>
            <Link href="/focus" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
              Focus Now
            </Link>
          </div>
          
          <div className="card">
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <i className="fas fa-bed" style={{ fontSize: '3rem', color: 'var(--accent-primary)' }}></i>
            </div>
            <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Sleep Support</h3>
            <p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              Guided relaxation and sleep techniques to improve your rest quality.
            </p>
            <Link href="/sleep" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
              Sleep Better
            </Link>
          </div>
          
          <div className="card">
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <i className="fas fa-spa" style={{ fontSize: '3rem', color: 'var(--accent-primary)' }}></i>
            </div>
            <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Stress Relief</h3>
            <p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              Breathing exercises and mindfulness techniques for immediate stress relief.
            </p>
            <Link href="/stress-relief" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
              Relax Now
            </Link>
          </div>
          
          <div className="card">
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <i className="fas fa-chart-line" style={{ fontSize: '3rem', color: 'var(--accent-primary)' }}></i>
            </div>
            <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Progress Tracking</h3>
            <p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              Monitor your mental health journey with personalized insights and analytics.
            </p>
            <Link href="/dashboard" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
              View Progress
            </Link>
          </div>
          
          <div className="card">
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <i className="fas fa-users" style={{ fontSize: '3rem', color: 'var(--accent-primary)' }}></i>
            </div>
            <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Community Support</h3>
            <p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              Connect with others on similar journeys in a supportive environment.
            </p>
            <Link href="/community" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
