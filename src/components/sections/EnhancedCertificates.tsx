import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, ZoomIn, CheckCircle } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const certificates = [
  {
    src: "/Certificates/yashwanth-iisc-internship.png",
    title: "IISc Bangalore Internship",
    subtitle: "Yashwanth N & Athira K",
    description:
      "Five-month internship certificates from IISc Bangalore, High Voltage Laboratory, in plasma applications for agriculture.",
    category: "Internship",
  },
  {
    src: "/Certificates/athira-iisc-internship.png",
    title: "IISc Bangalore Internship",
    subtitle: "Azmath Unnisa",
    description:
      "Five-month internship certificate from IISc Bangalore, High Voltage Laboratory, in plasma applications for agriculture.",
    category: "Internship",
  },
  {
    src: "/Certificates/archita-certificate.png",
    title: "Lakshya Business Plan Competition",
    subtitle: "ICEIL-2023 Second Position",
    description:
      "Certificate of Merit at ICEIL-2023 for securing second position in the Lakshya Business Plan Competition.",
    category: "Award",
  },
  {
    src: "/Certificates/dpiit-certificate.png",
    title: "Startup India Recognition",
    subtitle: "DPIIT Certification",
    description:
      "Official DPIIT recognition as a startup in Education and EdTech, issued by the Government of India.",
    category: "Government",
  },
  {
    src: "/Certificates/autentico-udyam.png",
    title: "MSME Udyam Registration",
    subtitle: "Micro Enterprise",
    description:
      "Registered as a Micro Enterprise under the Ministry of MSME, Government of India.",
    category: "Government",
  },
];

export default function EnhancedCertificates() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificates" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold uppercase tracking-wider mb-2 block">
            Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-foreground mb-4">
            Certifications & Recognitions
          </h2>
          <p className="text-muted-foreground text-lg">
            Click on any certificate to view full details. Our credentials reflect our commitment to academic excellence and innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", "Internship", "Award", "Government"].map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-semibold bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => {
            const isLakshyaCert = cert.src.includes("archita-certificate");

            return (
              <motion.article
                key={cert.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                {/* Certificate Frame */}
                <div className="relative p-4 pb-0">
                  <div className="rounded-xl overflow-hidden border border-border bg-white flex items-center justify-center h-[340px] sm:h-[380px] p-2 relative">
                    <img
                      src={cert.src}
                      alt={cert.title}
                      loading="lazy"
                      className={`max-w-full max-h-full object-contain ${
                        isLakshyaCert ? "-rotate-90 scale-125" : "w-full h-full"
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                        <ZoomIn className="h-6 w-6 text-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                      {cert.category}
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold font-outfit text-foreground mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-secondary font-semibold text-sm mb-2">
                        {cert.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Modal/Lightbox */}
        <AnimatePresence>
          {selectedCert && (
            <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
              <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
                <div className="relative">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  <div className="bg-white p-8 flex items-center justify-center min-h-[500px]">
                    <img
                      src={selectedCert.src}
                      alt={selectedCert.title}
                      className={`max-w-full max-h-[70vh] object-contain ${
                        selectedCert.src.includes("archita-certificate") ? "-rotate-90 scale-125" : ""
                      }`}
                    />
                  </div>
                  <div className="p-6 bg-muted/30 border-t border-border">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-outfit text-foreground mb-1">
                          {selectedCert.title}
                        </h3>
                        <p className="text-secondary font-semibold mb-2">{selectedCert.subtitle}</p>
                        <p className="text-muted-foreground">{selectedCert.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}