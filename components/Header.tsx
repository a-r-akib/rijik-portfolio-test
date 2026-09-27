"use client";

import { useState, useEffect } from "react";
import {
  Search,
  ShoppingBag,
  ArrowUpRight,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AgronNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = ["Home", "Companies", "About", "News", "FAQ"];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const vhThreshold = window.innerHeight * 0.5; // 50vh

      // Set scrolled state
      setScrolled(currentScrollY > 50);

      // Scroll Down logic: Hide navbar when past 50vh and scrolling down
      if (currentScrollY > vhThreshold && currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        // Scroll Up logic: Reappear immediately on scrolling up
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 w-full z-50 select-none p-3 sm:p-5 transition-all duration-500 ease-in-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      {/* FLOATING LIGHT CONTAINER */}
      <div
        className={`mx-auto max-w-7xl transition-all duration-500 rounded-full border py-2 px-4 sm:px-6 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-slate-200/90 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.12)]"
            : "bg-white/50 backdrop-blur-lg border-slate-200/70 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.06)]"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* BRAND LOGO WITH LIGHT ACCENT */}
          <Link href="#" className="flex items-center gap-3 group relative">
            <div className="relative flex items-center justify-center size-11 rounded-full bg-slate-100 border border-slate-200 group-hover:border-rose-500 transition-colors duration-300 overflow-hidden shadow-inner">
              <Image
                src="/img/logo.png"
                alt="RIJIK Logo"
                height={28}
                width={28}
                className="size-7 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* FLOATING MAGNETIC NAVIGATION */}
          <nav className="hidden xl:block relative">
            <ul className="flex items-center gap-1 bg-slate-100/80 border border-slate-300/80 p-1 rounded-full shadow-inner">
              {navItems.map((item, index) => (
                <li
                  key={item}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative px-4 py-2 text-[16px] font-semibold text-slate-700 cursor-pointer"
                >
                  {/* Soft Rose Hover Pill Background */}
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-rose-100/80 rounded-full border border-rose-200/80 transition-all duration-300" />
                  )}

                  <button className="relative z-10 flex items-center gap-1.5 group hover:text-rose-600 transition-colors duration-200">
                    <span>{item}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-rose-600 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* ACTION HUB */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Primary Glowing CTA Button */}
            <button className="hidden sm:flex group relative overflow-hidden bg-gradient-to-r from-rose-500 via-rose-600 to-rose-500 bg-[length:200%_auto] text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-md shadow-rose-500/20 hover:shadow-lg hover:shadow-rose-500/35 active:scale-95 transition-all duration-300 hover:bg-right items-center gap-2">
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="xl:hidden p-2.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 hover:text-rose-600 hover:border-rose-300 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-rose-600" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE EXPANDABLE SHEET */}
      {isMobileMenuOpen && (
        <div className="xl:hidden mt-3 mx-auto max-w-7xl bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-3xl p-6 shadow-2xl shadow-slate-900/10 space-y-6">
          <div className="flex items-center bg-slate-100 border border-slate-200 rounded-2xl px-4 py-3 focus-within:border-rose-500 transition-colors">
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
            />
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
          </div>

          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm text-slate-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                >
                  <span>{item}</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium px-2">
              <ShoppingBag className="w-5 h-5 text-rose-500" />
              <span>Cart (0)</span>
            </div>

            <button className="flex-1 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold text-xs px-5 py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-rose-500/25 active:scale-95 transition-all">
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}