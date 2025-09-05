"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "auto";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("auto");

  // Function to get system theme preference
  const getSystemTheme = (): "light" | "dark" => {
    if (typeof window !== "undefined") {
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches 
        ? "dark" 
        : "light";
    }
    return "dark";
  };

  // Function to apply theme
  const applyTheme = (newTheme: Theme) => {
    let actualTheme = newTheme;
    
    // Handle auto theme
    if (newTheme === "auto") {
      actualTheme = getSystemTheme();
    }
    
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", actualTheme);
      localStorage.setItem("theme", newTheme);
    }
  };

  // Function to toggle theme
  const toggleTheme = () => {
    let newTheme: Theme;
    if (theme === "light") {
      newTheme = "dark";
    } else if (theme === "dark") {
      newTheme = "auto";
    } else {
      newTheme = "light";
    }
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  // Initialize theme on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as Theme || "auto";
      setTheme(savedTheme);
      applyTheme(savedTheme);

      // Listen for system theme changes
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => {
        if (theme === "auto") {
          applyTheme("auto");
        }
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme: (newTheme: Theme) => {
      setTheme(newTheme);
      applyTheme(newTheme);
    } }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
