function IgIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}
function YtIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
      <rect x="2" y="5" width="20" height="14" rx="3" />
      <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FbIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
      <path d="M14 8h2V5h-2.5C12 5 11 6 11 7.5V10H9v3h2v6h3v-6h2.2L17 10h-3V8z" />
    </svg>
  );
}

const COLUMNS = [
  {
    title: "Customer Care",
    links: ["Contact Us", "Find a Boutique", "Shipping & Returns", "FAQ"],
  },
  {
    title: "Our Company",
    links: ["La Maison Cartier", "Sustainability", "Careers", "Press"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Cookies", "Terms of Use", "Accessibility"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-10">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow text-white mb-6">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[13px] text-[#A0A0A0] hover:text-white transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="eyebrow text-white mb-6">Follow Us</h4>
            <ul className="flex items-center gap-5">
              <li>
                <a href="#" aria-label="Instagram" className="text-[#A0A0A0] hover:text-white transition-colors">
                  <IgIcon />
                </a>
              </li>
              <li>
                <a href="#" aria-label="YouTube" className="text-[#A0A0A0] hover:text-white transition-colors">
                  <YtIcon />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Facebook" className="text-[#A0A0A0] hover:text-white transition-colors">
                  <FbIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <button className="eyebrow text-[#A0A0A0] hover:text-white transition-colors">
              United States &middot; English
            </button>
          </div>
          <p className="text-[11px] text-[#A0A0A0]">
            &copy; Cartier 2026. Inspired clone, not affiliated with the Maison.
          </p>
        </div>
      </div>
    </footer>
  );
}
