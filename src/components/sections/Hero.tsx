import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-students.png";

export default function Hero() {
  const scrollToEnquiry = () => {
    document.querySelector("#enquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Students studying" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-primary/30" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-sm font-semibold tracking-wide uppercase">Admissions Open 2026-2027</span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-outfit font-bold text-white leading-[1.1] tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A place to learn, grow, and be <span className="text-accent">inspired.</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-blue-50 max-w-2xl mb-10 leading-relaxed font-jakarta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Preparing students from school academics to global careers. We are a serious, disciplined coaching institute and a modern career launchpad all in one.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              onClick={scrollToEnquiry}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-14 px-8 text-lg rounded-xl shadow-[0_0_40px_-10px_rgba(251,192,45,0.5)]"
            >
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => document.querySelector("#programs")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm h-14 px-8 text-lg rounded-xl"
            >
              Explore Programs
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/10 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-white font-bold">Class 8-12</p>
                <p className="text-blue-100/70 text-sm">All Major Boards</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-white font-bold">Crash Courses</p>
                <p className="text-blue-100/70 text-sm">NEET & CSIR NET</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
