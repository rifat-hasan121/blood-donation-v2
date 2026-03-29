"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Sparkles, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    id: 1,
    name: "ALEX RIVERA",
    role: "Regular Donor",
    content: "Giving blood is the simplest way to be a hero in person. The experience is incredibly professional, and knowing I've potentially saved three lives makes my day every single time.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 2,
    name: "SARAH CHEN",
    role: "First-time Donor",
    content: "I was always nervous about needles, but the team here made me feel so comfortable. It was quick, painless, and now I'm committed to donating every few months. Highly recommended!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 3,
    name: "MARCUS WRIGHT",
    role: "Emergency Support",
    content: "As someone who once needed a transfusion, I understand the vital importance of this mission. I donate now as a way to give back to the community that saved me. It's truly a lifeline.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 4,
    name: "LISA THOMPSON",
    role: "O-Negative Hero",
    content: "Being a universal donor, I feel a special responsibility. This platform makes it so easy to find drives and schedule appointments. The new digital tracking is a game-changer for me.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    rating: 5
  }
];

export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
        {/* Background Cinematic Elements */}
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-primary/5 blur-[180px] rounded-full pointer-events-none -z-10 -mr-40" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10 -ml-40" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-10 shadow-2xl shadow-primary/20"
          >
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            Voice of the Lifesavers
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground leading-[0.85] mb-6"
          >
            THE DONOR <br />
            <span className="text-primary italic">EXPERIENCE.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground font-medium max-w-2xl"
          >
            Hear directly from the heroes who are making a real impact in our community every single day.
          </motion.p>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
        >
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full py-4">
                    <div className="h-full relative p-8 md:p-10 rounded-[3rem] bg-card/10 backdrop-blur-3xl border border-white/10 dark:border-white/5 shadow-2xl group hover:border-primary/40 transition-all duration-700 flex flex-col justify-between">
                      <div>
                        <div className="flex gap-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-lg font-bold italic text-foreground leading-relaxed mb-8 opacity-90 tracking-tight">
                          "{testimonial.content}"
                        </p>
                      </div>

                      <div className="flex items-center gap-5 mt-auto">
                        <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-xl shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-lg font-black tracking-tighter uppercase text-primary leading-none mb-1">
                              {testimonial.name}
                          </h4>
                          <span className="text-[10px] font-black tracking-[0.2em] text-muted-foreground uppercase opacity-60">
                              {testimonial.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
