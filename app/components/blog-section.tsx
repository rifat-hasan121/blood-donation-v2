"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Calendar, User, Sparkles } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "THE POWER OF EVERY DROP",
    description: "Discover how your regular contribution helps maintain a stable supply for emergencies and surgical procedures in your local hospitals...",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "LIFELINE",
    author: "Dr. Sarah Johnson",
    date: "Mar 25"
  },
  {
    id: 2,
    title: "FUELING THE HERO REGIMEN",
    description: "Maintaining proper nutrition is key to a fast recovery. Learn which iron-rich foods and hydration strategies work best for donors...",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
    category: "HEALTH",
    author: "Mark Evans",
    date: "Mar 22"
  },
  {
    id: 3,
    title: "A RARE BLOOD TYPE ODYSSEY",
    description: "An inspiring story of how one person's commitment to donating their rare O-negative blood has saved countless lives over a decade...",
    image: "https://images.unsplash.com/photo-1569333393870-182ed614e9b2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "STORY",
    author: "James Wilson",
    date: "Mar 18"
  }
];

export default function BlogSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-background transition-all duration-1000 overflow-hidden">
        {/* Abstract Cinematic Glows - Matching Hero Style */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/5 blur-[160px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-10 shadow-2xl shadow-primary/20"
            >
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              Intelligence & Stories
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground leading-[0.85] mb-12"
            >
              CULTIVATING <br />
              <span className="text-primary italic relative inline-block">
                KNOWLEDGE.
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute bottom-2 left-0 h-3 bg-primary/10 -z-10 skew-x-12" 
                />
              </span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full max-w-xl relative group mt-4"
            >
              <div className="absolute -inset-1 bg-linear-to-r from-primary/20 to-transparent blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input 
                placeholder="DISCOVER ARTICLES..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-16 h-20 rounded-[2rem] bg-card/20 backdrop-blur-3xl border-white/10 dark:border-white/5 transition-all focus:ring-primary/20 focus:border-primary/50 text-xl font-black tracking-wider shadow-2xl uppercase placeholder:text-muted-foreground/30"
              />
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 50, filter: "blur(15px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card className="group h-full flex flex-col overflow-hidden bg-card/10 backdrop-blur-3xl border-white/10 dark:border-white/5 hover:border-primary/40 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(239,68,68,0.25)] hover:-translate-y-4 rounded-[3rem] relative">
                  <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <CardHeader className="p-0 relative h-72 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-30 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60" />
                    <Badge className="absolute top-8 right-8 bg-primary/20 text-primary backdrop-blur-2xl border-primary/30 px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.2em] shadow-xl">
                      {post.category}
                    </Badge>
                  </CardHeader>

                  <CardContent className="p-10 grow flex flex-col">
                    <div className="flex items-center gap-6 text-[9px] font-black text-muted-foreground mb-8 uppercase tracking-[0.2em]">
                      <div className="flex items-center gap-2 group-hover:text-primary transition-colors">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2 group-hover:text-primary transition-colors">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                    </div>
                    <CardTitle className="text-3xl font-black mb-6 leading-[1.1] group-hover:text-primary transition-all duration-500 tracking-tighter uppercase">
                        {post.title}
                    </CardTitle>
                    <p className="text-muted-foreground font-medium line-clamp-3 leading-relaxed text-lg opacity-80 mb-10">
                        {post.description}
                    </p>
                    <div className="mt-auto">
                      <Button variant="ghost" className="p-0 h-auto font-black text-primary hover:bg-transparent hover:text-primary group/btn items-center inline-flex text-xs tracking-[0.2em] uppercase">
                          CONTINUE READING
                          <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-500 group-hover/btn:translate-x-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredPosts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32 px-8"
          >
            <div className="bg-primary/5 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Search className="w-10 h-10 text-primary opacity-20" />
            </div>
            <h3 className="text-3xl font-black text-foreground mb-4 uppercase tracking-tighter">No intelligence found</h3>
            <p className="text-muted-foreground font-bold text-lg mb-10 max-w-md mx-auto">Our knowledge base doesn't match your query yet. Try a different term.</p>
            <Button 
                variant="outline" 
                onClick={() => setSearchQuery("")}
                className="font-black rounded-full h-14 px-10 border-primary/20 hover:bg-primary/5"
            >
                Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
