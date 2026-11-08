import {
  Layers,
  Compass,
  Globe,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import WebPageWrapper from "../Wrapper/WebPageWrapper";

export default function CompanyPractices() {
  return (
    <section className="pb-24 bg-white text-slate-900">
      <WebPageWrapper>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Our Practices.
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md leading-relaxed">
            We operate with unwavering dedication, transparency, and
            structure—ensuring our students, clients, and partners receive
            trustworthy guidance across borders.
          </p>
        </div>

        {/* Bento Grid Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Practice 1: Featured Large Bento Card */}
          <div className="lg:col-span-7 bg-linear-to-br from-slate-50 to-slate-100 p-8 sm:p-10 rounded-3xl border border-slate-200 hover:border-rose-500/50 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden shadow-xl shadow-slate-100">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex justify-between items-start mb-8 relative z-10">
              <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-[10px] font-mono uppercase tracking-widest border border-rose-200 font-semibold">
                Practice 01 · Primary Focus
              </span>
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-rose-600 group-hover:border-rose-500 transition-colors shadow-sm">
                <Layers className="w-6 h-6 text-rose-600 group-hover:text-white transition-colors" />
              </div>
            </div>

            <div className="relative z-10 space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-rose-600 transition-colors">
                Transparent Consultation
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Clear and honest advising for Japanese student visas, work
                placement programs, and vehicle trade specifications from day
                one. We believe clarity builds ultimate trust.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-200 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors font-semibold">
              <span>Learn more about our standards</span>
              <ArrowUpRight className="w-4 h-4 text-rose-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Right Column Stack */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {/* Practice 2 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-rose-500/40 transition-all duration-500 flex flex-col justify-between group shadow-lg shadow-slate-100">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-mono tracking-widest text-rose-600 font-bold uppercase">
                  · Practice 02
                </span>
                <Compass className="w-8 h-8 text-rose-600 group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-rose-600 transition-colors">
                  Rigorous Quality Standards
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Inspecting every reconditioned vehicle imported and
                  maintaining 100% Halal authenticity across our Tokyo dining
                  and grocery outlets.
                </p>
              </div>
            </div>

            {/* Practice 3 */}
            <div className="bg-slate-50/90 backdrop-blur-md p-8 rounded-3xl border border-slate-200 hover:border-rose-500/50 transition-all duration-500 flex flex-col justify-between group shadow-lg shadow-slate-100">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-mono tracking-widest text-rose-600 font-bold uppercase">
                  · Practice 03
                </span>
                <div className="flex -space-x-2">
                  <Globe className="w-7 h-7 text-slate-400" />
                  <ShieldCheck className="w-8 h-8 text-rose-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-rose-600 transition-colors">
                  End-to-End Support
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Bridging Dhaka and Tokyo with continuous student care, secure
                  remittance partnerships, and community welfare initiatives via
                  Rijik Foundation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </WebPageWrapper>
    </section>
  );
}