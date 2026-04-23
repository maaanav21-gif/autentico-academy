import { motion } from "framer-motion";
import { UserCheck } from "lucide-react";
import logoCard from "@assets/WhatsApp_Image_2026-04-22_at_11.33.46_AM_1776949652529.jpeg";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Founders & Story */}
          <div>
            <span className="text-secondary font-bold uppercase tracking-wider mb-2 block">Leadership</span>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-foreground mb-6">
              Guided by Visionaries
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Autentico Academy was built on a simple premise: education should be transformative. We combine the discipline required for competitive excellence with the mentorship needed for personal growth.
            </p>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-muted/50 border border-border"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <UserCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground font-outfit">Dr. Soumya V. Menon</h4>
                  <p className="text-secondary font-semibold text-sm mb-2">Founder & Director</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Driving the academic vision and strategic direction of the academy with a commitment to educational excellence.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-muted/50 border border-border"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <UserCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground font-outfit">Anshu Kumar P C</h4>
                  <p className="text-secondary font-semibold text-sm mb-2">Co-Founder</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Leading operations and student success programs, ensuring every learner receives the support they need.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Visual / Identity */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white dark:border-muted">
               <img 
                src={logoCard} 
                alt="Autentico Academy Identity" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
            
            {/* Floating accent block */}
            <div className="absolute -bottom-8 -left-8 bg-accent text-accent-foreground p-8 rounded-2xl shadow-xl max-w-[250px] hidden md:block">
              <p className="font-outfit font-bold text-2xl leading-tight">A place to learn, grow, and be inspired.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
