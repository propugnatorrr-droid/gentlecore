"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Search, Heart, User, MapPin, ShoppingBag, Menu } from "lucide-react";

const PRIMARY_NAV = [
  "High Jewelry",
  "Jewelry",
  "Watches",
  "Bags and Accessories",
  "Fragrances",
  "Home & Stationery",
  "News",
  "La Maison",
];

const UTILITY_NAV = ["United States", "Contact Us", "Services"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[#E5E5E5]"
          : "bg-white"
      }`}
    >
      {/* Top utility row */}
      <div className="hidden md:flex items-center justify-between px-8 pt-4 pb-2 text-[#1D1C1C]">
        <ul className="flex items-center gap-7">
          {UTILITY_NAV.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="eyebrow hover:opacity-70 transition-opacity"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-5">
          {[
            { icon: Heart, label: "Wishlist" },
            { icon: User, label: "Account" },
            { icon: MapPin, label: "Boutiques" },
            { icon: ShoppingBag, label: "Bag" },
          ].map(({ icon: Icon, label }) => (
            <li key={label}>
              <button
                aria-label={label}
                className="p-1 hover:opacity-60 transition-opacity"
              >
                <Icon size={18} strokeWidth={1.25} />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Wordmark */}
      <div className="flex items-center justify-between md:justify-center px-6 py-2 md:py-1 relative">
        <button
          className="md:hidden p-2"
          aria-label="Open menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <Menu size={20} strokeWidth={1.25} />
        </button>
        <Link
          href="/"
          aria-label="Cartier home"
          className="font-serif italic font-normal text-[42px] md:text-[52px] leading-none tracking-tight text-[#1D1C1C] select-none"
          style={{ fontStretch: "condensed" }}
        >
          Cartier
        </Link>
        <button
          className="md:hidden p-2"
          aria-label="Shopping bag"
        >
          <ShoppingBag size={18} strokeWidth={1.25} />
        </button>
      </div>

      {/* Primary nav */}
      <nav className="hidden md:flex items-center justify-center gap-8 px-8 pb-4 pt-2">
        {PRIMARY_NAV.map((item) => (
          <a
            key={item}
            href="#"
            className="eyebrow text-[12px] hover:opacity-60 transition-opacity"
          >
            {item}
          </a>
        ))}
        <button
          aria-label="Search"
          className="ml-4 p-1 hover:opacity-60 transition-opacity"
        >
          <Search size={16} strokeWidth={1.25} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#E5E5E5] px-6 py-6">
          <ul className="flex flex-col gap-5">
            {PRIMARY_NAV.map((item) => (
              <li key={item}>
                <a href="#" className="eyebrow">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-3 mt-6 pt-6 border-t border-[#E5E5E5]">
            {UTILITY_NAV.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="eyebrow text-[#6B6B6B]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
