export default function LoveStorySection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[640px]">
      {/* Text panel */}
      <div className="order-2 md:order-1 bg-[#F8E8D5] flex items-center px-8 md:px-20 py-20">
        <div className="max-w-md">
          <p className="eyebrow text-[#6B6B6B] mb-6">The Love Collection</p>
          <h2 className="font-serif text-[40px] md:text-[56px] leading-[1.05] text-[#1D1C1C] mb-7">
            A love that endures.
          </h2>
          <p className="text-[15px] md:text-[16px] leading-[1.75] text-[#1D1C1C]/85 mb-9">
            Conceived in 1969, the Love bracelet broke with convention to give
            shape to a bold promise. Sealed on the wrist with a screwdriver, it
            transformed jewelry into a quiet ritual. More than half a century
            on, its design remains an intimate emblem of devotion.
          </p>
          <a href="#" className="cartier-link text-[#1D1C1C]">
            Discover Love
          </a>
        </div>
      </div>

      {/* Image panel */}
      <div
        className="order-1 md:order-2 relative flex items-center justify-center min-h-[420px] md:min-h-0"
        style={{
          background:
            "linear-gradient(135deg, #EAD9C4 0%, #D4A89A 60%, #B58F7B 100%)",
        }}
      >
        <svg
          viewBox="0 0 500 500"
          className="w-3/4 max-w-[460px] h-auto"
          fill="none"
          style={{ filter: "drop-shadow(0 22px 40px rgba(80,40,20,0.22))" }}
        >
          <defs>
            <linearGradient id="gold-2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F0D5A2" />
              <stop offset="60%" stopColor="#C9A263" />
              <stop offset="100%" stopColor="#7A5520" />
            </linearGradient>
          </defs>
          <ellipse
            cx="220"
            cy="240"
            rx="160"
            ry="110"
            stroke="url(#gold-2)"
            strokeWidth="16"
          />
          <ellipse
            cx="290"
            cy="260"
            rx="160"
            ry="110"
            stroke="url(#gold-2)"
            strokeWidth="16"
          />
          {Array.from({ length: 10 }).map((_, i) => {
            const a = (i / 10) * Math.PI * 2;
            return (
              <circle
                key={i}
                cx={220 + Math.cos(a) * 160}
                cy={240 + Math.sin(a) * 110}
                r="2.8"
                fill="#7A5520"
              />
            );
          })}
        </svg>
      </div>
    </section>
  );
}
