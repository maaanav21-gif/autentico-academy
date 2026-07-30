import { motion } from "framer-motion";
import { Trophy, Award, Star, Calendar } from "lucide-react";

const awardEvents = [
  {
    src: "/Photos/extracted/awards-page-1.png",
    title: "Best Business Plan Award",
    subtitle: "Dr. Soumya V. Menon",
    event: "Amity University ICEIL-2023",
    description: "Recognition for innovative business planning and entrepreneurial excellence",
    date: "2023",
    icon: Trophy,
  },
  {
    src: "/Photos/extracted/awards-page-2.png",
    title: "Workshop with Vaarunya Biolabs",
    subtitle: "Industry Collaboration",
    event: "Hands-on Training Session",
    description: "Interactive workshop on biotechnology applications and industry practices",
    date: "2024",
    icon: Award,
  },
  {
    src: "/Photos/extracted/awards-page-3.png",
    title: "Student Cash Prize Distribution",
    subtitle: "Academic Excellence Awards",
    event: "Annual Recognition Ceremony",
    description: "Celebrating student achievements with cash prizes and certificates",
    date: "2024",
    icon: Star,
  },
];

export default function AwardsAchievements() {
  return (
    <section id="awards-achievements" className="py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold uppercase tracking-wider mb-2 block">
            Excellence
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-foreground mb-4">
            Awards & Student Achievements
          </h2>
          <p className="text-muted-foreground text-lg">
            Celebrating the remarkable achievements of our team and students in academic competitions and industry recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {awardEvents.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all bg-card border border-border"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={event.src}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2 text-white/80 text-sm">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <h3 className="text-xl font-bold text-white font-outfit mb-1">
                      {event.title}
                    </h3>
                    <p className="text-white/90 text-sm font-semibold mb-2">
                      {event.subtitle}
                    </p>
                    <p className="text-white/80 text-xs">
                      {event.event}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievement Stats */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Awards Won", value: "15+" },
              { label: "Industry Recognitions", value: "10+" },
              { label: "Student Achievements", value: "50+" },
              { label: "Workshops Conducted", value: "25+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary font-outfit mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}