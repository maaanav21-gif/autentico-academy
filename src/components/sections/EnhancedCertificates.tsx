import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Eye, X, CheckCircle2, Building2, Beaker } from "lucide-react";

// 1. Authenticated Asset Mapping
const labPhotos = [
  {
    src: "/Photos/1779441840713.jpg",
    title: "Pharmacognosy Lab",
    subtitle: "Advanced botanical analysis & microscopy station",
  },
  {
    src: "/Photos/1779441842148.jpg",
    title: "Quality Control Lab (QCL)",
    subtitle: "Standardized testing and formulation development",
  },
  {
    src: "/Photos/1779441843362.jpg",
    title: "Field Visit & Research Facility",
    subtitle: "Practical exposure and herbal specimen study",
  },
];

const infrastructurePhotos = [
  {
    src: "/Photos/1779441844621.jpg", // Replace with exact ribbon-cutting filename if needed
    title: "Office Inauguration",
    subtitle: "Official ribbon-cutting ceremony",
  },
  {
    src: "/Photos/1779441845890.jpg", // Replace with exact MOU filename if needed
    title: "MOU Signing",
    subtitle: "Strategic academic and industry partnership agreement",
  },
];

const certificates = [
  {
    src: "/certificates/athira-iisc-internship.png",
    title: "IISc Bangalore Internship — Athira K & Azmath Unnisa",
    issuer: "IISc High Voltage Laboratory",
    description: "Plasma applications in agriculture research.",
  },
  {
    src: "/certificates/yashwanth-iisc-internship.png",
    title: "IISc Internship — Yashwanth N",
    issuer: "IISc High Voltage Laboratory",
    description: "Five-month intensive research internship.",
  },
  {
    src: "/Photos/1779441838112.jpg", // NIUM Certificate photo
    title: "NIUM Training Certificate",
    issuer: "National Institute of Unani Medicine",
    description: "Advanced institutional training credential.",
  },
  {
    src: "/Photos/1779441839420.jpg", // Jain University photo
    title: "Jain University Resource Person",
    issuer: "Jain University",
    description: "Recognition for guest lecture & academic leadership.",
  },
  {
    src: "/Photos/1779441837001.jpg", // INAC Award photo
    title: "INAC 2025 First Place Award",
    issuer: "Indian National Academy Conference",
    description: "First prize award for research presentation.",
  },
];

const achievements = [
  {
    src: "/certificates/archita-certificate.png",
    title: "Lakshya Business Plan — 2nd Place",
    recipient: "Dr. Soumya V. Menon",
    event: "Amity University ICEIL-2023",
  },
  {
    src: "/Photos/1779441846000.jpg", // Workshop presentation photo
    title: "Vaarunya Biolabs Workshop",
    recipient: "Faculty & Student Delegates",
    event: "Industry Hands-on Training",
  },
];

const boardToppers = [
  {
    src: "/Photos/1.jpg",
    name: "Board Topper",
    score: "Academic Excellence",
  },
  {
    src: "/Photos/2 (1).jpg",
    name: "Board Topper",
    score: "Top Ranker",
  },
];

export default function MediaAndCredentials() {
  const [activeModalCert, setActiveModalCert] = useState(null);

  return (
    <div className="space-y-24 py-16 bg-white dark:bg-background">
      {/* SECTION 1: LAB INFRASTRUCTURE & CAMPUS GALLERY */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 mb-8">
          <Beaker className="h-7 w-7 text-primary" />
          <h2 className="text-3xl font-bold font-outfit text-foreground">
            Lab Infrastructure & Quality Control
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {labPhotos.map((photo, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border bg-muted/20 overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="h-60 overflow-hidden bg-muted">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-foreground mb-1">
                  {photo.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {photo.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 2: INFRASTRUCTURE & PARTNERSHIPS */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 mb-8">
          <Building2 className="h-7 w-7 text-primary" />
          <h2 className="text-3xl font-bold font-outfit text-foreground">
            Infrastructure & Official Partnerships
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {infrastructurePhotos.map((photo, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-border overflow-hidden bg-white dark:bg-muted/10 shadow-sm"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-foreground mb-1">
                  {photo.title}
                </h3>
                <p className="text-muted-foreground">{photo.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: ACCREDITATIONS & CERTIFICATES (WITH LIGHTBOX) */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 mb-8">
          <Award className="h-7 w-7 text-primary" />
          <h2 className="text-3xl font-bold font-outfit text-foreground">
            Accreditations & Verified Credentials
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-border bg-white dark:bg-card overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div
                className="relative h-64 border-b border-border bg-muted/40 p-3 flex items-center justify-center cursor-pointer group"
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
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 block">
                  {cert.issuer}
                </span>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: HALL OF FAME & TOPPERS (STANDARDIZED HEADSHOT CARDS) */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 mb-8">
          <CheckCircle2 className="h-7 w-7 text-primary" />
          <h2 className="text-3xl font-bold font-outfit text-foreground">
            Hall of Fame — Student Achievements
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {boardToppers.map((topper, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-white dark:bg-card overflow-hidden text-center shadow-sm"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-muted">
                <img
                  src={topper.src}
                  alt={topper.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-base text-foreground">
                  {topper.name}
                </h4>
                <p className="text-xs text-primary font-medium mt-1">
                  {topper.score}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
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
    </div>
  );
}