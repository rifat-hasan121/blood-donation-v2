"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden flex items-center transition-all duration-500">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/homeBanner.png"
                    alt="Blood Donation Hero"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-background/20 to-background/90 lg:bg-linear-to-l lg:from-background/95 lg:via-background/40 lg:to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-end">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl text-right flex flex-col items-end"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20 backdrop-blur-sm">
                        <Droplets className="w-4 h-4" />
                        <span>Lifesaving Mission • Since 2024</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-6 leading-tight">
                        Your Blood <br />
                        Our <span className="text-primary italic underline decoration-primary/30">Community</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg font-medium">
                        Join thousands of heroes who donate blood and save lives every day.
                        One simple act of kindness can change a life forever.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-end">
                        <Button size="lg" className="rounded-full px-10 h-16 text-lg font-bold shadow-xl shadow-primary/30 hover:scale-105 transition-all">
                            Donate Now
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg font-bold border-2 hover:bg-primary/5 transition-all">
                            Learn More
                        </Button>
                    </div>

                    <div className="mt-12 flex gap-8 border-t border-border/50 pt-8 w-full justify-end">
                        <div className="text-right">
                            <p className="text-3xl font-black text-primary">1500+</p>
                            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Active Donors</p>
                        </div>
                        <div className="text-right border-l border-border pl-8">
                            <p className="text-3xl font-black text-primary">24/7</p>
                            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Emergency Support</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
