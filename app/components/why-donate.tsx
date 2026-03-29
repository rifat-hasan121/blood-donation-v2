"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Users, Activity, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Heart,
    title: "SAVE THREE LIVES",
    description: "A single donation can be separated into its components—red cells, plasma, and platelets—to save up to three lives in critical care.",
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    icon: Activity,
    title: "HEALTH VITALITY",
    description: "Donating stimulates the production of new blood cells, helping maintain healthy iron levels and improving overall cardiovascular function.",
    color: "text-red-500",
    bg: "bg-red-500/10"
  },
  {
    icon: Users,
    title: "COMMUNITY IMPACT",
    description: "Your simple act of kindness strengthens the local medical infrastructure, ensuring blood is always available for those in need.",
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    icon: ShieldCheck,
    title: "FREE CHECK-UP",
    description: "Every donor receives a mini-physical including pulse, blood pressure, body temperature, and hemoglobin level checks.",
    color: "text-red-500",
    bg: "bg-red-500/10"
  }
];

export default function WhyDonate() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Background Cinematic Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 blur-[180px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        {/* Left Side: Massive Typography */}
        <div className="flex-1 text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-10 shadow-2xl shadow-primary/20"
          >
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            The Lifeline Purpose
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground leading-[0.85] mb-12"
          >
            WHY YOUR <br />
            <span className="text-primary italic relative">BLOOD</span> <br />
            MATTERS.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-xl mb-12"
          >
            Every 2 seconds, someone needs blood. Your donation is a selfless gift that provides hope and a second chance at life for patients in emergency situations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button size="lg" className="rounded-full px-12 h-20 text-xl font-black bg-primary text-white shadow-2xl shadow-primary/40 hover:scale-105 transition-all group">
              Become a Hero
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Right Side: Bento-style Glass Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-[3rem] bg-card/10 backdrop-blur-3xl border border-white/10 dark:border-white/5 hover:border-primary/40 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(239,68,68,0.2)] hover:-translate-y-3"
            >
              <div className={`w-16 h-16 rounded-[1.5rem] ${benefit.bg} ${benefit.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black mb-4 tracking-tight uppercase group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground font-medium leading-relaxed text-sm opacity-80">
                {benefit.description}
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
