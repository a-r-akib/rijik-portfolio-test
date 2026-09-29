import React from "react";
import WebPageWrapper from "../Wrapper/WebPageWrapper";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function CompanyHero() {
  return (
    <section className="relative pt-40 pb-24 bg-slate-900 text-white overflow-hidden">
      <WebPageWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Collage with Rotating Badge */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 relative">
              {/* Image 1: Main Tall Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[380px] border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80"
                  alt="Student Training & Education"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>

              {/* Right Stack: Two smaller images */}
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl h-[180px] border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80"
                    alt="Automotive Trading"
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl h-[180px] border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
                    alt="Tokyo Halal Cuisine & Culture"
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  />
                </div>
              </div>

              {/* Decorative Rotating Circular Stamp / Badge */}
              <div className="absolute -bottom-8 -right-6 sm:right-4 w-36 h-36 bg-gradient-to-tr from-slate-900 to-slate-800 rounded-full p-2 border border-rose-500/30 shadow-2xl hidden sm:flex items-center justify-center animate-spin-slow">
                <div className="relative w-full h-full flex items-center justify-center text-center">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                  >
                    <path
                      id="textPath"
                      fill="transparent"
                      d="M 15, 50 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    />
                    <text className="text-[9px] uppercase font-mono tracking-widest fill-rose-400 font-bold">
                      <textPath href="#textPath" startOffset="0%">
                        · Rijik International · Dhaka & Tokyo
                      </textPath>
                    </text>
                  </svg>
                  <div className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg">
                    <span className="font-black text-xs">RI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-6">

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Rijik International bridges nations through{" "}
              <span className="text-rose-600 ">
                excellence & trust
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed">
              At Rijik International Co. Ltd., we go beyond business. We connect
              Bangladesh and Japan by empowering students with study & work
              visas via JEJC, supplying premium reconditioned vehicles, offering
              100% Halal cuisine in Tokyo, and driving social welfare through
              Rijik Foundation.
            </p>

            {/* Specialty / USP Checkmarks Grid */}
            <div className="pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4">
                Our Core Specialties:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  <span>Expert Visa & Language Support</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  <span>Trusted Vehicle Imports</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  <span>100% Halal Tokyo Dining</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  <span>Dedicated Humanitarian Aid</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WebPageWrapper>
    </section>
  );
}
