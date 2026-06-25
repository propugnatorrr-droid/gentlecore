const WATCHES = [
  { name: "Santos de Cartier", tag: "Since 1904" },
  { name: "Tank", tag: "Since 1917" },
  { name: "Ballon Bleu", tag: "Since 2007" },
];

function WatchSVG() {
  return (
    <svg viewBox="0 0 200 260" className="w-1/2 h-auto" fill="none">
      <defs>
        <linearGradient id="case" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EEE3CB" />
          <stop offset="100%" stopColor="#9C7D43" />
        </linearGradient>
      </defs>
      {/* strap */}
      <rect x="78" y="10" width="44" height="50" fill="#3A2A1A" />
      <rect x="78" y="200" width="44" height="50" fill="#3A2A1A" />
      {/* case */}
      <rect
        x="55"
        y="55"
        width="90"
        height="150"
        rx="6"
        stroke="url(#case)"
        strokeWidth="3"
        fill="#F8F4EC"
      />
      {/* dial */}
      <rect
        x="65"
        y="65"
        width="70"
        height="130"
        rx="3"
        fill="#FAF7EE"
        stroke="#C9A263"
        strokeWidth="1"
      />
      {/* roman numerals (lines) */}
      {[80, 105, 130, 155].map((y, i) => (
        <line
          key={i}
          x1="72"
          y1={y}
          x2="128"
          y2={y}
          stroke="#1D1C1C"
          strokeWidth="0.5"
          opacity="0.15"
        />
      ))}
      {/* hands */}
      <line x1="100" y1="130" x2="100" y2="85" stroke="#1D1C1C" strokeWidth="1.5" />
      <line x1="100" y1="130" x2="120" y2="130" stroke="#1D1C1C" strokeWidth="1.5" />
      <circle cx="100" cy="130" r="2.5" fill="#1D1C1C" />
      {/* crown */}
      <rect x="145" y="125" width="6" height="10" fill="#C9A263" />
    </svg>
  );
}

export default function WatchesShowcase() {
  return (
    <section className="bg-ink-pure text-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="eyebrow text-white/60 mb-5">Timepieces</p>
          <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.1] text-white">
            Watches with a story.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {WATCHES.map((w) => (
            <div key={w.name} className="group relative">
              <div className="aspect-[4/5] bg-[#111111] flex items-center justify-center relative overflow-hidden">
                <div className="transition-transform duration-700 ease-out group-hover:scale-105 w-full h-full flex items-center justify-center">
                  <WatchSVG />
                </div>
                <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <a href="#" className="cartier-link text-white">
                    Explore
                  </a>
                </div>
              </div>
              <div className="text-center mt-6">
                <h3 className="font-serif text-[22px] text-white mb-2">{w.name}</h3>
                <p className="eyebrow text-white/50">{w.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
