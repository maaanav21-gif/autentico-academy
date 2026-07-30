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
    title: "IISc Internship — Athira K",
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

export default function EnhancedCertificates() {
  const [activeModalCert, setActiveModalCert] = useState(null);

  return (
    <>
      <section id="certificates" className="py-24 bg-white dark:bg-background relative z-10">
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
          {certificates.map((cert, index) => (
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
                className="relative h-64 border-b border-border bg-muted/20 p-4 flex items-center justify-center cursor-pointer group"
                onClick={() => setActiveModalCert(cert)}
              >
                <img
                  src={cert.src}
                  alt={cert.title}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium">
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
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeModalCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveModalCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-card rounded-2xl p-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-muted text-foreground hover:bg-muted/80 z-10"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="max-h-[80vh] overflow-auto flex items-center justify-center p-2">
                <img
                  src={activeModalCert.src}
                  alt={activeModalCert.title}
                  className="max-w-full h-auto object-contain rounded-lg"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="font-bold text-lg text-foreground">
                  {activeModalCert.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {activeModalCert.issuer}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
    </>
  );
}