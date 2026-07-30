import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certificates = [
  {
    src: "/certificates/dpiit-certificate.png",
    title: "Startup India Recognition",
    description:
      "Official DPIIT recognition as a startup in Education and EdTech, issued by the Government of India.",
  },
  {
    src: "/certificates/autentico-udyam.png",
    title: "MSME Udyam Registration",
    description:
      "Registered as a Micro Enterprise under the Ministry of MSME, Government of India.",
  },
  {
    src: "/certificates/archita-certificate.png",
    title: "Lakshya Business Plan — 2nd Place",
    description:
      "Certificate of Merit at ICEIL-2023 for securing second position in the Lakshya Business Plan Competition.",
  },
  {
    src: "/certificates/yashwanth-iisc-internship.png",
    title: "IISc Internship — Yashwanth N & Athira K",
    description:
      "Five-month internship certificates from IISc Bangalore, High Voltage Laboratory, in plasma applications for agriculture.",
  },
  {
    src: "/certificates/athira-iisc-internship.png",
    title: "IISc Internship — Azmath Unnisa",
    description:
      "Five-month internship certificate from IISc Bangalore, High Voltage Laboratory, in plasma applications for agriculture.",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold uppercase tracking-wider mb-2 block">
            Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-foreground mb-4">
            Our Certificates
          </h2>
          <p className="text-muted-foreground text-lg">
            Recognitions, registrations, and achievements that reflect our
            commitment to academic excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.article
              key={cert.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group rounded-2xl border border-border bg-muted/30 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Enlarged Neutral Frame (No Highlight Accent) */}
              <div className="p-4 pb-0">
                <div className="rounded-xl overflow-hidden border border-border bg-white flex items-center justify-center h-[340px] sm:h-[380px] p-2">
                  <img
                    src={cert.src}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Card Info */}
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-outfit text-foreground mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}