import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#why" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const programLinks = [
  "School Tuition (8-12)",
  "NEET Crash Course",
  "CSIR NET Crash Course",
  "Internship Programs",
  "Certification Programs",
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <div>
                <p className="font-outfit font-extrabold text-lg leading-tight">
                  AUTENTICO
                </p>
                <p className="text-xs uppercase tracking-widest opacity-80">
                  Academy Pvt Ltd
                </p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              A place to learn, grow, and be inspired. Preparing students from
              school to global careers.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-outfit font-bold text-base mb-4 uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="opacity-80 hover:opacity-100 hover:text-accent transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-outfit font-bold text-base mb-4 uppercase tracking-wider">
              Programs
            </h4>
            <ul className="space-y-2 text-sm">
              {programLinks.map((p) => (
                <li
                  key={p}
                  className="opacity-80 hover:opacity-100 hover:text-accent transition cursor-default"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-outfit font-bold text-base mb-4 uppercase tracking-wider">
              Reach us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <div className="opacity-90">
                  <a href="tel:+919035957974" className="block hover:text-accent">
                    +91 90359 57974
                  </a>
                  <a href="tel:+919945677055" className="block hover:text-accent">
                    +91 99456 77055
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <a
                  href="mailto:autenticoacademypvtltd@gmail.com"
                  className="opacity-90 hover:text-accent break-all"
                >
                  autenticoacademypvtltd@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span className="opacity-90 leading-relaxed">
                  Shettihalli Main Rd, Jalahalli West, Bangalore — 560 015
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-primary-foreground/15 flex flex-col md:flex-row gap-3 items-center justify-between text-xs opacity-80">
          <p>
            © {new Date().getFullYear()} Autentico Academy Private Limited. All
            rights reserved.
          </p>
          <p>Bengaluru, India</p>
        </div>
      </div>
    </footer>
  );
}
