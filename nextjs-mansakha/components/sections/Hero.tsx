import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content fade-in">
        <h1 className="gradient-text">
          Your AI Mental Health Companion
        </h1>
        <p>
          Experience personalized mental health support with MannSakha AI. 
          Get instant, compassionate assistance for stress, anxiety, and emotional well-being 
          available 24/7.
        </p>
        <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/chat" className="btn btn-primary">
            Start Chatting Now
          </Link>
          <Link href="#about" className="btn btn-secondary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
