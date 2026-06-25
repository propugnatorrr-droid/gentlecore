const COLLECTIONS = [
  { name: "Trinity", bg: "#E5C99F", ring: "#A6792C" },
  { name: "Love", bg: "#D4A89A", ring: "#7B4A3C" },
  { name: "Panthère", bg: "#34394D", ring: "#C9A263" },
  { name: "Juste un Clou", bg: "#F0EAD6", ring: "#8E6A2F" },
];

export default function IconicCollections() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="eyebrow text-[#6B6B6B] mb-5">Iconic Collections</p>
          <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.1] text-[#1D1C1C] max-w-2xl mx-auto">
            The Maison&rsquo;s heritage in motion.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {COLLECTIONS.map((c) => (
            <div key={c.name} className="group">
              <div
                className="aspect-square w-full flex items-center justify-center mb-6 overflow-hidden"
                style={{ backgroundColor: c.bg }}
              >
                <svg
                  viewBox="0 0 200 200"
                  className="w-1/2 h-1/2 transition-transform duration-700 group-hover:scale-105"
                  fill="none"
                >
                  <ellipse
                    cx="100"
                    cy="100"
                    rx="78"
                    ry="58"
                    stroke={c.ring}
                    strokeWidth="3"
                  />
                  <ellipse
                    cx="100"
                    cy="100"
                    rx="62"
                    ry="46"
                    stroke={c.ring}
                    strokeWidth="2"
                    opacity="0.7"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="font-serif italic text-[22px] text-[#1D1C1C] mb-3">
                  {c.name}
                </h3>
                <a href="#" className="cartier-link text-[#1D1C1C]">
                  Discover
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
