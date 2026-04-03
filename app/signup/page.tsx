"use client";

import { motion } from "framer-motion";
import { Mail, Lock, User, Phone, Droplet, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Footer from "../components/footer";

export default function SignUp() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
      </div>

      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8 relative z-10 my-10 lg:my-20">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-0 bg-card/40 backdrop-blur-xl rounded-[2rem] lg:rounded-[3rem] border border-border/50 shadow-2xl overflow-hidden">
          
          {/* Left Side - Info/Branding */}
          <div className="relative p-10 lg:p-16 flex flex-col justify-center overflow-hidden bg-primary/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.08),transparent_50%)]" />
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8 border border-primary/20">
                <Heart className="w-4 h-4 fill-current" />
                <span>Be a Hero</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-6">
                Join Our <br />
                <span className="text-primary italic underline decoration-primary/30">Lifesaving</span> <br />
                Community
              </h1>
              
              <p className="text-lg text-muted-foreground font-medium mb-10 max-w-md">
                Create an account to start your journey of saving lives. Every drop counts, and your participation matters.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Quick Registration", desc: "Sign up in less than 2 minutes." },
                  { title: "Track Your Impact", desc: "See the lives you've saved." },
                  { title: "Emergency Alerts", desc: "Get notified when someone needs your blood type." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">{item.title}</h3>
                      <p className="text-muted-foreground text-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 lg:p-16 flex items-center justify-center bg-card/60">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-md"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-foreground mb-3">Create Account</h2>
                <p className="text-muted-foreground font-medium">Already have an account? <Link href="/login" className="text-primary font-bold hover:underline transition-all">Sign in here</Link></p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1 text-foreground">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input placeholder="John Doe" className="h-14 pl-12 rounded-xl border-2 focus-visible:ring-primary bg-background/50 backdrop-blur-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-1 text-foreground">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input placeholder="john@example.com" type="email" className="h-14 pl-12 rounded-xl border-2 focus-visible:ring-primary bg-background/50 backdrop-blur-sm" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-1 text-foreground">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input placeholder="+880 1..." type="tel" className="h-14 pl-12 rounded-xl border-2 focus-visible:ring-primary bg-background/50 backdrop-blur-sm" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1 text-foreground">Blood Type</label>
                  <div className="relative">
                    <Droplet className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                    <select 
                      defaultValue=""
                      className="flex h-14 w-full rounded-xl border-2 border-input bg-background/50 backdrop-blur-sm pl-12 pr-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%208l5%205%205-5%22%20stroke%3D%22%239CA3AF%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-no-repeat bg-[position:calc(100%-1rem)_center]"
                    >
                      <option value="" disabled>Select blood type</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1 text-foreground">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input placeholder="••••••••" type="password" className="h-14 pl-12 rounded-xl border-2 focus-visible:ring-primary bg-background/50 backdrop-blur-sm" />
                  </div>
                </div>

                <Button className="w-full h-14 rounded-xl text-lg font-black bg-primary hover:bg-primary/90 mt-6 transition-all group overflow-hidden relative shadow-lg shadow-primary/20">
                  <span className="relative z-10 flex items-center gap-2">
                    Create Account
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </Button>

                <div className="flex items-center gap-4 my-6">
                  <div className="flex-1 border-t border-border/80"></div>
                  <span className="text-xs uppercase text-muted-foreground font-bold tracking-wider">
                    Or continue with
                  </span>
                  <div className="flex-1 border-t border-border/80"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" type="button" className="h-14 rounded-xl border-2 bg-background/50 backdrop-blur-sm hover:bg-muted hover:border-primary/50 transition-all font-bold shadow-sm text-foreground">
                    <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" type="button" className="h-14 rounded-xl border-2 bg-background/50 backdrop-blur-sm hover:bg-muted hover:border-blue-500/50 transition-all font-bold shadow-sm text-[#1877F2]">
                    <svg className="mr-2 h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </Button>
                </div>
                
                <p className="text-xs text-center text-muted-foreground mt-6 font-medium">
                  By signing up, you agree to our <Link href="#" className="text-primary hover:underline">Terms of Service</Link> and <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>

              </form>
            </motion.div>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
