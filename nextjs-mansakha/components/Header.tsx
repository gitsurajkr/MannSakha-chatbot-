"use client";

import Link from "next/link";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useState } from "react";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getThemeIcon = () => {
    if (theme === "dark") return "fas fa-sun";
    if (theme === "light") return "fas fa-moon";
    return "fas fa-adjust";
  };

  const getThemeText = () => {
    if (theme === "dark") return "Light";
    if (theme === "light") return "Dark";
    return "Auto";
  };

  return (
    <header>
      <div className="header-content">
        <Link href="/" className="logo">
          MannSakha AI
        </Link>
        
        <nav className={`${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
          <ul>
            <li><Link href="/#home">HOME</Link></li>
            <li><Link href="/#about">ABOUT</Link></li>
            <li><Link href="/#services">SERVICES</Link></li>
            <li><Link href="/#careers">CAREERS</Link></li>
            <li><Link href="/#blog">BLOG</Link></li>
            <li><Link href="/chat" className="btn btn-primary">TRY MANNSAKHA</Link></li>
            <li><Link href="/signup" className="btn btn-secondary">Signup</Link></li>
          </ul>
        </nav>

        <div className="header-controls">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            title="Toggle Dark/Light Mode"
          >
            <i className={getThemeIcon()}></i>
            <span>{getThemeText()}</span>
          </button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
