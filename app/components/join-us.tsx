"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Users, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function JoinUs() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Background Cinematic Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[4rem] overflow-hidden bg-card/20 backdrop-blur-3xl border border-white/10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Left Side: Content */}
            <div className="flex-1 p-10 lg:p-24 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-xl text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-10 shadow-2xl shadow-primary/20"
              >
                <Users className="w-3.5 h-3.5" />
                OUR COMMUNITY
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-[0.9] mb-12"
              >
                JOIN WITH US <br />
                <span className="text-primary italic">AND SAVE LIFE</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-xl mb-12"
              >
                Be part of a global movement of heroes. Your commitment helps us build a world where no one has to wait for life-saving blood. Join thousands of donors who are making a difference every single day.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Verified Donors</h4>
                    <p className="text-sm text-muted-foreground">Join a network of over 10k trusted lifesavers.</p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center shrink-0">
                    <Heart className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Save Lives</h4>
                    <p className="text-sm text-muted-foreground">Every donation can save up to 3 individual lives.</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Button size="lg" className="rounded-full px-12 h-20 text-xl font-black bg-primary text-white shadow-2xl shadow-primary/40 hover:scale-105 transition-all group">
                  Join The Movement
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
            </div>

            {/* Right Side: Cinematic Image */}
            <div className="flex-1 relative min-h-[400px] lg:min-h-full">
              <Image
                src="/images/join-us.png"
                alt="Join Our Blood Donation Community"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-card/20 lg:to-card/40 pointer-events-none" />
              
              {/* Dynamic Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="absolute top-12 right-12 w-32 h-32 rounded-full bg-primary/90 backdrop-blur-xl border-4 border-white/20 flex flex-col items-center justify-center text-white shadow-2xl"
              >
                <Sparkles className="w-6 h-6 mb-1" />
                <span className="text-xs font-black uppercase text-center leading-none">JOIN<br/>NOW</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
