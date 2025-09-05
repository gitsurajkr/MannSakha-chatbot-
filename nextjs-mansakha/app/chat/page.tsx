import Header from "@/components/Header";
import ChatInterface from "@/components/ChatInterface";

export default function ChatPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="fade-in">
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Chat with MannSakha AI
            </h1>
            <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
              Share your thoughts and feelings. I'm here to listen and support you.
            </p>
            <ChatInterface />
          </div>
        </section>
      </main>
    </>
  );
}
