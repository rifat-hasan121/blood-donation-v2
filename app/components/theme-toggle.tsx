"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="theme-toggle-btn text-foreground"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? <Moon className="w-5 h-5 transition-all" /> : <Sun className="w-5 h-5 transition-all" />}
    </button>
  );
}
