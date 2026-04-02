"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Globe
} from "lucide-react";

const quickLinks = [
  { name: "Why Donate", href: "#why-donate" },
  { name: "Our Campaigns", href: "#campaigns" },
  { name: "Our Partners", href: "#partners" },
  { name: "Testimonials", href: "#testimonials" },
];

const resources = [
  { name: "Donor Guidelines", href: "#" },
  { name: "Safety Process", href: "#" },
  { name: "Health Benefits", href: "#" },
  { name: "FAQ", href: "#" },
];

const socialIcons = [
  { path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", label: "Facebook" },
  { path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z", label: "Twitter" },
  { path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z", label: "LinkedIn" },
  { path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z", label: "Instagram" }
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-20">
          {/* Brand & Mission */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-[1rem] bg-primary/20 flex items-center justify-center border border-primary/30 shadow-2xl shadow-primary/20 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 text-primary fill-current" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">RED<span className="text-primary italic">LIFE</span></span>
            </div>
            <p className="text-muted-foreground font-medium leading-relaxed max-w-xs">
              Every drop counts. We are a global community dedicated to making blood donation simple, safe, and accessible for everyone.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, scale: 1.1 }}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-[0.8rem] bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary transition-colors hover:shadow-[0_10px_20px_rgba(239,68,68,0.2)]"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                    <path d={social.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-8">
            <h4 className="text-sm font-black tracking-[0.3em] uppercase text-white opacity-90 border-l-2 border-primary pl-4">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col gap-8">
            <h4 className="text-sm font-black tracking-[0.3em] uppercase text-white opacity-90 border-l-2 border-primary pl-4">Resources</h4>
            <ul className="flex flex-col gap-4">
              {resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-8">
            <h4 className="text-sm font-black tracking-[0.3em] uppercase text-white opacity-90 border-l-2 border-primary pl-4">Contact</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-[0.8rem] bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground font-medium group-hover:text-white transition-colors cursor-pointer">+880 1234 567 890</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-[0.8rem] bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground font-medium group-hover:text-white transition-colors cursor-pointer">hello@redlife.org</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-[0.8rem] bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary/10 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground font-medium group-hover:text-white transition-colors leading-snug cursor-pointer">123 Health Ave, Heart City<br/>Medical Plaza, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-muted-foreground text-sm font-medium opacity-50">
            © {new Date().getFullYear()} <span className="text-white opacity-100">REDLIFE</span>. All Rights Reserved. Designed with passion for humanity.
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-xs font-bold text-muted-foreground hover:text-white transition-colors tracking-widest uppercase opacity-50 hover:opacity-100">Privacy Policy</a>
            <a href="#" className="text-xs font-bold text-muted-foreground hover:text-white transition-colors tracking-widest uppercase opacity-50 hover:opacity-100">Terms of Service</a>
            <div className="flex items-center gap-2 text-xs font-black text-white px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Globe className="w-3 h-3 text-primary animate-pulse" />
              GLOBAL NETWORK
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
