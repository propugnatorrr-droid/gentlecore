export default function BoutiqueLocator() {
  return (
    <section
      className="py-28 md:py-36 px-6 text-white text-center relative"
      style={{
        background:
          "radial-gradient(80% 60% at 50% 0%, #2A3148 0%, #1A1F2E 55%, #0B0F1A 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <p className="eyebrow text-white/60 mb-5">Visit us</p>
        <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.1] text-white mb-6">
          Find a Cartier boutique.
        </h2>
        <p className="text-[15px] md:text-[16px] leading-[1.75] text-white/75 mb-10">
          Discover personalised service in over 200 boutiques worldwide.
        </p>
        <a href="#" className="cartier-link text-white">
          Find a Boutique
        </a>
      </div>
    </section>
  );
}
