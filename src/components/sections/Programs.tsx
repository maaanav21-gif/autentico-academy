import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import schoolImg from "@/assets/school-students.png";
import labImg from "@/assets/science-lab.png";
import collegeImg from "@/assets/college-internship.png";
import admissionBrochure from "@assets/WhatsApp_Image_2026-04-22_at_11.33.47_AM_1776949652531.jpeg";

export default function Programs() {
  const programs = [
    {
      id: "school",
      title: "School Admissions",
      subtitle: "Classes 8, 9, 10, 11, 12",
      description: "Comprehensive coaching for CBSE, ICSE, and State Boards. Build a strong foundation for future success.",
      image: schoolImg,
      features: [
        "Early Bird Admission Now Open (2026-2027)",
        "Offers valid till 31st March, 2026",
        "Systematic approach to syllabus",
        "Regular assessments & feedback"
      ],
      badge: "Admissions Open"
    },
    {
      id: "crash-courses",
      title: "Crash Courses",
      subtitle: "Intensive Exam Preparation",
      description: "High-yield preparation programs designed to maximize your competitive exam scores in minimum time.",
      image: labImg,
      features: [
        "NEET Crash Course (Online/Offline) — Starts 20th March, 2026",
        "CSIR NET Crash Course — Starts 1st April, 2026",
        "Limited seats available",
        "Expert faculty guidance"
      ],
      badge: "Starting Soon"
    },
    {
      id: "college",
      title: "College & University",
      subtitle: "Programs & Internships",
      description: "Launch your career with our industry-aligned internships and globally recognized certifications.",
      image: collegeImg,
      features: [
        "Live Project & Virtual/On-Site Internships",
        "Industry Mentorship & Job Placement Guidance",
        "Globally Recognized Certification",
        "Professional Development Programs"
      ],
      badge: "Career Launchpad"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-foreground mb-4">Our Programs</h2>
          <p className="text-muted-foreground text-lg">
            From school academics to professional certifications, we offer comprehensive education paths designed for holistic development and measurable success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div 
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                    {program.badge}
                  </span>
                </div>
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white font-outfit">{program.title}</h3>
                  <p className="text-white/80 font-medium">{program.subtitle}</p>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {program.description}
                </p>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground/80 leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                  onClick={() => document.querySelector("#enquiry")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brochure Highlight Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-primary rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-accent font-bold uppercase tracking-wider mb-2">Featured</span>
              <h3 className="text-3xl md:text-4xl font-bold text-white font-outfit mb-6">
                School Admissions 2026-2027
              </h3>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Secure your child's future with our early bird admission offers. We provide a systematic approach to learning that balances rigorous academics with critical thinking and holistic development.
              </p>
              <ul className="space-y-4 mb-8 text-white/90">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent" /> CBSE, ICSE & State Boards
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent" /> Classes 8th to 12th
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent" /> Special offers valid till March 31, 2026
                </li>
              </ul>
              <div>
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
                  onClick={() => document.querySelector("#enquiry")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Enquire Today
                </Button>
              </div>
            </div>
            <div className="relative min-h-[300px] lg:min-h-full">
              <img 
                src={admissionBrochure} 
                alt="Admission Brochure" 
                className="absolute inset-0 w-full h-full object-cover object-center opacity-80 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent lg:bg-gradient-to-r lg:from-primary lg:to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
