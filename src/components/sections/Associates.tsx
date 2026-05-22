const associates = [
  {
    name: "VAARUNYA BIOLABS PRIVATE LIMITED",
    image: "/images/science-lab.jpg",
  },
  {
    name: "INSILICOMICS",
    image: "/images/college-internship.jpg",
  },
  {
    name: "INDIAN INSTITUTE OF SCIENCE",
    image: "/images/campus-building.jpg",
  },
  {
    name: "NIUM",
    image: "/images/classroom-learning.jpg",
  },
];

export default function Associates() {
  return (
    <section className="py-12 bg-muted border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
          Our Esteemed Business Associates & Partners
        </p>

        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12 md:gap-20">
            {[...associates, ...associates, ...associates].map((associate, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-4 px-4 py-2 rounded-xl bg-card border border-border shadow-sm"
              >
                <img
                  src={associate.image}
                  alt={associate.name}
                  className="h-12 w-12 rounded-lg object-cover shrink-0"
                />
                <span className="text-base md:text-lg font-bold text-foreground/70 font-outfit">
                  {associate.name}
                </span>
              </div>
            ))}
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-12 md:gap-20 ml-12 md:ml-20">
            {[...associates, ...associates, ...associates].map((associate, i) => (
              <div
                key={`b-${i}`}
                className="inline-flex items-center gap-4 px-4 py-2 rounded-xl bg-card border border-border shadow-sm"
              >
                <img
                  src={associate.image}
                  alt={associate.name}
                  className="h-12 w-12 rounded-lg object-cover shrink-0"
                />
                <span className="text-base md:text-lg font-bold text-foreground/70 font-outfit">
                  {associate.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
