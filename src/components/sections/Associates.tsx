import { motion } from "framer-motion";

const associates = [
  "VAARUNYA BIOLABS PRIVATE LIMITED",
  "INSILICOMICS",
  "INDIAN INSTITUTE OF SCIENCE",
  "NIUM"
];

export default function Associates() {
  return (
    <section className="py-12 bg-muted border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
          Our Esteemed Business Associates & Partners
        </p>
        
        {/* Simple marquee effect */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-24">
            {[...associates, ...associates, ...associates].map((associate, i) => (
              <span 
                key={i} 
                className="text-lg md:text-xl font-bold text-foreground/40 font-outfit"
              >
                {associate}
              </span>
            ))}
          </div>
          
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 md:gap-24 ml-16 md:ml-24">
             {[...associates, ...associates, ...associates].map((associate, i) => (
              <span 
                key={i} 
                className="text-lg md:text-xl font-bold text-foreground/40 font-outfit"
              >
                {associate}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
