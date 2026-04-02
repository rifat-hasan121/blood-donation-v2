"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Globe, 
  ShieldCheck, 
  Stethoscope, 
  Heart, 
  CircleDot,
  CloudLightning,
  Boxes,
  Star
} from "lucide-react";

const sponsors = [
  { name: "RED CROSS", icon: Heart, type: "shield" },
  { name: "WHO", icon: Globe, type: "circle-dots" },
  { name: "UNICEF", icon: Building2, type: "hexagon" },
  { name: "GOOGLE", icon: CircleDot, type: "scalloped" },
  { name: "MICROSOFT", icon: Boxes, type: "ribbon" },
  { name: "HEALTH PRO", icon: Stethoscope, type: "shield" },
  { name: "LIFE GUARD", icon: ShieldCheck, type: "circle-dots" },
  { name: "GLOBAL CARE", icon: CloudLightning, type: "hexagon" },
];

const SponsorBadge = ({ sponsor }: { sponsor: typeof sponsors[0] }) => {
  const { name, icon: Icon, type } = sponsor;

  return (
    <div className="relative w-40 h-40 flex items-center justify-center group cursor-pointer">
      {/* Background Shapes based on type */}
      {type === "shield" && (
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-foreground/5 fill-none stroke-foreground/20 stroke-[1.5] group-hover:scale-110 transition-transform duration-700">
          <path d="M50 10 L85 20 V50 C85 75 50 90 50 90 C50 90 15 75 15 50 V20 L50 10 Z" />
          <path d="M50 15 L80 24 V50 C80 72 50 85 50 85 C50 85 20 72 20 50 V24 L50 15 Z" className="opacity-50" />
        </svg>
      )}
      {type === "circle-dots" && (
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-foreground/5 fill-none stroke-foreground/20 stroke-[1.5] group-hover:scale-110 transition-transform duration-700">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="38" className="stroke-dasharray-[2,4]" />
          {[...Array(12)].map((_, i) => (
            <circle key={i} cx={50 + 41 * Math.cos(i * Math.PI / 6)} cy={50 + 41 * Math.sin(i * Math.PI / 6)} r="1" fill="currentColor" />
          ))}
        </svg>
      )}
      {type === "hexagon" && (
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-foreground/5 fill-none stroke-foreground/20 stroke-[1.5] group-hover:scale-110 transition-transform duration-700">
          <path d="M50 5 L90 28 V72 L50 95 L10 72 V28 L50 5 Z" />
          <path d="M50 12 L83 31 V69 L50 88 L17 69 V31 L50 12 Z" className="opacity-50" />
        </svg>
      )}
      {type === "scalloped" && (
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-foreground/5 fill-none stroke-foreground/20 stroke-[1.5] group-hover:scale-110 transition-transform duration-700">
          <circle cx="50" cy="50" r="45" className="stroke-dasharray-[4,2] stroke-10 opacity-10" />
          <circle cx="50" cy="50" r="42" />
          <circle cx="50" cy="50" r="36" />
        </svg>
      )}
      {type === "ribbon" && (
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-foreground/5 fill-none stroke-foreground/20 stroke-[1.5] group-hover:scale-110 transition-transform duration-700">
          <circle cx="50" cy="50" r="40" />
          <path d="M10 50 Q30 45 50 50 T90 50" className="stroke-8 opacity-10" />
          <path d="M0 45 L100 45 L100 55 L0 55 Z" className="fill-background stroke-none" />
          <path d="M0 45 L100 45 M0 55 L100 55" className="stroke-foreground/30" />
        </svg>
      )}

      {/* Internal Content */}
      <div className="relative z-10 flex flex-col items-center gap-1.5 p-4 text-center">
        <Icon className="w-6 h-6 text-foreground/40 group-hover:text-primary transition-colors duration-500" />
        <span className="text-[10px] font-black tracking-widest text-foreground/60 uppercase group-hover:text-foreground">
          {name}
        </span>
        <div className="flex gap-0.5">
          <Star className="w-1.5 h-1.5 fill-current text-primary/30" />
          <Star className="w-1.5 h-1.5 fill-current text-primary/30" />
          <Star className="w-1.5 h-1.5 fill-current text-primary/30" />
        </div>
      </div>
    </div>
  );
};

export default function Sponsors() {
  const repeatedSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden border-y border-white/5">
      {/* Background Cinematic Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-10"
          >
            Institutional TRUST
          </motion.div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-[0.9]">
            OUR GLOBAL <br />
            <span className="text-primary italic">PARTNERS</span>
          </h2>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative flex overflow-hidden mask-fade-x pb-12">
          <motion.div
            animate={{
              x: ["0%", "-33.33%"],
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-20 sm:gap-32 items-center shrink-0"
          >
            {repeatedSponsors.map((sponsor, index) => (
              <SponsorBadge key={`${sponsor.name}-${index}`} sponsor={sponsor} />
            ))}
          </motion.div>
        </div>
      </div>
      
      <style jsx>{`
        .mask-fade-x {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
      `}</style>
    </section>
  );
}
