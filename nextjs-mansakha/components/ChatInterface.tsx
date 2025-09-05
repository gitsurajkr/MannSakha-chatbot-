"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm MannSakha AI, your mental health companion. How are you feeling today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string, sender: "user" | "bot") => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const getBotResponse = async (userMessage: string): Promise<string> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple response logic (replace with actual API call)
    const responses = [
      "I understand how you're feeling. Can you tell me more about what's bothering you?",
      "That sounds challenging. You're brave for sharing that with me.",
      "It's completely normal to feel this way. What usually helps you feel better?",
      "Thank you for trusting me with your feelings. How can I support you right now?",
      "Your feelings are valid. Would you like to try a breathing exercise together?",
      "I'm here to listen. Take your time and share whatever feels comfortable.",
      "That must be difficult for you. What's one small thing that might help today?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    addMessage(userMessage, "user");
    setIsLoading(true);

    try {
      const botResponse = await getBotResponse(userMessage);
      addMessage(botResponse, "bot");
    } catch (error) {
      addMessage("I'm sorry, I'm having trouble responding right now. Please try again in a moment.", "bot");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-message ${message.sender}`}
          >
            {message.text}
          </div>
        ))}
        {isLoading && (
          <div className="chat-message bot">
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              <span>Thinking</span>
              <div className="typing-indicator">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="chat-input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Share your thoughts..."
          className="chat-input"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="btn btn-primary"
        >
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
      
      <style jsx>{`
        .typing-indicator {
          display: inline-flex;
          gap: 2px;
        }
        .typing-indicator span {
          animation: typing 1.4s infinite;
        }
        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }
        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes typing {
          0%, 60%, 100% {
            opacity: 0.3;
          }
          30% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
