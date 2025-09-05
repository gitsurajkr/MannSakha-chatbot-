import Header from "@/components/Header";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="fade-in">
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Welcome Back
            </h1>
            <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
              Sign in to continue your mental health journey with MannSakha AI
            </p>
            <LoginForm />
          </div>
        </section>
      </main>
    </>
  );
}
