import Header from "@/components/Header";
import SleepGuide from "@/components/SleepGuide";

export default function SleepPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="fade-in">
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Sleep Support
            </h1>
            <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
              Improve your sleep quality with guided relaxation techniques and calming sounds
            </p>
            <SleepGuide />
          </div>
        </section>
      </main>
    </>
  );
}
