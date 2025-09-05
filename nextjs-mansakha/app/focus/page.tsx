import Header from "@/components/Header";
import FocusTimer from "@/components/FocusTimer";

export default function FocusPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="fade-in">
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Pomodoro Focus Timer
            </h1>
            <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
              Boost your productivity with focused work sessions and relaxing breaks
            </p>
            <FocusTimer />
          </div>
        </section>
      </main>
    </>
  );
}
