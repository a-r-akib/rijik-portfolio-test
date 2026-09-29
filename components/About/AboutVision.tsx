'use client'

import { CheckCircle2, Globe2 } from 'lucide-react';

export default function AboutVision() {
  return (
    <section className="relative bg-slate-900 py-20 px-4 md:px-12 lg:px-20 overflow-hidden text-slate-100">
      {/* Background Watermark - Global Icon (bottom left) */}
      <div className="absolute bottom-4 left-4 opacity-5 pointer-events-none z-0">
        <Globe2 className="w-96 h-96 text-rose-500" />
      </div>

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        {/* --- SECTION 1: VISION (Image Left, Content Right) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Offset Rose Border Frame with Global Platform Image */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[440px] aspect-[4/5]">
              {/* Outer Decorative Rose Border Frame */}
              <div className="absolute inset-0 border-2 border-rose-500 translate-x-4 translate-y-4 pointer-events-none rounded-2xl"></div>
              {/* Inner Image Container */}
              <div className="relative w-full h-full bg-slate-900 overflow-hidden z-10 rounded-xl">
                <img
                  src="/img/student3.jpg"
                  alt="Global Vision and Collaboration"
                  className="w-full h-full object-cover filter contrast-105 opacity-90 rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Right: Vision Text & Features */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block relative mb-1">
              <span className="text-rose-500 font-semibold tracking-wider text-xs uppercase">
                Our Vision
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold leading-tight text-white">
              Connecting People & <br />
              Empowering Global Futures
            </h2>
            <div className="space-y-4 text-sm md:text-base text-slate-300 leading-relaxed">
              <p>
                At Rijik International, our vision is to be a premier global platform dedicated to supporting individuals and businesses in their cross-border journey. We bridge opportunities across continents with integrity and dedication.
              </p>
              <p>
                We strive to build a transparent, trusted ecosystem where navigating international education, career development, and financial solutions becomes seamless and empowering.
              </p>
            </div>

            {/* Feature Checkmarks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">Global Opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">Trusted Guidance</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">Cross-Border Reach</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">Empowered Futures</span>
              </div>
            </div>

            {/* Signature & Leadership info */}
            <div className="pt-6 border-t border-slate-800 flex flex-col gap-2">
              <div className="font-['Brush_Script_MT',cursive] text-3xl text-rose-500 tracking-wide">
                Rijik Team
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-wider text-white">Rijik International</h4>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Global Platform & Services</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 2: MISSION (Content Left, Image Right) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-10">
          {/* Left: Mission Text, Features, and Button */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="inline-block relative mb-1">
              <span className="text-rose-500 font-semibold tracking-wider text-xs uppercase">
                Our Mission
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold leading-tight text-white">
              Delivering Excellence in <br />
              Education, Employment & Finance
            </h2>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Our mission is to equip clients with comprehensive cross-border solutions. Through reliable education pathways, employment support, and streamlined financial services, we ensure every journey is met with confidence and success.
            </p>

            {/* Feature Checkmarks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">Education Support</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">Employment Services</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">Financial Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">Reliable Guidance</span>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="pt-4">
              <button className="bg-linear-to-r from-red-600 via-rose-500 to-red-600 text-white text-sm font-semibold tracking-wide uppercase px-8 py-3.5 rounded-xl shadow-lg shadow-rose-600/20 transition-all duration-300 cursor-pointer hover:scale-110 scale-3d duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right: Offset Rose Border Frame with Teamwork Photo */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[440px] aspect-[4/5]">
              {/* Outer Decorative Rose Border Frame (offset left/top) */}
              <div className="absolute inset-0 border-2 border-rose-500 -translate-x-4 -translate-y-4 pointer-events-none rounded-2xl"></div>
              {/* Inner Image Container */}
              <div className="relative w-full h-full bg-slate-900 overflow-hidden z-10 rounded-xl">
                <img
                  src="/img/student.jpg"
                  alt="Our Mission in Action"
                  className="w-full h-full object-cover filter contrast-105 opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}