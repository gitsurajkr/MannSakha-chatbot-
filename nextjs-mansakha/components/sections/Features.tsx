export default function Features() {
  const features = [
    {
      icon: "fas fa-robot",
      title: "Advanced AI Technology",
      description: "Powered by cutting-edge natural language processing for human-like conversations."
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile Responsive",
      description: "Access support from any device - desktop, tablet, or mobile phone."
    },
    {
      icon: "fas fa-language",
      title: "Multi-language Support",
      description: "Communicate in your preferred language for better understanding."
    },
    {
      icon: "fas fa-bell",
      title: "Smart Reminders",
      description: "Gentle reminders for self-care activities and check-ins."
    },
    {
      icon: "fas fa-download",
      title: "Offline Resources",
      description: "Download coping strategies and exercises for offline use."
    },
    {
      icon: "fas fa-headphones",
      title: "Audio Support",
      description: "Listen to guided meditations and calming soundscapes."
    }
  ];

  return (
    <section id="features" className="section" style={{ background: 'var(--black-secondary)' }}>
      <div className="fade-in">
        <h2>Why Choose MannSakha AI?</h2>
        <div className="grid grid-3">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <i className={feature.icon} style={{ fontSize: '2.5rem', color: 'var(--accent-secondary)' }}></i>
              </div>
              <h3 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '1.2rem' }}>
                {feature.title}
              </h3>
              <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
