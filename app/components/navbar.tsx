"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Droplet, Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import "../shared.css";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Donor", href: "/donor" },
  { name: "Campaign", href: "/campaign" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="glass-nav sticky top-0 z-50 w-full transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo on Left */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="logo-container">
              <Droplet className="w-6 h-6 fill-current" />
              <span>BloodLink</span>
            </Link>
          </div>

          {/* Navigation Links in Center/Right */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`nav-link ${
                  pathname === link.href ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side: Theme Toggle & Profile Image */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="hidden md:block relative w-9 h-9 rounded-full overflow-hidden border-2 border-primary/20 hover:border-primary transition-colors cursor-pointer">
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Felix`}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="text-foreground hover:text-primary p-2">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}