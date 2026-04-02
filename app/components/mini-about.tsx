"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Building2, HeartPulse, Handshake, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Saves Lives",
    description: "A single donation can save up to three lives, making an enormous impact on those in need.",
    icon: Heart,
  },
  {
    title: "Helps Hospitals & Patients",
    description: "Blood donations ensure hospitals have a steady supply for emergency surgeries, accidents, and critical illnesses.",
    icon: Building2,
  },
  {
    title: "Boosts Your Health",
    description: "Donating blood can improve heart health, balance iron levels, and stimulate new blood cell production.",
    icon: HeartPulse,
  },
  {
    title: "A Simple, Safe Process",
    description: "The donation process is quick, safe, and conducted by trained professionals, ensuring donor and recipient safety.",
    icon: Handshake,
  },
];

export default function MiniAbout() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden border-y border-white/5">
      {/* Background Cinematic Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl text-primary text-[10px] font-black tracking-[0.4em] uppercase mb-10 shadow-2xl shadow-primary/20"
          >
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            Empowering Humanity
          </motion.div>
          
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground leading-[0.85] mb-12">
            ABOUT BLOOD <br />
            <span className="text-primary italic">DONATION.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-2xl mt-12 text-center">
            Blood donation is a selfless act that saves millions of lives every year. Your contribution bridges the gap between hope and healing for those in critical care.
          </p>

          <div className="mt-12">
            <Button size="lg" className="rounded-full px-12 h-20 text-xl font-black bg-primary text-white shadow-2xl shadow-primary/40 hover:scale-105 transition-all group">
              <Heart className="mr-3 w-6 h-6 fill-current" />
              Join the Lifeline
            </Button>
          </div>
        </motion.div>

        {/* Features Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative p-8 rounded-[3rem] bg-card/10 backdrop-blur-3xl border border-white/10 dark:border-white/5 hover:border-primary/40 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(239,68,68,0.2)] hover:-translate-y-3 shadow-2xl"
            >
              <div className="w-16 h-16 rounded-[1.5rem] bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-red-500 transition-colors" />
              </div>

              <h3 className="text-xl font-black mb-4 tracking-tight uppercase group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground font-medium leading-relaxed text-sm opacity-80">
                {feature.description}
              </p>
              
              {/* Decorative Corner Glow */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
