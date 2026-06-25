"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <p className="eyebrow text-[#6B6B6B] mb-5">Newsletter</p>
        <h2 className="font-serif text-[32px] md:text-[40px] leading-[1.15] text-[#1D1C1C] mb-10">
          Sign up for Cartier news.
        </h2>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-end gap-6 max-w-md mx-auto"
        >
          <label className="flex-1 text-left">
            <span className="eyebrow text-[#6B6B6B] block mb-3">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full bg-transparent border-0 border-b border-[#1D1C1C] py-2 text-[14px] text-[#1D1C1C] placeholder:text-[#6B6B6B]/60 focus:outline-none focus:border-b-2"
            />
          </label>
          <button type="submit" className="cartier-link text-[#1D1C1C] pb-2">
            Subscribe
          </button>
        </form>

        <p className="text-[11px] text-[#6B6B6B] mt-8 leading-relaxed">
          By signing up, you agree to receive news from Cartier. Read our{" "}
          <a href="#" className="underline underline-offset-2">
            privacy policy
          </a>
          .
        </p>
      </div>
    </section>
  );
}
