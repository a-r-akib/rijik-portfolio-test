"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  ArrowDown,
  Menu,
  X,
  Globe,
  Check,
  ChevronRight,
  Layers,
  Building,
  Compass,
} from "lucide-react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState(0);

  const services = [
    {
      num: "01.",
      title: "Landscape Architecture",
      desc: "Architectural design is the art and science of enhancing the interiors of a space to create a more aesthetically pleasing and functional environment. Interior designers work with both residential and commercial spaces, focusing on elements such...",
      links: [
        "Functional Kitchens",
        "Residential Space",
        "Structural Design",
        "Construction Plan",
        "Landscape Architecture",
        "Project Analysis",
      ],
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "02.",
      title: "Architectural Design",
      desc: "Architectural design is the art and science of enhancing the interiors of a space to create a more aesthetically pleasing and functional environment. Interior designers work with both residential and commercial spaces, focusing on elements such...",
      links: [
        "Construction Drawings",
        "Design Development",
        "Development Approval",
        "Residential Space",
        "Concept Design",
      ],
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "03.",
      title: "Interior Design",
      desc: "Interior design is the art and science of enhancing the interiors of a space to create a more aesthetically pleasing and functional environment. Interior designers work with both residential and commercial spaces, focusing on elements such...",
      links: [
        "Furniture Designed",
        "Furniture Consulting",
        "Interior Construction",
        "Interior Analysis",
        "Interior Concept Design",
      ],
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "04.",
      title: "Residential Renovation",
      desc: "Architectural design is the art and science of enhancing the interiors of a space to create a more aesthetically pleasing and functional environment. Interior designers work with both residential and commercial spaces, focusing on elements such...",
      links: [
        "Functional Kitchens",
        "Residential Space",
        "Structural Design",
        "Construction Plan",
        "Landscape Architecture",
        "Project Analysis",
      ],
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "05.",
      title: "Project Consultant",
      desc: "Architectural design is the art and science of enhancing the interiors of a space to create a more aesthetically pleasing and functional environment. Interior designers work with both residential and commercial spaces, focusing on elements such...",
      links: [
        "Functional Kitchens",
        "Residential Space",
        "Structural Design",
        "Construction Plan",
        "Landscape Architecture",
        "Project Analysis",
      ],
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-slate-100 font-sans selection:bg-white selection:text-black">
      {/* Hero Section */}
      <section className="relative pt-20 pb-28 px-4 lg:px-12 bg-[#111111] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Architecture Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-sm font-semibold tracking-widest uppercase text-slate-400 mb-4 flex items-center gap-2">
            <span>HOME 1</span>
            <span>/</span>
            <span className="text-white">ABOUT US</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-12">
            Architecture <br />
            Services.
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-12 border-t border-white/10">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                · Expert Solutions
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium leading-relaxed max-w-3xl">
                At Maiko Studio, we go beyond blueprints. Our architectural
                services are a symphony of creativity and precision.
              </h2>
              <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
                Whether it's designing iconic landmarks or creating serene
                residential havens, we bring your vision to life with
                unparalleled expertise. Discover how we elevate architectural
                possibilities.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="#capabilities"
                className="w-40 h-40 rounded-full border border-white/20 hover:border-white bg-black/40 backdrop-blur-md flex flex-col items-center justify-center text-center p-4 transition-all group"
              >
                <span className="text-xs uppercase font-semibold tracking-wider mb-2">
                  See Our Capabilities
                </span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-[#181818] border-y border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="px-4">
            <div className="text-5xl sm:text-6xl font-black text-white mb-2">
              98<span className="text-slate-500 text-3xl">%</span>
            </div>
            <div className="text-slate-400 text-sm font-medium">
              Customers Are Satisfied With Service Quality
            </div>
          </div>
          <div className="px-4 pt-6 md:pt-0">
            <div className="text-5xl sm:text-6xl font-black text-white mb-2">
              12
            </div>
            <div className="text-slate-400 text-sm font-medium">
              Architectural Services From Basic To Advanced
            </div>
          </div>
          <div className="px-4 pt-6 md:pt-0">
            <div className="text-5xl sm:text-6xl font-black text-white mb-2">
              24
            </div>
            <div className="text-slate-400 text-sm font-medium">
              Architectural Service Provider Worldwide
            </div>
          </div>
        </div>
      </section>

      {/* Studio Workshop Image Banner */}
      <section className="py-16 px-4 lg:px-12 bg-[#111111]">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1600&q=80"
            alt="Studio Workshop"
            className="w-full h-[450px] sm:h-[600px] object-cover"
          />
        </div>
      </section>

      {/* Expertise Services Section */}
      <section id="services" className="py-24 px-4 lg:px-12 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-4">
              Expertise Services
            </h2>
            <div className="w-24 h-[1px] bg-white/20 mx-auto"></div>
          </div>

          <div className="space-y-24">
            {services.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Details */}
                <div className="lg:col-span-6 space-y-6">
                  <span className="text-slate-500 font-mono text-lg">
                    {item.num}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-black text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
                    {item.links.map((link, i) => (
                      <a
                        key={i}
                        href={`#${link}`}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-white flex-shrink-0" />
                        <span>{link}</span>
                      </a>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a
                      href="#read"
                      className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-white hover:underline"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Image */}
                <div className="lg:col-span-6">
                  <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[400px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 lg:px-12 bg-[#161616] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-4">
              Process.
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              We always work according to a standard rule and never break that
              rule, we want to give customers the most intuitive view of the
              process of completing their projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1f1f1f] p-8 rounded-3xl border border-white/10 flex flex-col justify-between h-[320px]">
              <span className="text-xs font-mono tracking-widest text-slate-500">
                · STEP 1
              </span>
              <div>
                <Layers className="w-10 h-10 text-white mb-4" />
                <h3 className="text-xl font-bold text-white">
                  Strategic Definition
                </h3>
              </div>
            </div>

            <div className="bg-[#1f1f1f] p-8 rounded-3xl border border-white/10 flex flex-col justify-between h-[320px]">
              <span className="text-xs font-mono tracking-widest text-slate-500">
                · STEP 2
              </span>
              <div>
                <Compass className="w-10 h-10 text-white mb-4" />
                <h3 className="text-xl font-bold text-white">
                  Preparation and Briefing
                </h3>
              </div>
            </div>

            <div className="bg-black p-8 rounded-3xl border border-white/20 flex flex-col justify-between h-[320px]">
              <span className="text-xs font-mono tracking-widest text-slate-400">
                · STEP 3
              </span>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Concept Design
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Tortor posuere ac ut consequat. Tellus elemsi entuml sagittis
                  vitae et duis ut diam. Odio ut sem nulla phar etra diam sit
                  amet nisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outstanding Portfolio Section */}
      <section className="py-24 px-4 lg:px-12 bg-[#111111]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-mono tracking-widest text-slate-400">
              · Spaces, Solutions
            </span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight">
              Outstanding.
            </h2>

            <div className="text-6xl sm:text-7xl font-black text-white py-2">
              2048<span className="text-slate-500">+</span>
            </div>
            <div className="text-sm font-bold text-slate-300 uppercase tracking-wider">
              Completed Projects
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
              Explore our portfolio to gain insights into our diverse projects,
              drawing inspiration for your own architectural aspirations.
            </p>
            <p className="text-slate-500 text-xs leading-relaxed max-w-lg">
              Our mission is to Build Dreams by fostering transparent
              collaborations. Explore our services and experience the fusion of
              imagination and structural brilliance.
            </p>

            <div className="pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-slate-200 transition-all text-xs uppercase tracking-widest"
              >
                <span>Our Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[550px]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Outstanding architectural building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
