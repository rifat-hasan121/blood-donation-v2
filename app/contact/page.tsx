"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Contact Header */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-primary/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1),transparent_70%)]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Mail className="w-[500px] h-[500px] text-primary" />
          </motion.div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20 backdrop-blur-sm">
              <span>Connect with us</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-6">
              Get in <span className="text-primary italic underline decoration-primary/30">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              Have questions or want to host a blood donation camp? Our team is here to help you make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-black text-foreground">Contact Information</h2>
              <p className="text-muted-foreground font-medium">
                Feel free to reach out through any of these channels. We respond to all inquiries within 24 hours.
              </p>

              <div className="space-y-6 pt-4">
                {[
                  { icon: Phone, label: "Phone", value: "+880 1234-567890", subtitle: "Mon-Fri: 9am - 6pm" },
                  { icon: Mail, label: "Email", value: "hello@bloodlink.com", subtitle: "Online support 24/7" },
                  { icon: MapPin, label: "Office", value: "123 Hope Plaza, Dhaka, Bangladesh", subtitle: "Visit our main center" },
                  { icon: Clock, label: "Hours", value: "24/7 Support", subtitle: "For emergency donor search" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{item.label}</p>
                      <p className="text-lg font-bold text-foreground">{item.value}</p>
                      <p className="text-sm text-muted-foreground font-medium">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links Placeholder */}
              <div className="pt-8">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Follow us</p>
                <div className="flex gap-4">
                  {[Globe, Mail, Mail, Mail].map((Icon, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-border/50 hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-all cursor-pointer">
                      <Icon className="w-5 h-5" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 border-2 border-border/50 shadow-2xl shadow-primary/5 bg-card/50 backdrop-blur-sm rounded-3xl">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold ml-1">Full Name</label>
                      <Input placeholder="John Doe" className="h-14 rounded-xl border-2 focus-visible:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold ml-1">Email Address</label>
                      <Input placeholder="john@example.com" type="email" className="h-14 rounded-xl border-2 focus-visible:ring-primary" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-1">Subject</label>
                    <Input placeholder="How can we help?" className="h-14 rounded-xl border-2 focus-visible:ring-primary" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-1">Message</label>
                    <textarea 
                      placeholder="Write your message here..." 
                      className="w-full min-h-[160px] p-4 rounded-xl border-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <Button className="w-full h-16 rounded-xl text-lg font-black bg-primary hover:bg-primary/90 transition-all group overflow-hidden relative shadow-lg shadow-primary/20">
                    <span className="relative z-10 flex items-center gap-2">
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-black text-foreground">Find Us on <span className="text-primary italic underline decoration-primary/30">Map</span></h2>
            </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-[450px] rounded-3xl overflow-hidden border-2 border-border/50 shadow-2xl relative"
          >
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187883446!2d90.33728801974753!3d23.780887456950222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbcad5b597!2sDhaka!5e0!3m2!1sen!2sbd!4v1712123456789!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
