import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programs", href: "#programs" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#enquiry" },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-sm backdrop-blur-md py-3 dark:bg-background/95" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Recreated Logo in Type */}
          <div className="flex flex-col">
            <span className={`font-outfit font-bold text-xl leading-tight tracking-tight ${isScrolled ? "text-primary" : "text-white drop-shadow-md"}`}>
              AUTENTICO ACADEMY
            </span>
            <span className={`text-[0.65rem] font-bold tracking-widest ${isScrolled ? "text-primary/70" : "text-white/90 drop-shadow-md"}`}>
              PRIVATE LIMITED
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className={`text-sm font-semibold transition-colors hover:text-accent ${
                isScrolled ? "text-foreground/80" : "text-white drop-shadow-sm"
              }`}
            >
              {link.name}
            </button>
          ))}
          <Button 
            onClick={() => scrollTo("#enquiry")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg"
          >
            Apply Now
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-background border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-left py-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
          <Button 
            onClick={() => scrollTo("#enquiry")}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold mt-2"
          >
            Apply Now
          </Button>
        </div>
      )}
    </header>
  );
}
