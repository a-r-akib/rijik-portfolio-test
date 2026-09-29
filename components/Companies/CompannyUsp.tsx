"use client";

import WebPageWrapper from "../Wrapper/WebPageWrapper";

export default function CompanyUSP() {
  return (
    <section className="bg-[#fafafa] py-10">
      <WebPageWrapper>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Metric 1 */}
        <div className="px-4">
          <div className="text-5xl sm:text-6xl font-black text-slate-900 mb-2">
            99<span className="text-rose-500 text-3xl">%</span>
          </div>
          <div className="text-slate-700 text-sm font-medium leading-relaxed">
            Students & Clients Satisfied With Our Visa, Study, & Trade Services
          </div>
        </div>

        {/* Metric 2 */}
        <div className="px-4 pt-6 md:pt-0">
          <div className="text-5xl sm:text-6xl font-black text-slate-900 mb-2">
            08
          </div>
          <div className="text-slate-700 text-sm font-medium leading-relaxed">
            Specialized Business Ventures Across Education, Trade & Welfare
          </div>
        </div>

        {/* Metric 3 */}
        <div className="px-4 pt-6 md:pt-0">
          <div className="text-5xl sm:text-6xl font-black text-slate-900 mb-2">
            2<span className="text-rose-500 text-3xl">x</span>
          </div>
          <div className="text-slate-700 text-sm font-medium leading-relaxed">
            Global Headquarters Connecting Bangladesh & Tokyo, Japan
          </div>
        </div>

      </div>
      </WebPageWrapper>
    </section>
  );
}