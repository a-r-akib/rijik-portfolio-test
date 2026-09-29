"use client";

import { Layers, Compass, Globe, ShieldCheck, ArrowUpRight } from "lucide-react";
import WebPageWrapper from "../Wrapper/WebPageWrapper";

export default function CompanyPractices() {
  return (
    <section className="pb-24 bg-slate-900 text-white">
        <WebPageWrapper>
{/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Our Practices.
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            We operate with unwavering dedication, transparency, and structure—ensuring our students, clients, and partners receive trustworthy guidance across borders.
          </p>
        </div>

        {/* Bento Grid Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Practice 1: Featured Large Bento Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-10 rounded-3xl border border-slate-800 hover:border-rose-500/50 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex justify-between items-start mb-8 relative z-10">
              <span className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-[10px] font-mono uppercase tracking-widest border border-rose-500/20">
                Practice 01 · Primary Focus
              </span>
              <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-rose-600 group-hover:border-rose-500 transition-colors">
                <Layers className="w-6 h-6 text-rose-500 group-hover:text-white transition-colors" />
              </div>
            </div>

            <div className="relative z-10 space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-rose-400 transition-colors">
                Transparent Consultation
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
                Clear and honest advising for Japanese student visas, work placement programs, and vehicle trade specifications from day one. We believe clarity builds ultimate trust.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-800 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
              <span>Learn more about our standards</span>
              <ArrowUpRight className="w-4 h-4 text-rose-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Right Column Stack */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            
            {/* Practice 2 */}
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-rose-500/40 transition-all duration-500 flex flex-col justify-between group shadow-lg">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-mono tracking-widest text-rose-500 font-bold uppercase">
                  · Practice 02
                </span>
                <Compass className="w-8 h-8 text-rose-500 group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                  Rigorous Quality Standards
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Inspecting every reconditioned vehicle imported and maintaining 100% Halal authenticity across our Tokyo dining and grocery outlets.
                </p>
              </div>
            </div>

            {/* Practice 3 */}
            <div className="bg-slate-900/60 backdrop-blur-md p-8 rounded-3xl border border-slate-800 hover:border-rose-500/50 transition-all duration-500 flex flex-col justify-between group shadow-lg">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-mono tracking-widest text-rose-400 font-bold uppercase">
                  · Practice 03
                </span>
                <div className="flex -space-x-2">
                  <Globe className="w-7 h-7 text-slate-500" />
                  <ShieldCheck className="w-8 h-8 text-rose-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                  End-to-End Support
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Bridging Dhaka and Tokyo with continuous student care, secure remittance partnerships, and community welfare initiatives via Rijik Foundation.
                </p>
              </div>
            </div>

          </div>

        </div>
        </WebPageWrapper>
    </section>
  );
}