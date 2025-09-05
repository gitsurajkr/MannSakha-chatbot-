import Header from "@/components/Header";
import StressRelief from "@/components/StressRelief";

export default function StressReliefPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="fade-in">
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Stress Relief Center
            </h1>
            <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
              Find immediate relief from stress with guided exercises and mindfulness techniques
            </p>
            <StressRelief />
          </div>
        </section>
      </main>
    </>
  );
}
