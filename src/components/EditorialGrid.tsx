const STORIES = [
  {
    cat: "Heritage",
    date: "March 2026",
    title: "Inside the Maison's archives in Paris.",
    grad: "linear-gradient(135deg, #E8C5BB 0%, #B58F7B 100%)",
  },
  {
    cat: "Craftsmanship",
    date: "February 2026",
    title: "The hands behind a single setting.",
    grad: "linear-gradient(135deg, #BCC9D6 0%, #34394D 100%)",
  },
  {
    cat: "Encounters",
    date: "January 2026",
    title: "A conversation with our master watchmaker.",
    grad: "linear-gradient(135deg, #F8E8D5 0%, #C9A263 100%)",
  },
];

export default function EditorialGrid() {
  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="eyebrow text-[#6B6B6B] mb-5">News & Stories</p>
          <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.1] text-[#1D1C1C]">
            The Cartier Journal.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {STORIES.map((s) => (
            <article key={s.title} className="group">
              <div
                className="aspect-[4/5] mb-6 overflow-hidden"
                style={{ background: s.grad }}
              />
              <p className="eyebrow text-[#6B6B6B] mb-4">
                {s.date} &middot; {s.cat}
              </p>
              <h3 className="font-serif text-[24px] md:text-[26px] leading-[1.25] text-[#1D1C1C] mb-5">
                {s.title}
              </h3>
              <a href="#" className="cartier-link text-[#1D1C1C]">
                Read the story
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
