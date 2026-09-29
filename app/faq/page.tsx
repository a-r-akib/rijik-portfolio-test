"use client";

import HomeFaq from "@/components/Home/HomeFaq";

export default function FAQ() {
  return (
    <>
      <section className="relative bg-slate-900 text-white overflow-hidden pt-40 pb-24">
        <div
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1600')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50 z-1"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="lg:col-span-8">
              <span className="text-xs sm:text-sm font-semibold text-rose-500 uppercase tracking-widest block mb-2">
                Frequently Asked Questions
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-2 leading-tight">
                Got <span className="text-rose-500">Questions?</span> We’re Here
                To Help
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                Expert Guidance For Your Journey Between Bangladesh & Japan.
              </p>
            </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src="/img/student.jpg"
                  alt="Customer support and guidance"
                  className="w-full h-[380px] object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md text-slate-900 p-6 rounded-xl shadow-xl">
                  <ul className="space-y-2 text-xs sm:text-sm font-medium">
                    <li className="flex items-center gap-2">
                      <span className="text-rose-600 font-bold">✓</span> Study &
                      work visa application support
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-rose-600 font-bold">✓</span>{" "}
                      Japanese vehicle import & registration info
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-rose-600 font-bold">✓</span> 24/7
                      client support across Dhaka & Tokyo
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-rose-600 font-bold">✓</span> Secure
                      remittance & student accommodation guidance
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="/img/student4.jpg"
                  alt="Team consultation"
                  className="w-full h-[380px] object-cover"
                />
              </div>
              <div className="space-y-6 bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                <div>
                  <h3 className="font-serif text-4xl sm:text-5xl font-bold text-white">
                    5k<span className="text-rose-500">+</span>
                  </h3>
                  <p className="text-slate-400 text-xs uppercase tracking-wider mt-1">
                    Students & Clients Guided Successfully
                  </p>
                </div>
                <hr className="border-slate-800" />
                <div>
                  <h3 className="font-serif text-4xl sm:text-5xl font-bold text-white">
                    8<span className="text-rose-500">+</span>
                  </h3>
                  <p className="text-slate-400 text-xs uppercase tracking-wider mt-1">
                    Specialized Business Ventures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeFaq />
    </>
  );
}
