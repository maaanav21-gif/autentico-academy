import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "The NEET crash course was incredibly focused. The faculty's systematic approach helped my daughter improve her mock scores significantly in just weeks.",
      author: "Priya Sharma",
      role: "Parent of Class 12 Student",
    },
    {
      text: "I joined the virtual internship program and the industry mentorship was top-notch. It gave me the practical exposure I needed to secure my first job.",
      author: "Rahul Verma",
      role: "College Student",
    },
    {
      text: "What sets Autentico apart is the one-to-one interaction. They actually care about holistic development, not just making students memorize textbooks.",
      author: "Dr. K. N. Rao",
      role: "Parent of Class 9 Student",
    }
  ];

  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">Trusted by Families</h2>
          <p className="text-blue-100 text-lg">
            Hear from the parents and students who have experienced the Autentico difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl relative"
            >
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-lg leading-relaxed mb-8 italic text-white/90">"{t.text}"</p>
              <div>
                <p className="font-bold font-outfit text-xl">{t.author}</p>
                <p className="text-blue-200 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
