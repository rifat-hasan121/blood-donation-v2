"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Heart, 
  ShieldCheck, 
  Target, 
  History, 
  Award, 
  ArrowRight,
  UserPlus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "../components/footer";

const coreValues = [
  {
    icon: Heart,
    title: "Compassion",
    description: "Every drop of blood is a gift of life, and we treat every donor and recipient with the utmost care."
  },
  {
    icon: ShieldCheck,
    title: "Trust & Safety",
    description: "Building a safe and reliable network where every transaction is verified and every donor is vetted."
  },
  {
    icon: Users,
    title: "Community First",
    description: "We believe in the power of collective action to solve the most pressing healthcare challenges."
  },
  {
    icon: Target,
    title: "Relentless Focus",
    description: "Our goal is simple: ensure no life is lost due to the lack of blood availability."
  }
];

const teamMembers = [
  {
    name: "Dr. Sarah Ahmed",
    role: "Medical Director",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    name: "John Doe",
    role: "Head of Operations",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
  },
  {
    name: "Maria Garcia",
    role: "Community Manager",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"
  },
  {
    name: "Alex Rivera",
    role: "Technical Lead",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  }
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* About Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-primary/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.1),transparent_70%)]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Heart className="w-[600px] h-[600px] text-primary" />
          </motion.div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-1.5 rounded-full border-primary/30 text-primary font-bold bg-primary/5 backdrop-blur-sm">
              Our Journey
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground mb-8">
              Pioneering the Future of <span className="text-primary italic underline decoration-primary/30">Donation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
              Founded in 2024, BloodLink is more than just a platform. We are a community of lifesavers dedicated to making blood donation accessible, transparent, and impactful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm">
              <Target className="w-5 h-5" />
              <span>Our Purpose</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
              We bridge the gap between <span className="text-primary">Need</span> and <span className="text-primary">Hope</span>
            </h2>
            <p className="text-muted-foreground text-lg font-medium">
              Our mission is to modernize the blood donation infrastructure by providing a seamless interface where donors can connect with recipients in real-time. We leverage technology to save time, and ultimately, to save lives.
            </p>
            <div className="flex gap-4">
              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="text-2xl font-black text-foreground">1M+</p>
                <p className="text-sm font-bold text-muted-foreground uppercase">Lives Touched</p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="text-2xl font-black text-foreground">100%</p>
                <p className="text-sm font-bold text-muted-foreground uppercase">Transparent</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative border-4 border-border/50">
               <img 
                 src="https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?q=80&w=2070&auto=format&fit=crop" 
                 alt="Blood Donation Lab" 
                 className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity hover:opacity-0" />
            </div>
            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 bg-card border-2 border-primary/20 p-6 rounded-2xl shadow-xl backdrop-blur-md hidden md:block"
            >
              <p className="text-3xl font-black text-primary">24/7</p>
              <p className="text-xs font-bold text-muted-foreground">Emergency Support</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-foreground italic">Our Core <span className="text-primary underline decoration-primary/20">Values</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium">The principles that guide us in our mission to revolutionize blood donation.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all group rounded-3xl shadow-lg hover:shadow-primary/5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground font-medium text-sm leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
               <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                <Users className="w-4 h-4" />
                <span>The Visionaries</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-foreground">Meet Our <span className="text-primary italic">Heroes</span></h2>
          </div>
          <Button variant="outline" className="rounded-full px-8 border-2 font-bold hover:bg-primary/5 text-lg group">
            Our Entire Story <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center space-y-6"
            >
              <div className="relative group mx-auto">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-all duration-500 relative bg-muted grayscale hover:grayscale-0">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-foreground">{member.name}</h3>
                <p className="text-sm font-bold uppercase tracking-widest text-primary">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-foreground text-background rounded-3xl p-12 md:p-24 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-primary/30 transition-all duration-1000" />
          
          <div className="relative z-10 max-w-2xl space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Ready to Save <span className="text-primary italic underline decoration-primary/40 underline-offset-8">Lives?</span>
            </h2>
            <p className="text-xl text-background/70 font-medium">
              Join our network of thousands of donors and help us ensure that nobody has to wait for blood when every second counts.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-background rounded-full px-10 h-16 text-lg font-black group/btn">
                Become a Donor <UserPlus className="ml-2 w-5 h-5 group-hover/btn:scale-110 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-10 h-16 text-lg font-black border-2 border-background/20 hover:bg-background/10">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
