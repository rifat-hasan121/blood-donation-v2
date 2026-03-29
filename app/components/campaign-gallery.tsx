"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Heart } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1581431019744-aac83cff96ad?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "City Center Drive",
    location: "Downtown Medical",
    size: "col-span-1 row-span-2"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=1616&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Campus Heroes",
    location: "State University",
    size: "col-span-1 row-span-1"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Corporate Giving",
    location: "Tech Park",
    size: "col-span-1 row-span-1"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
    title: "Emergency Response",
    location: "Night Drive",
    size: "col-span-2 row-span-1"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    title: "Volunteer Team",
    location: "HQ Central",
    size: "col-span-1 row-span-1"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=800&auto=format&fit=crop",
    title: "Donor Appreciation",
    location: "Community Hall",
    size: "col-span-1 row-span-1"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1542868727-5b8fcd21495e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Mobile Hospital Day",
    location: "East Side",
    size: "col-span-1 row-span-1"
  }
];

export default function CampaignGallery() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
        {/* Background Cinematic Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-primary/5 blur-[200px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-10 shadow-2xl shadow-primary/20"
          >
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            Visual Proof of Impact
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground leading-[0.85] mb-6"
          >
            OUR RECENT <br />
            <span className="text-primary italic">CAMPAIGNS.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground font-medium max-w-2xl"
          >
            Witness the community coming together. These moments represent thousands of lives saved through collective bravery.
          </motion.p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`${image.size} group relative rounded-[3rem] overflow-hidden shadow-2xl cursor-pointer`}
            >
              <Image
                src={image.url}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-20 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Glassmorphism Overlay */}
              <div className="absolute inset-x-8 bottom-8 p-6 rounded-[2rem] bg-card/20 backdrop-blur-3xl border border-white/10 translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-black tracking-tighter uppercase mb-1">{image.title}</h4>
                  <div className="flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-widest">
                    <MapPin className="w-3.5 h-3.5" />
                    {image.location}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center shadow-lg">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
