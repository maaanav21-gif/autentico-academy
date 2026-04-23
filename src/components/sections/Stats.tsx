import { motion } from "framer-motion";
import { CalendarCheck, Users, Trophy, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: CalendarCheck,
    value: "10+",
    label: "Years guiding students",
  },
  {
    icon: Users,
    value: "2,500+",
    label: "Students mentored",
  },
  {
    icon: Trophy,
    value: "500+",
    label: "Competitive exams cleared",
  },
  {
    icon: GraduationCap,
    value: "40+",
    label: "Faculty & industry mentors",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-white dark:bg-background border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-secondary font-bold uppercase tracking-wider mb-2 block">
            Trusted by families across Bengaluru
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-foreground">
            A decade of measurable outcomes
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 md:p-8 text-center hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-outfit font-bold text-foreground">
                {s.value}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1 font-medium">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
