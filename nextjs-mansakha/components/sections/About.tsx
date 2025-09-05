export default function About() {
  return (
    <section id="about" className="section">
      <div className="fade-in">
        <h2>About MannSakha AI</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3 style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}>
              <i className="fas fa-brain"></i> AI-Powered Support
            </h3>
            <p>
              Our advanced AI understands your emotions and provides personalized 
              mental health support tailored to your unique needs.
            </p>
          </div>
          <div className="card">
            <h3 style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}>
              <i className="fas fa-clock"></i> 24/7 Availability
            </h3>
            <p>
              Access mental health support anytime, anywhere. Our AI companion 
              is always ready to listen and help you through difficult moments.
            </p>
          </div>
          <div className="card">
            <h3 style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}>
              <i className="fas fa-shield-alt"></i> Privacy & Security
            </h3>
            <p>
              Your conversations are completely private and secure. We prioritize 
              your confidentiality and data protection above all else.
            </p>
          </div>
          <div className="card">
            <h3 style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}>
              <i className="fas fa-heart"></i> Compassionate Care
            </h3>
            <p>
              Experience empathetic, non-judgmental support designed to help you 
              feel understood and validated in your mental health journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
