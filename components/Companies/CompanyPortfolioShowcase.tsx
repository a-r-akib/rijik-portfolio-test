import { ArrowRight } from "lucide-react";
import WebPageWrapper from "../Wrapper/WebPageWrapper";

export default function CompanyPortfolioShowcase() {
  return (
    <section className="pb-24 bg-white text-slate-900">
      <WebPageWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Stats & Description */}
          <div className="lg:col-span-6">
            <span className="text-xs sm:text-sm font-semibold text-rose-600 uppercase tracking-widest block mb-2">
              Global Impact & Ventures
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-2 leading-tight text-slate-900">
              Outstanding.
            </h2>

            <div className="text-4xl md:text-9xl font-extrabold mb-2 leading-tight text-slate-900">
              5000<span className="text-rose-600">+</span>
            </div>
            <div className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-2">
              Students & Clients Served Across Borders
            </div>

            <p className="text-slate-600 leading-relaxed max-w-lg">
              Explore our multi-sector operations connecting Bangladesh and
              Japan—from successful student visa placements via JEJC and vehicle
              imports to authentic Tokyo cuisine and charity.
            </p>

            <div className="pt-4">
              <a
                href="#works"
                className="inline-flex items-center gap-3 bg-rose-600 text-white font-bold px-8 py-4 rounded-full hover:bg-rose-500 transition-all text-xs uppercase tracking-widest shadow-lg shadow-rose-500/25 cursor-pointer"
              >
                <span>Explore Our Businesses</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Featured Image */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl h-[550px] relative group bg-slate-50">
              <img
                src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80"
                alt="Rijik International Global Operations"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </WebPageWrapper>
    </section>
  );
}