import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import schoolImg from "@/assets/school-students.png";
import labImg from "@/assets/science-lab.png";
import collegeImg from "@/assets/college-internship.png";

export default function Programs() {
  const programs = [
    {
      id: "school",
      title: "School Admissions",
      subtitle: "Classes 8, 9, 10, 11, 12",
      description:
        "Comprehensive coaching for CBSE, ICSE, and State Boards. Build a strong foundation for future success.",
      image: schoolImg,
      features: [
        "Early Bird Admission Now Open (2026-2027)",
        "Offers valid till 31st March, 2026",
        "Systematic approach to syllabus",
        "Regular assessments & feedback",
      ],
      badge: "Admissions Open",
    },
    {
      id: "crash-courses",
      title: "Crash Courses",
      subtitle: "Intensive Exam Preparation",
      description:
        "High-yield preparation programs designed to maximize your competitive exam scores in minimum time.",
      image: labImg,
      features: [
        "NEET Crash Course (Online/Offline) — Starts 20th March, 2026",
        "CSIR NET Crash Course — Starts 1st April, 2026",
        "Limited seats available",
        "Expert faculty guidance",
      ],
      badge: "Starting Soon",
    },
    {
      id: "college",
      title: "College & University",
      subtitle: "Programs & Internships",
      description:
        "Launch your career with our industry-aligned internships and globally recognized certifications.",
      image: collegeImg,
      features: [
        "Live Project & Virtual/On-Site Internships",
        "Industry Mentorship & Job Placement Guidance",
        "Globally Recognized Certification",
        "Professional Development Programs",
      ],
      badge: "Career Launchpad",
    },
  ];

  return (
    <section id="programs" className="py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-foreground mb-4">
            Our Programs
          </h2>

          <p className="text-muted-foreground text-lg">
            From school academics to professional certifications, we offer
            comprehensive education paths designed for holistic development and
            measurable success.
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
                  <h3 className="text-2xl font-bold text-white font-outfit">
                    {program.title}
                  </h3>

                  <p className="text-white/80 font-medium">
                    {program.subtitle}
                  </p>
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

                      <span className="text-sm font-medium text-foreground/80 leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                  onClick={() =>
                    document
                      .querySelector("#enquiry")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-primary rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="p-10 text-white">
            <h3 className="text-3xl font-bold mb-4">
              School Admissions 2026-2027
            </h3>

            <p className="text-blue-100 mb-6">
              Secure your child's future with structured learning and expert
              guidance.
            </p>

            <Button
              className="bg-accent text-black font-bold"
              onClick={() =>
                document
                  .querySelector("#enquiry")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Enquire Today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}