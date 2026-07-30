import { motion } from "framer-motion";
import { Award, GraduationCap, Medal, Crown } from "lucide-react";

const toppers = [
  {
    name: "Student Name 1",
    rank: "Board Topper - 2023",
    score: "98.5%",
    subject: "PCB",
    image: "/Photos/1.png",
    achievement: "State Rank 5",
  },
  {
    name: "Student Name 2",
    rank: "Board Topper - 2023",
    score: "97.8%",
    subject: "PCMC",
    image: "/Photos/2 (1).png",
    achievement: "District Rank 1",
  },
];

export default function HallOfFame() {
  return (
    <section id="hall-of-fame" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold uppercase tracking-wider mb-2 block">
            Excellence
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-foreground mb-4">
            Hall of Fame
          </h2>
          <p className="text-muted-foreground text-lg">
            Celebrating our board toppers and high achievers who have excelled academically and brought glory to our institution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {toppers.map((topper, index) => (
            <motion.div
              key={topper.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all bg-card border border-border">
                {/* Achievement Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-full p-2 shadow-lg">
                    <Crown className="h-5 w-5" />
                  </div>
                </div>

                {/* Student Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                {/* Student Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Medal className="h-4 w-4 text-yellow-600" />
                      <span className="text-xs font-semibold text-yellow-600 uppercase tracking-wider">
                        {topper.achievement}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground font-outfit mb-1">
                      {topper.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {topper.rank}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-primary font-outfit">
                          {topper.score}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Score
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-foreground">
                          {topper.subject}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Stream
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Add More Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all bg-card border-2 border-dashed border-border flex items-center justify-center min-h-[400px]">
              <div className="text-center p-8">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground font-outfit mb-2">
                  Join Our Hall of Fame
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Many students have achieved excellence through our guidance
                </p>
                <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                  <Award className="h-4 w-4" />
                  More achievers coming soon
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Board Toppers", value: "25+" },
              { label: "90%+ Scorers", value: "50+" },
              { label: "State Ranks", value: "10+" },
              { label: "University Placements", value: "100+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold font-outfit mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base opacity-90 font-semibold">
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