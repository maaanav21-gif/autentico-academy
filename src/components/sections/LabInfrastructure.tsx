import { motion } from "framer-motion";
import { Microscope, Building2, Award } from "lucide-react";

const labImages = [
  {
    src: "/Photos/1779441840713.jpg",
    title: "Pharmacognosy Lab",
    description: "Advanced research facility for natural product analysis and drug discovery",
  },
  {
    src: "/Photos/1779441842148.jpg",
    title: "Quality Control Lab (QCL)",
    description: "State-of-the-art equipment for pharmaceutical quality assurance",
  },
  {
    src: "/Photos/1779441843362.jpg",
    title: "Field Visit & Research",
    description: "Hands-on learning experiences with industry experts",
  },
];

export default function LabInfrastructure() {
  return (
    <section id="lab-infrastructure" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold uppercase tracking-wider mb-2 block">
            Infrastructure
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-foreground mb-4">
            Lab Infrastructure & Campus
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our state-of-the-art laboratories and learning facilities designed for practical excellence in pharmaceutical sciences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labImages.map((lab, index) => (
            <motion.div
              key={lab.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-card border border-border"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={lab.src}
                  alt={lab.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Microscope className="h-5 w-5 text-white" />
                    <h3 className="text-xl font-bold text-white font-outfit">
                      {lab.title}
                    </h3>
                  </div>
                  <p className="text-white/90 text-sm">
                    {lab.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border"
          >
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Microscope className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground font-outfit mb-2">
                Advanced Equipment
              </h4>
              <p className="text-muted-foreground text-sm">
                Modern laboratory instruments for practical training and research
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border"
          >
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground font-outfit mb-2">
                Modern Facilities
              </h4>
              <p className="text-muted-foreground text-sm">
                Spacious classrooms and well-maintained infrastructure
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border"
          >
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground font-outfit mb-2">
                Industry Standard
              </h4>
              <p className="text-muted-foreground text-sm">
                Facilities matching industry requirements for seamless transitions
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}