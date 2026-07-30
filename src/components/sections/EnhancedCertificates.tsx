import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Eye, X } from "lucide-react";

const certificates = [
  {
    src: "/certificates/dpiit-certificate.png",
    title: "Startup India Recognition",
    issuer: "GOVERNMENT OF INDIA",
    description: "Official DPIIT recognition as a startup in Education and EdTech.",
  },
  {
    src: "/certificates/autentico-udyam.png",
    title: "MSME Udyam Registration",
    issuer: "MINISTRY OF MSME",
    description: "Registered Micro Enterprise under the Government of India.",
  },
  {
    src: "/certificates/archita-certificate.png",
    title: "Lakshya Business Plan",
    issuer: "AMITY UNIVERSITY ICEIL-2023",
    description: "Certificate of Merit for outstanding business plan presentation.",
  },
  {
    src: "/certificates/yashwanth-iisc-internship.png",
    title: "IISc Internship — Yashwanth N & Athira K",
    issuer: "IISC HIGH VOLTAGE LABORATORY",
    description: "Five-month intensive research internship in plasma applications.",
  },
  {
    src: "/certificates/athira-iisc-internship.png",
    title: "IISc Internship — Azmath Unnisa",
    issuer: "IISC HIGH VOLTAGE LABORATORY",
    description: "Five-month intensive research internship in plasma applications.",
  },
];

export default function Certificates() {
  const [activeModalCert, setActiveModalCert] = useState(null);

  return (
    <section id="certificates" className="py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold uppercase tracking-wider mb-2 block">
            Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-foreground mb-4">
            Accreditations & Verified Credentials
          </h2>
          <p className="text-muted-foreground text-lg">
            Recognitions, registrations, and achievements that reflect our commitment to academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => {
            // Check if this is the Lakshya certificate to apply the counter-clockwise rotation
            const isLakshyaCert = cert.src.includes("archita-certificate");

            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group rounded-2xl border border-border bg-white dark:bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                {/* Image Container with Lightbox Click */}
                <div 
                  className="relative h-64 border-b border-border bg-muted/20 p-4 flex items-center justify-center cursor-pointer group overflow-hidden"
                  onClick={() => setActiveModalCert(cert)}
                >
                  <img
                    src={cert.src}
                    alt={cert.title}
                    loading="lazy"
                    // -rotate-90 applies the counter-clockwise rotation, scale-125 makes it fit the box better after rotating
                    className={`max-w-full max-h-full object-contain transition-transform duration-300 ${
                      isLakshyaCert ? "-rotate-90 scale-125" : ""
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium z-10">
                    <Eye className="h-5 w-5" /> View Full Certificate
                  </div>
                </div>

                {/* Card Metadata */}
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 block">
                    {cert.issuer}
                  </span>
                  <h3 className="text-lg font-bold font-outfit text-foreground mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeModalCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveModalCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-card rounded-2xl p-4 overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-muted text-foreground hover:bg-muted/80 z-10"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="flex-1 overflow-auto flex items-center justify-center p-4">
                <img
                  src={activeModalCert.src}
                  alt={activeModalCert.title}
                  className={`max-w-full h-auto max-h-[70vh] object-contain rounded-lg ${
                    activeModalCert.src.includes("archita-certificate") ? "-rotate-90 scale-110" : ""
                  }`}
                />
              </div>
              
              <div className="mt-4 text-center pb-2">
                <h3 className="font-bold text-xl text-foreground">
                  {activeModalCert.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {activeModalCert.issuer}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}