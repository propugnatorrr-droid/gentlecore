export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "calc(100vh - 180px)",
        background:
          "linear-gradient(180deg, #FBD9C4 0%, #F8E8D5 35%, #E8C5BB 65%, #BCC9D6 100%)",
      }}
    >
      {/* Soft watercolor wash overlays */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 30% 25%, rgba(255,236,220,0.7) 0%, transparent 70%), radial-gradient(50% 45% at 80% 70%, rgba(188,201,214,0.6) 0%, transparent 75%)",
        }}
      />

      {/* Decorative LOVE bracelets SVG */}
      <div className="absolute inset-0 flex items-center justify-center pt-12">
        <svg
          viewBox="0 0 600 400"
          className="w-[80%] max-w-[680px] h-auto opacity-95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: "drop-shadow(0 18px 36px rgba(120,80,40,0.18))" }}
        >
          <defs>
            <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E8C892" />
              <stop offset="50%" stopColor="#C9A263" />
              <stop offset="100%" stopColor="#8E6A2F" />
            </linearGradient>
            <linearGradient id="white-gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F5F1EC" />
              <stop offset="100%" stopColor="#B8B4AE" />
            </linearGradient>
          </defs>
          {/* Yellow gold oval bracelet */}
          <ellipse
            cx="240"
            cy="200"
            rx="170"
            ry="115"
            stroke="url(#gold)"
            strokeWidth="14"
          />
          {/* tiny screw dots */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
            const a = (i / 8) * Math.PI * 2;
            const x = 240 + Math.cos(a) * 170;
            const y = 200 + Math.sin(a) * 115;
            return (
              <circle key={i} cx={x} cy={y} r="2.2" fill="#7A5520" />
            );
          })}
          {/* White gold diamond pavé bracelet (interlocked) */}
          <ellipse
            cx="370"
            cy="210"
            rx="170"
            ry="115"
            stroke="url(#white-gold)"
            strokeWidth="14"
          />
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
            const a = (i / 8) * Math.PI * 2 + 0.2;
            const x = 370 + Math.cos(a) * 170;
            const y = 210 + Math.sin(a) * 115;
            return (
              <circle key={`w-${i}`} cx={x} cy={y} r="1.8" fill="#FFFFFF" opacity="0.9" />
            );
          })}
        </svg>
      </div>

      {/* Lower text block */}
      <div className="absolute left-0 right-0 bottom-0 pb-16 md:pb-20 text-center px-6">
        <p className="eyebrow text-[#1D1C1C] mb-5">Discover the icon</p>
        <h1 className="font-serif text-[64px] md:text-[88px] leading-none tracking-tight text-[#1D1C1C] mb-7">
          Love
        </h1>
        <a href="#" className="cartier-link text-[#1D1C1C]">
          Explore the collection
        </a>
      </div>
    </section>
  );
}
