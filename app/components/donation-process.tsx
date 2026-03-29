"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ClipboardCheck, Stethoscope, Droplets, Coffee, Sparkles, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "REGISTRATION",
    description: "Fill out a quick health history form and provide basic identification to begin your lifesaving journey.",
    delay: 0.1
  },
  {
    icon: Stethoscope,
    title: "SCREENING",
    description: "A professional medical check-up ensures you are fit to donate and that your blood is safe for others.",
    delay: 0.2
  },
  {
    icon: Droplets,
    title: "THE DONATION",
    description: "The actual process takes only 8-10 minutes. Relax while you give the gift of life to someone in need.",
    delay: 0.3
  },
  {
    icon: Coffee,
    title: "REFRESHMENT",
    description: "Enjoy some snacks and drinks while you rest for 15 minutes. You've just become someone's hero!",
    delay: 0.4
  }
];

export default function DonationProcess() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Background Cinematic Elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10 -ml-40" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10 -mr-40" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-10 shadow-2xl shadow-primary/20"
          >
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            Simple & Transparent
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground leading-[0.85] mb-6"
          >
            THE DONATION <br />
            <span className="text-primary italic">PROCESS.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground font-medium max-w-2xl"
          >
            From the moment you arrive to the moment you leave as a hero, we ensure your journey is safe, comfortable, and meaningful.
          </motion.p>
        </div>

        <div className="flex flex-col xl:flex-row gap-16 items-center">
          {/* Left: Premium Image with Glass Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex-1 relative w-full aspect-4/3 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] group"
          >
            <Image
              src="https://images.unsplash.com/photo-1584452964155-ef139340f0db?q=80&w=1197&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Donation Experience"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-20 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-60" />
            
            {/* Glass Info Tag on Image */}
            <div className="absolute bottom-12 left-12 p-8 rounded-[2.5rem] bg-card/20 backdrop-blur-3xl border border-white/10 dark:border-white/5 shadow-2xl max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <span className="text-lg font-black tracking-tighter uppercase">Safe & Sterile</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed">Everything we use is 100% sterile and discarded after a single use.</p>
            </div>
          </motion.div>

          {/* Right: Step-by-Step Vertical Process */}
          <div className="flex-1 w-full space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: step.delay }}
                className="group flex gap-8 items-start p-8 rounded-[3rem] bg-card/10 backdrop-blur-3xl border border-white/10 dark:border-white/5 hover:border-primary/40 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(239,68,68,0.2)]"
              >
                <div className="relative">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl z-20 relative">
                        <step.icon className="w-8 h-8" />
                    </div>
                    {/* Connecting Line (except for last) */}
                    {index !== steps.length - 1 && (
                        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-linear-to-b from-primary/30 to-transparent" />
                    )}
                </div>
                
                <div className="flex flex-col">
                  <span className="text-[10px] font-black tracking-[0.3em] text-primary/60 mb-1">STEP 0{index + 1}</span>
                  <h3 className="text-2xl font-black mb-3 tracking-tighter uppercase group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-medium leading-relaxed opacity-80 max-w-md">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
