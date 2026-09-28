'use client'

import React, { useState } from 'react';
import { 
  MapPin, Mail, Phone, ArrowRight, ArrowLeft, Menu, X, 
  ChevronRight, Layers, Compass, Building, Check, Star, 
  Facebook, Twitter, Instagram, Globe, Award, Shield, Cpu
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState('ALL PROJECTS');
  const [activeWorkStage, setActiveWorkStage] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [serviceSlide, setServiceSlide] = useState(0);

  const projects = [
    { title: "Pavilion From Eucalyptus Wood", category: "ARCHITECTURE", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
    { title: "Apartment Block In Mexico", category: "RESIDENTIAL", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" },
    { title: "Modern Villa Interior", category: "INTERIOR", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" }
  ];

  const workStages = [
    {
      num: "Step 1.",
      title: "Strategic Definition",
      desc: "It all begins with an idea. Maybe you want to extend your home? Maybe you are dreaming of a new home? We love meeting our clients, and understanding your briefs, our professional skills allow you to confidently appeal as your peer."
    },
    {
      num: "Step 2.",
      title: "Preparation and Briefing",
      desc: "Developing precise guidelines, analyzing structural constraints, and establishing a robust project roadmap to ensure seamless execution."
    },
    {
      num: "Step 3.",
      title: "Concept Design",
      desc: "Tortor posuere ac ut consequat. Tellus elemsi entuml sagittis vitae et duis ut diam. Odio ut sem nulla phar etra diam sit amet nisi."
    },
    {
      num: "Step 4.",
      title: "Design Development",
      desc: "Refining architectural blueprints, material selection, and obtaining preliminary regulatory approvals."
    }
  ];

  const team = [
    { name: "Gilbert Copeland", role: "CEO Maiko Architecture", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" },
    { name: "Grace Medina", role: "HR Manager", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
    { name: "Chelsea Holloway", role: "Graphic Designer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" },
    { name: "Jacqueline Barnett", role: "Customer Support", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" },
    { name: "Lowell Cunningham", role: "Architect", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" }
  ];

  const testimonials = [
    {
      text: "A very creative, thoughtful, and patient architecture firm. Professional. Great attention to details. I can't imagine better or more talented people to work with. Timely with their drawings, responsive to questions and input, a class act.",
      author: "Pastor Steve Nickodemus",
      role: "Renovate living + kitchen and kitchen"
    },
    {
      text: "Exceeded all our expectations! The innovative spatial flow and natural lighting in our new residence have transformed our daily life completely.",
      author: "Sarah Jenkins",
      role: "Residential Villa Owner"
    }
  ];

  const news = [
    {
      title: "Unknown Works Constructs The Armadillo Pavilion From Eucalyptus Wood",
      category: "ARCHITECTURE",
      date: "12 Sep '24",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Sordo Madaleno Creates 'Overgrown Ruin' Apartment Block in Mexico",
      category: "FURNITURE",
      date: "12 Sep '24",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "How To Design A Highly Functional And Stylish Home",
      category: "ARCHITECTURE",
      date: "12 Sep '24",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-slate-100 font-sans selection:bg-white selection:text-black">
      
      {/* Top Header Contact Bar */}
      <div className="bg-[#0b0b0b] border-b border-white/10 text-xs py-2.5 px-4 lg:px-12 text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-6">
            <a href="tel:+81203604027" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>+8120-360-4027</span>
            </a>
            <span className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-white" />
              <span>Maikoarchitecture@gmail.com</span>
            </span>
            <span className="hidden md:flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-white" />
              <span>206 Mail Parking Nuages, 14529 Levallois-Perret, France</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="cursor-pointer hover:text-white font-bold">EN</span>
              <span>/</span>
              <a href="#fb" className="hover:text-white">Fb</a>
              <a href="#ins" className="hover:text-white">Ins</a>
              <a href="#sky" className="hover:text-white">Sky</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-[#111111]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex items-center justify-between h-20">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white text-black font-bold flex items-center justify-center rounded">
              M
            </div>
            <div>
              <span className="font-bold tracking-wider text-white text-base block">maiko.archi</span>
              <span className="text-[10px] text-slate-400 tracking-widest block uppercase">Precision Plans Architects</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 font-medium text-xs tracking-widest uppercase text-slate-300">
            <a href="#home" className="text-white font-semibold hover:text-white transition-colors">Home</a>
            <a href="#studio" className="hover:text-white transition-colors">The Studio</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#works" className="hover:text-white transition-colors">Works</a>
            <a href="#pages" className="hover:text-white transition-colors">Pages</a>
            <a href="#blog" className="hover:text-white transition-colors">Blog</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
          </nav>

          <div className="hidden lg:block">
            <a href="#consulting" className="inline-flex items-center gap-3 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-slate-200 transition-all text-xs tracking-wider uppercase">
              <span>Get Architecture Consulting</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white">
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#181818] border-b border-white/10 px-6 py-6 space-y-4">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block text-white font-medium">Home</a>
            <a href="#studio" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white">The Studio</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white">Services</a>
            <a href="#works" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white">Works</a>
            <a href="#pages" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white">Pages</a>
            <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white">Blog</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white">Contact Us</a>
            <div className="pt-2">
              <a href="#consulting" onClick={() => setMobileMenuOpen(false)} className="block text-center bg-white text-black font-semibold py-3 rounded-full text-xs uppercase tracking-wider">
                Get Architecture Consulting
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-28 px-4 lg:px-12 bg-[#111111] overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tight leading-none">
            Designing Beyond Boundaries.
          </h1>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#works" className="inline-flex items-center gap-3 bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-slate-200 transition-all text-xs tracking-wider uppercase">
              <span>Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <span className="text-slate-400 text-sm max-w-xs text-left">
              It is not the beauty of a building you should look at; its the construction of the foundation that will stand the test of time.
            </span>
          </div>
        </div>

        {/* Hero Banner Image */}
        <div className="max-w-7xl mx-auto mt-16 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80" 
            alt="Designing Beyond Boundaries" 
            className="w-full h-[450px] sm:h-[600px] object-cover"
          />
        </div>
      </section>

      {/* 3-Box Overview (Clients, Mission, Vision) */}
      <section className="bg-[#181818] border-y border-white/10 py-12 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="px-4">
            <h3 className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-2">· Our Clients</h3>
            <p className="text-slate-300 text-sm leading-relaxed">Drive our inspiration and resonating creativity. Our clear intention for every client is to create premium quality iconic homes.</p>
          </div>
          <div className="px-4 pt-6 md:pt-0">
            <h3 className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-2">· Our Mission</h3>
            <p className="text-slate-300 text-sm leading-relaxed">Every aspect of our journey together is to ensure that we interpret your vision and understand in detail your functional.</p>
          </div>
          <div className="px-4 pt-6 md:pt-0">
            <h3 className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-2">· Our Vision</h3>
            <p className="text-slate-300 text-sm leading-relaxed">Buildings and spaces that inspire creativity, stimulate social interaction and are in complete sustainable harmony with their environment.</p>
          </div>
        </div>
      </section>

      {/* About Studios Section */}
      <section id="studio" className="py-24 px-4 lg:px-12 bg-[#111111]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 relative">
            <div className="w-28 h-28 rounded-full bg-white text-black font-black flex flex-col items-center justify-center text-center shadow-2xl absolute -top-12 -left-6 z-10 border-4 border-[#111111]">
              <span className="text-[10px] tracking-widest uppercase">Since</span>
              <span className="text-2xl">1998</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black tracking-tight">About Studios.</h2>
            <h3 className="text-2xl font-bold text-white">
              Maiko Architecture <br />Crafting Exquisite <br />Designs, Building <br />Perfection.
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Maiko Architecture is a multidisciplinary and multi award-winning design firm led by Principal Architects Krupa Zubin and Zubin Zainuddin. Maiko Architects is considered to be among the leading architectural and Interior Design Firms of France.
            </p>
            <p className="text-slate-500 text-xs leading-relaxed">
              A team of 80 plus architects and designers strive constantly to create projects that stand out because of the distinct approach towards design, detail and the latest technology. Intensive Research is critical for the team.
            </p>

            <div className="pt-4">
              <a href="#about" className="inline-flex items-center gap-3 bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-slate-200 transition-all text-xs uppercase tracking-widest">
                <span>See More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-3 gap-4">
            <div className="rounded-2xl overflow-hidden h-[400px]">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80" alt="Studio work 1" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden h-[400px] mt-8">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80" alt="Studio work 2" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden h-[400px]">
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80" alt="Studio work 3" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* Architectural Services Carousel / Grid */}
      <section id="services" className="py-24 px-4 lg:px-12 bg-[#161616] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase font-mono tracking-widest text-slate-400">· Architectural Services</span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight mt-2">Shaping Spaces, Creating Experiences</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto mt-4">At Maiko, we provide a range of professional services that elevate your project – from the initial concept through to the final elements of construction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-[#1f1f1f] p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-white/40 transition-all group">
              <div>
                <Building className="w-10 h-10 text-white mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-4">Architectural Design</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Architectural design is the art and science of enhancing the interiors of a space to create a more aesthetically pleasing and functional environment. Interior designers...
                </p>
              </div>
              <a href="#find" className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-white hover:underline">
                <span>Find Out More</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-[#1f1f1f] p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-white/40 transition-all group">
              <div>
                <Compass className="w-10 h-10 text-white mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-4">Interior Design</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Interior design is the art and science of enhancing the interiors of a space to create a more aesthetically pleasing and functional environment. Interior designers...
                </p>
              </div>
              <a href="#find" className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-white hover:underline">
                <span>Find Out More</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-[#1f1f1f] p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-white/40 transition-all group">
              <div>
                <Layers className="w-10 h-10 text-white mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-4">Residential Renovation</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Architectural design is the art and science of enhancing the interiors of a space to create a more aesthetically pleasing and functional environment. Interior designers...
                </p>
              </div>
              <a href="#find" className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-white hover:underline">
                <span>Find Out More</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Stats & Why Choose Us Bar */}
      <section className="py-24 px-4 lg:px-12 bg-[#111111]">
        <div className="max-w-7xl mx-auto space-y-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold">We're a Small Team, But We Stand Out from the Crowd.</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our commitment is to develop a long-lasting relationship with all of our clients, by providing a full set of robust drawings.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 gap-8 text-center sm:text-left">
              <div>
                <div className="text-5xl font-black text-white mb-1">15<span className="text-slate-500">+</span></div>
                <div className="text-xs text-slate-400 uppercase tracking-widest">Award For Excellent Architectural</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white mb-1">2,578<span className="text-slate-500">+</span></div>
                <div className="text-xs text-slate-400 uppercase tracking-widest">Customers Work And Are Satisfied</div>
              </div>
            </div>
          </div>

          {/* 4 Feature Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-white/10">
            <div className="bg-[#181818] p-6 rounded-2xl border border-white/10">
              <Award className="w-8 h-8 text-white mb-4" />
              <h4 className="font-bold text-lg mb-2">Creative Ideas</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Team-driven, branded boutiques and inclusive community spaces, everything we do is inspired by you.</p>
            </div>

            <div className="bg-[#181818] p-6 rounded-2xl border border-white/10">
              <Shield className="w-8 h-8 text-white mb-4" />
              <h4 className="font-bold text-lg mb-2">Uniqueness</h4>
              <p className="text-xs text-slate-400 leading-relaxed">You will receive a custom, one-site-does-not-fit-all design that is entirely bespoke and unique for you.</p>
            </div>

            <div className="bg-[#181818] p-6 rounded-2xl border border-white/10">
              <Cpu className="w-8 h-8 text-white mb-4" />
              <h4 className="font-bold text-lg mb-2">High Efficiency</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Your project will be massively effective. There will be minimal revisions along the way and it will be delivered on time.</p>
            </div>

            <div className="bg-[#181818] p-6 rounded-2xl border border-white/10">
              <Check className="w-8 h-8 text-white mb-4" />
              <h4 className="font-bold text-lg mb-2">Best Solution</h4>
              <p className="text-xs text-slate-400 leading-relaxed">You will receive all the design solutions you need along with the finest planning advice from a strategically minded team.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Our Projects Section */}
      <section id="works" className="py-24 px-4 lg:px-12 bg-[#161616] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-4">Our Projects</h2>
              <p className="text-slate-400 text-sm max-w-xl">Projects Featured by Maiko.Architects below. We've built a community based on sharing knowledge because the best ideas flow between disciplines. Donec libero ante, vehicula vel enim ac, volutpat vehicula lectus.</p>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase font-bold tracking-widest">
              {['ALL PROJECTS', 'ARCHITECTURE', 'BUILD', 'CIVIL', 'DESIGN', 'INTERIOR', 'RESIDENCE'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveProjectTab(tab)}
                  className={`px-4 py-2 rounded-lg transition-all ${activeProjectTab === tab ? 'bg-white text-black' : 'bg-[#222] text-slate-400 hover:text-white'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-[#1f1f1f] rounded-3xl overflow-hidden border border-white/10 group">
                <div className="h-80 overflow-hidden">
                  <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">{proj.category}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{proj.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Work Stages */}
      <section className="py-24 px-4 lg:px-12 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">Architecture Work Stages.</h2>
            <p className="text-slate-400 text-xs">We work according to principles and are always careful in every step before implementing an architectural project.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#181818] p-8 sm:p-12 rounded-3xl border border-white/10">
            <div className="lg:col-span-4 space-y-4">
              {workStages.map((stage, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveWorkStage(idx)}
                  className={`w-full text-left p-4 rounded-xl font-bold uppercase tracking-wider text-xs transition-all flex items-center justify-between ${activeWorkStage === idx ? 'bg-white text-black' : 'bg-[#222] text-slate-400 hover:text-white'}`}
                >
                  <span>{stage.num} {stage.title}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 space-y-6 pl-0 lg:pl-8">
              <span className="text-xs uppercase font-mono tracking-widest text-slate-400">· {workStages[activeWorkStage].num}</span>
              <h3 className="text-3xl font-bold text-white">{workStages[activeWorkStage].title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{workStages[activeWorkStage].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-24 px-4 lg:px-12 bg-[#161616] border-y border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight">Together.</h2>
            <p className="text-slate-400 text-sm">Are you looking for an architectural company with full design and construction services for...</p>
            <div className="space-y-3 text-xs uppercase font-bold tracking-wider text-slate-300">
              <div className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-white" /> Download Our Brochure</div>
              <div className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-white" /> Ask Us Your Questions our Architects</div>
              <div className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-white" /> Career Together</div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#1f1f1f] p-8 sm:p-12 rounded-3xl border border-white/10 space-y-6">
            <h3 className="text-2xl font-bold text-white">Pricing Table.</h3>
            <p className="text-xs text-slate-400">Renovate living + kitchen and kitchen</p>
            <ul className="space-y-3 text-sm text-slate-300 pt-4 border-t border-white/10">
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white flex-shrink-0" /> Price Transparency</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white flex-shrink-0" /> Save Design Costs by more than 20%</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white flex-shrink-0" /> 24/7 Consulting Service</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white flex-shrink-0" /> Unlimited Design Changes</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white flex-shrink-0" /> Comprehensive package for all stages</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white flex-shrink-0" /> Worked by The Best Architectural Experts</li>
            </ul>
            <a href="#consulting" className="inline-block bg-white text-black font-bold px-8 py-4 rounded-full text-xs uppercase tracking-wider hover:bg-slate-200 transition-all text-center w-full">
              Let's build, contact us
            </a>
          </div>
        </div>
      </section>

      {/* The Architect Team Grid */}
      <section className="py-24 px-4 lg:px-12 bg-[#111111]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl sm:text-8xl font-black tracking-tight text-white mb-4">The Architect.</h2>
          <div className="w-24 h-[1px] bg-white/20 mx-auto"></div>
        </div>

        {/* Team Photo Banner */}
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden mb-16 border border-white/10">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80" alt="The Architects Team" className="w-full h-80 object-cover" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {team.map((member, idx) => (
            <div key={idx} className="space-y-3">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-white/20">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-white text-base">{member.name}</h4>
              <p className="text-xs text-slate-400 uppercase tracking-widest">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-24 px-4 lg:px-12 bg-[#181818] border-y border-white/10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="w-16 h-16 rounded-full mx-auto overflow-hidden border-2 border-white/30">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" alt="Testimonial Author" className="w-full h-full object-cover" />
          </div>

          <p className="text-xl sm:text-2xl font-medium text-slate-200 italic leading-relaxed">
            "{testimonials[activeTestimonial].text}"
          </p>

          <div>
            <h4 className="font-bold text-white text-base">{testimonials[activeTestimonial].author}</h4>
            <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">{testimonials[activeTestimonial].role}</p>
          </div>

          <div className="flex justify-center items-center gap-6 pt-4">
            <button 
              onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-slate-400">1 / 3</span>
            <button 
              onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Latest News Blog Grid */}
      <section id="blog" className="py-24 px-4 lg:px-12 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-4">The Latest News</h2>
            <p className="text-slate-400 text-xs">We always update the latest news about architecture trends and news around the world, click subscribe and follow details news from us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, idx) => (
              <div key={idx} className="bg-[#181818] rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group">
                <div>
                  <div className="h-64 overflow-hidden relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-white uppercase">
                      {item.date}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{item.category}</span>
                    <h3 className="font-bold text-lg text-white mt-2 group-hover:underline">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Contact & Partners */}
      <footer id="contact" className="bg-[#0b0b0b] text-white pt-24 pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-20 border-b border-white/10 gap-8">
            <div>
              <h3 className="text-3xl sm:text-5xl font-black mb-2">Let's Talk About Your Project.</h3>
              <p className="text-slate-400 text-sm">Let's Make Something Beautiful Together!</p>
            </div>
            <a href="#consulting" className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
              <ArrowRight className="w-8 h-8 -rotate-45" />
            </a>
          </div>

          {/* Partners Bar */}
          <div className="py-12 border-b border-white/10 flex flex-wrap items-center justify-between gap-8 opacity-60">
            <span className="font-serif font-bold text-lg">A O</span>
            <span className="font-bold tracking-widest text-sm">MGV DECOR</span>
            <span className="font-mono text-sm">Level Architect</span>
            <span className="font-sans font-black text-sm">ARCHITECTURE</span>
            <span className="font-serif text-sm">Thought Machine</span>
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-white/10 text-sm">
            <div className="space-y-4">
              <h4 className="font-bold uppercase tracking-wider text-xs text-slate-400">Address Studio</h4>
              <p className="text-slate-300 font-medium">206 Mail Parking Nuages, 14529 Levallois-Perret, France.</p>
              <p className="text-slate-300">Phone & Mail Support 24/7<br /><strong className="text-white">+8120-360-4027</strong><br /><strong className="text-white">Maikoarchitecture@gmail.com</strong></p>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-wider text-xs text-slate-400 mb-6">Our Projects</h4>
              <ul className="space-y-3 text-slate-400 font-medium">
                <li><a href="#all" className="hover:text-white transition-colors">All Projects</a></li>
                <li><a href="#houses" className="hover:text-white transition-colors">Houses</a></li>
                <li><a href="#multi" className="hover:text-white transition-colors">Multi-Residential</a></li>
                <li><a href="#edu" className="hover:text-white transition-colors">Education</a></li>
                <li><a href="#comm" className="hover:text-white transition-colors">Commercial/Public</a></li>
                <li><a href="#interior" className="hover:text-white transition-colors">Interior</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-wider text-xs text-slate-400 mb-6">Links</h4>
              <ul className="space-y-3 text-slate-400 font-medium">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#practice" className="hover:text-white transition-colors">Our Practice</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#recognition" className="hover:text-white transition-colors">Our Recognition</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Our Projects</a></li>
                <li><a href="#know" className="hover:text-white transition-colors">Our Know-How</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-white text-black font-bold flex items-center justify-center rounded text-sm">
                  M
                </div>
                <div>
                  <span className="font-bold tracking-wider text-white text-sm block">maiko.archi</span>
                  <span className="text-[9px] text-slate-400 tracking-widest block uppercase">Precision Plans Architects</span>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Providing state-of-the-art architectural solutions, innovative planning, and structural precision worldwide.
              </p>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>© Copyright 2026 Maiko. All Rights Reserved.</div>
            <div className="flex items-center gap-6">
              <a href="#terms" className="hover:text-white transition-colors">Terms of use</a>
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Environmental Policy</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}