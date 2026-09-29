import Image from "next/image";
import {
  CheckCircle2,
  ArrowUpRight,
  Play,
  Users,
  Briefcase,
  SmilePlus,
  Globe2,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-slate-900 text-slate-100 pt-40 pb-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Image Collage & Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Photo Collage with Dotted Border & Rotating Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
              {/* Primary large image with orange dotted border frame */}
              <div className="relative p-3 border-2 border-dashed border-red-600 rounded-2xl w-full sm:w-[320px] h-[420px] shrink-0">
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/img/student.jpg"
                    alt="Global education and professionals"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Secondary overlapping image */}
              <div className="relative w-full sm:w-[240px] h-[260px] sm:-ml-16 sm:mt-32 z-25 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-900">
                <Image
                  src="/company/img/gb.jpeg"
                  alt="Business meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Rotating Circular Badge Asset */}
            <div className="absolute -bottom-6 left-6 sm:left-auto sm:-right-8 z-30 w-36 h-36 bg-slate-900 rounded-full p-2 shadow-2xl hidden sm:flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <svg
                  className="w-full h-full absolute animate-spin"
                  viewBox="0 0 100 100"
                  style={{ animationDuration: "15s" }}
                >
                  <path
                    id="curve"
                    fill="transparent"
                    d="M 15, 50 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  />
                  <text className="text-[10px] uppercase font-bold tracking-[4px] fill-rose-600">
                    <textPath href="#curve" startOffset="0%">
                      • RIJIK • INTERNATIONAL
                    </textPath>
                  </text>
                </svg>
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-white shadow-lg">
                  <Image src="/logo/logo.png" alt=" " height={40} width={40} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Connecting <span className="text-rose-600">People</span>,
              Empowering Futures.
            </h2>

            {/* Description */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We successfully connect individuals and businesses with
              cross-border opportunities, providing long-term guidance, reliable
              employment pathways, and seamless educational and financial
              services.
            </p>

            {/* Middle Grid: Video preview card & Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 items-center">
              {/* Video Thumbnail Box */}
              <div className="relative h-40 rounded-xl overflow-hidden shadow-lg group cursor-pointer border border-slate-800">
                <Image
                  src="/img/student2.jpg"
                  alt="Platform overview video"
                  fill
                  className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-rose-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white translate-x-0.5" />
                  </div>
                </div>
              </div>

              {/* Checklist items */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>Certified Global Consultants</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>Trusted Visa & Job Experts</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>100% Success-Driven Results</span>
                </div>
              </div>
            </div>

            {/* Footer Row inside Right Side: Founder Profile & Learn More Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-slate-800/80">
              {/* Founder / Leader Profile */}
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#F43F5E]">
                  <Image
                    src="/team/1.jpg"
                    alt="Founder"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm tracking-wide">
                    Nagamatsu Faruk
                  </h4>
                  <p className="text-xs text-slate-400 tracking-wider uppercase">
                    Chairman RIJIK INT.
                  </p>
                </div>
              </div>

              <a
                href="#learn-more"
                className="inline-flex items-center gap-2 bg-linear-to-r from-red-600 via-rose-500 to-red-600 text-white font-bold text-sm px-6 py-3.5 rounded-lg transition-all duration-300 shadow-lg shadow-[#F43F5E]/20"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Stats Counter Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t border-slate-800/80">
          {/* Stat 1 */}
          <div className="flex items-center justify-center gap-4">
            <div className="text-rose-600">
              <Users className="w-10 h-10 stroke-[1.5]" />
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-black text-white">
                5K<span className="text-rose-600">+</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                Students Supported
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center justify-center gap-4">
            <div className="text-rose-600">
              <Briefcase className="w-10 h-10 stroke-[1.5]" />
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-black text-white">
                1500<span className="text-rose-600">+</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                Job Placements
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center justify-center gap-4">
            <div className="text-rose-600">
              <Globe2 className="w-10 h-10 stroke-[1.5]" />
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-black text-white">20<span className="text-rose-600">+</span></h3>
              <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                Countries Served
              </p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center justify-center gap-4">
            <div className="text-rose-600">
              <SmilePlus className="w-10 h-10 stroke-[1.5]" />
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-black text-white">
                98<span className="text-rose-600">%</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                Satisfaction Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
