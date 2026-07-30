import { motion } from "framer-motion";
import { Handshake, Ribbon, Building, Users } from "lucide-react";

const partnershipImages = [
  {
    src: "/Photos/extracted/photos-pdf-page-1.png",
    title: "Office Inauguration",
    description: "Grand opening ceremony of Autentico Academy's new facility",
    icon: Ribbon,
  },
  {
    src: "/Photos/extracted/photos-pdf-page-2.png",
    title: "Ribbon Cutting Ceremony",
    description: "Official inauguration with distinguished guests and partners",
    icon: Ribbon,
  },
  {
    src: "/Photos/extracted/photos-pdf-page-3.png",
    title: "MOU Signing",
    description: "Strategic partnerships with leading academic institutions",
    icon: Handshake,
  },
  {
    src: "/Photos/extracted/photos-pdf-page-4.png",
    title: "Industry Collaboration",
    description: "Building bridges between academia and industry",
    icon: Building,
  },
];

export default function InfrastructurePartnerships() {
  return (
    <section id="infrastructure-partnerships" className="py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold uppercase tracking-wider mb-2 block">
            Partnerships
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-foreground mb-4">
            Infrastructure & Partnerships
          </h2>
          <p className="text-muted-foreground text-lg">
            Our journey of growth through strategic collaborations and continuous infrastructure development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {partnershipImages.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-card border border-border"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-5 w-5 text-white" />
                      <h3 className="text-xl font-bold text-white font-outfit">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-white/90 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Partnership Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Academic Partners", value: "15+" },
            { label: "Industry Collaborations", value: "20+" },
            { label: "MOU Signed", value: "10+" },
            { label: "Research Projects", value: "25+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-muted/50 border border-border"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary font-outfit mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}