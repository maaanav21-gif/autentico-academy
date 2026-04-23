import { motion } from "framer-motion";
import { Users, LayoutTemplate, Lightbulb, HeartHandshake, Award, Globe2, Briefcase, GraduationCap } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    { icon: Users, title: "One-to-One Interaction", desc: "Personalized attention ensuring no student is left behind." },
    { icon: LayoutTemplate, title: "Systematic Approach", desc: "Structured curriculum delivery for consistent progress." },
    { icon: Lightbulb, title: "Critical & Design Thinking", desc: "Fostering analytical minds ready for modern challenges." },
    { icon: HeartHandshake, title: "Holistic Development", desc: "Focusing on overall growth, not just academic scores." },
    { icon: Award, title: "High-Quality Education", desc: "Premium teaching standards by experienced faculty." },
    { icon: Globe2, title: "Diverse Study Programs", desc: "Options tailored for every educational board and path." },
    { icon: Briefcase, title: "Job Placement Guidance", desc: "Career support for our internship and college programs." },
    { icon: GraduationCap, title: "International Scholarships", desc: "Guidance for securing global educational opportunities." },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-foreground mb-4">Why Choose Autentico?</h2>
          <p className="text-muted-foreground text-lg">
            We don't just teach; we mentor. Our methodology is built on proven principles that ensure academic excellence and real-world readiness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow hover:border-secondary/50 group"
            >
              <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-outfit">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
