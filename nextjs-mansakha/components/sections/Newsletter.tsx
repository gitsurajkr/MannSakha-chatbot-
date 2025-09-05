"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Thank you for subscribing to our newsletter!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="newsletter" className="section">
      <div className="fade-in">
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Stay Updated</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            Subscribe to our newsletter for mental health tips, updates, and exclusive content.
          </p>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              style={{
                flex: 1,
                padding: '12px 16px',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                background: 'var(--black-tertiary)',
                color: 'var(--text-primary)',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn btn-primary"
              style={{ whiteSpace: 'nowrap' }}
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          
          {message && (
            <div className={status === "success" ? "success-message" : "error-message"}>
              {message}
            </div>
          )}
          
          <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
