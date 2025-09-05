import Header from "@/components/Header";
import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="fade-in">
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Join MannSakha AI
            </h1>
            <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
              Create your account and start your mental health journey today
            </p>
            <SignupForm />
          </div>
        </section>
      </main>
    </>
  );
}
