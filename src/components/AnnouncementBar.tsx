"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="bg-[#F5F5F5] text-[#1D1C1C] relative">
      <div className="max-w-7xl mx-auto px-6 py-2.5 text-center text-[12px] tracking-wide">
        <span className="font-medium uppercase tracking-[0.14em] mr-2">Fragrance sampling:</span>
        <span className="text-[#1D1C1C]">
          Complimentary fragrance samples included with select purchases.
        </span>{" "}
        <a href="#" className="underline underline-offset-2 hover:no-underline">Learn More</a>
      </div>
      <button
        onClick={() => setOpen(false)}
        aria-label="Dismiss announcement"
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-[#1D1C1C] hover:opacity-60 transition-opacity"
      >
        <X size={14} />
      </button>
    </div>
  );
}
