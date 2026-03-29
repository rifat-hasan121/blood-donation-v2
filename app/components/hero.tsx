"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets } from "lucide-react";

export default function Hero() {
    return (
        <section className="hero">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-end">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl text-right flex flex-col items-end"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20 backdrop-blur-sm group hover:bg-primary/20 transition-all cursor-default overflow-hidden">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.8, 1],
                                filter: ["drop-shadow(0 0 0px rgba(239, 68, 68, 0))", "drop-shadow(0 0 8px rgba(239, 68, 68, 0.5))", "drop-shadow(0 0 0px rgba(239, 68, 68, 0))"]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Droplets className="w-4 h-4 fill-current" />
                        </motion.div>
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
                        <Button size="lg" className="rounded-full px-10 h-16 text-lg font-bold shadow-xl shadow-primary/30 hover:scale-105 transition-all group/btn">
                            Donate Now
                            <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
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
