'use client'

import React, { useState } from 'react';
import { 
  Sparkles, ChevronRight, ChevronLeft, Check, Plus, Minus, 
  Send, Globe, Mail, Phone, MapPin, Star, Award, Shield, Cpu, 
  Layers, Database, Bot, ArrowRight, Play, Menu, X
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whyTab, setWhyTab] = useState('features');
  const [pricingInterval, setPricingInterval] = useState('monthly');
  const [activeFaq, setActiveFaq] = useState(0);
  const [contactForm, setContactForm] = useState({ name: '', company: '', phone: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(1);

  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Innovation Director",
      text: "With Scenario's GenAI now powering our game, we've set the stage for a new era of immersive player experiences.",
      rating: 5
    },
    {
      name: "Dario Berutti",
      role: "Innogsmes",
      text: "Best Agency for AI Creator & Chat GTP. We've integrated Scenario's GenAI engine into our game, taking a giant leap towards unparalleled player experiences.",
      rating: 5
    },
    {
      name: "Opera Nio",
      role: "Elevated Industries",
      text: "Best AI innovative solutions. By leveraging data analytics and machine learning, we've transformed our customer interaction and engagement significantly.",
      rating: 5
    }
  ];

  const faqs = [
    {
      q: "How does AI Convert text to video, automatically?",
      a: "Enables us to focus more on content rather than makes our smoother thanks to the Figma workflow. Workflow smoother than us to focus more on content rather than makes."
    },
    {
      q: "Affordable video production starting at $30/month",
      a: "Our budget-friendly plans give you unrestricted access to high-end generative tools without breaking the bank."
    },
    {
      q: "Web-based app accessible in your browser",
      a: "No heavy installations required. Access your high-performance AI art studio instantly from any modern web browser."
    },
    {
      q: "How does AI Convert text to video, automatically?",
      a: "Our automated pipeline interprets natural language prompts and renders cinematic sequences within seconds."
    }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    setContactForm({ name: '', company: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#070514] text-slate-100 font-sans selection:bg-[#a855f7] selection:text-white overflow-x-hidden">
      
  

      {/* Hero Section */}
      <section className="relative pt-16 pb-28 px-4 lg:px-12 text-center overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b076415_1px,transparent_1px),linear-gradient(to_bottom,#3b076415_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10 space-y-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
            Grasping the Concept of <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400 bg-clip-text text-transparent">
              Artificial Intelligence
            </span> <br />
            by Aimo
          </h1>

          <div>
            <a href="#services" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-purple-500/40 bg-purple-950/40 hover:bg-purple-900/50 text-purple-200 font-semibold transition-all shadow-lg backdrop-blur-md">
              <span>Services</span>
              <ArrowRight className="w-4 h-4 text-purple-400" />
            </a>
          </div>

          {/* Floating AI Image Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80" alt="AI Art 1" className="w-full h-40 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300 mt-6">
              <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=400&q=80" alt="AI Art 2" className="w-full h-40 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=400&q=80" alt="AI Art 3" className="w-full h-40 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 mt-6">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80" alt="AI Art 4" className="w-full h-40 object-cover" />
            </div>
          </div>

          {/* Creative Studio Banner Card */}
          <div className="mt-16 bg-gradient-to-r from-purple-950/60 via-[#130b2e] to-purple-950/60 p-8 rounded-3xl border border-purple-500/30 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-purple-600/30 border border-purple-400/30 flex items-center justify-center text-purple-300">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">We’re Creative AI Design Studio</h3>
                <p className="text-slate-400 text-xs sm:text-sm">Artificial Intelligence encompasses the creation of computer systems capable of executing tasks usually necessitating human intelligence</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
              <div className="flex items-center -space-x-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User" className="w-10 h-10 rounded-full border-2 border-purple-900 object-cover" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="User" className="w-10 h-10 rounded-full border-2 border-purple-900 object-cover" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="User" className="w-10 h-10 rounded-full border-2 border-purple-900 object-cover" />
              </div>
              <div className="text-left text-xs">
                <span className="text-slate-400 block font-medium">Trusted by:</span>
                <span className="font-bold text-white">20k+ users</span>
              </div>
              <a href="#create" className="bg-white hover:bg-purple-100 text-[#070514] font-bold px-5 py-2.5 rounded-full text-xs shadow-lg transition-all">
                Create a free ai video
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Services We Offer Section */}
      <section id="services" className="py-24 px-4 lg:px-12 bg-[#090618] border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-16 gap-6">
            <div>
              <span className="text-purple-400 font-bold text-xs uppercase tracking-widest">SERVICES</span>
              <h2 className="text-3xl sm:text-5xl font-black mt-2">Services We Offer</h2>
            </div>
            <a href="#more" className="inline-flex items-center gap-2 bg-purple-950/60 border border-purple-500/40 hover:bg-purple-900/60 text-purple-200 px-6 py-3 rounded-full text-sm font-semibold transition-all">
              <span>More Services</span>
              <ArrowRight className="w-4 h-4 text-purple-400" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-[#100926] p-8 rounded-3xl border border-purple-900/50 hover:border-purple-500/50 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">AI Integration Advisory</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Work with our experts to craft a comprehensive AI strategy tailored to your business needs, ensuring successful implementation and long-term value creation.
                </p>
              </div>
            </div>

            <div className="bg-[#100926] p-8 rounded-3xl border border-purple-900/50 hover:border-purple-500/50 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <Cpu className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Machine Learning Solutions</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Its seems like you have exhausted your free limit of chat. Please upgrade your plan to continue chatting and enjoy never ending conversations.
                </p>
              </div>
            </div>

            <div className="bg-[#100926] p-8 rounded-3xl border border-purple-900/50 hover:border-purple-500/50 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <Bot className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">AI Training and Workshops</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Offering training sessions and workshops to educate teams on AI technologies and best practices.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#100926] p-6 rounded-2xl border border-purple-900/40 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm text-white">Data Analytics & Insights</span>
            </div>

            <div className="bg-[#100926] p-6 rounded-2xl border border-purple-900/40 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm text-white">AI Training & Workshops</span>
            </div>

            <div className="bg-[#100926] p-6 rounded-2xl border border-purple-900/40 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm text-white">Custom AI Software Development</span>
            </div>

            <div className="bg-[#100926] p-6 rounded-2xl border border-purple-900/40 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm text-white">Robotic Process Automation</span>
            </div>
          </div>

          {/* Awards Section */}
          <div className="mt-20 pt-16 border-t border-purple-900/30 text-center">
            <h3 className="text-3xl font-black mb-4">Our Awards</h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto mb-10">Artificial intelligence agencies have recognized our perfect collaboration with clients</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="bg-[#100926] px-8 py-6 rounded-2xl border border-purple-950 flex items-center gap-4 shadow-xl">
                <Award className="w-10 h-10 text-amber-400" />
                <div className="text-left">
                  <div className="font-bold text-white text-sm">Clutch Leader</div>
                  <div className="text-xs text-slate-400">Top AI Agency 2024</div>
                </div>
              </div>
              <div className="bg-[#100926] px-8 py-6 rounded-2xl border border-purple-950 flex items-center gap-4 shadow-xl">
                <Award className="w-10 h-10 text-purple-400" />
                <div className="text-left">
                  <div className="font-bold text-white text-sm">Shopify Certified</div>
                  <div className="text-xs text-slate-400">Foundations Award</div>
                </div>
              </div>
              <div className="bg-[#100926] px-8 py-6 rounded-2xl border border-purple-950 flex items-center gap-4 shadow-xl">
                <Award className="w-10 h-10 text-blue-400" />
                <div className="text-left">
                  <div className="font-bold text-white text-sm">Clutch Global</div>
                  <div className="text-xs text-slate-400">Ukraine 2024</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Should You Choose Section */}
      <section className="py-24 px-4 lg:px-12 bg-[#070514]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-purple-400 font-bold text-xs uppercase tracking-widest">WHY CHOOSE US</span>
            <h2 className="text-4xl sm:text-5xl font-black mt-2">Why Should You Choose?</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            
            {/* Left Preview Box */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" alt="Preview AI" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070514] via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-[#100926]/90 backdrop-blur-md p-6 rounded-2xl border border-purple-900/60 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-lg text-white">Get started!</h4>
                    <p className="text-xs text-slate-400">Try Aimo for free today</p>
                  </div>
                  <span className="bg-purple-600 text-white px-4 py-2 rounded-xl text-xs font-bold">Signup</span>
                </div>
              </div>
            </div>

            {/* Right Tab Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3 bg-[#100926] p-1.5 rounded-2xl border border-purple-900/50 w-fit">
                <button 
                  onClick={() => setWhyTab('features')}
                  className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${whyTab === 'features' ? 'bg-purple-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  Features
                </button>
                <button 
                  onClick={() => setWhyTab('value')}
                  className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${whyTab === 'value' ? 'bg-purple-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  Our Value
                </button>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-black text-white">
                  Transform your online presence with AI website design.
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Artificial Intelligence can imitate human cognition and answer some basic questions of the customers either through audio or textual input.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>Enterprise ready</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>Unlock Cross-Platform AI</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>Startup friendly</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>Most advanced technology</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>Cost-Effectiveness</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gradient-to-r from-purple-950/40 via-[#100926] to-purple-950/40 p-8 rounded-3xl border border-purple-900/55 shadow-xl text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-black text-white mb-1">10k+</div>
              <div className="text-xs text-purple-400 uppercase tracking-widest font-semibold">Completed Projects</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-white mb-1">30+</div>
              <div className="text-xs text-purple-400 uppercase tracking-widest font-semibold">Worldwide Branches</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-white mb-1">08+</div>
              <div className="text-xs text-purple-400 uppercase tracking-widest font-semibold">Awards Winner</div>
            </div>
          </div>

        </div>
      </section>

      {/* Client Feedback Carousel Section */}
      <section className="py-24 px-4 lg:px-12 bg-[#090618] border-y border-purple-900/30 text-center relative">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="text-purple-400 font-bold text-xs uppercase tracking-widest">CLIENT'S FEEDBACK</span>
          <h2 className="text-4xl sm:text-5xl font-black">What Our Clients Say</h2>

          <div className="bg-[#100926] p-8 sm:p-12 rounded-3xl border border-purple-900/60 shadow-2xl relative">
            <div className="flex justify-center items-center gap-1 text-amber-400 mb-6">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            <p className="text-lg sm:text-2xl text-slate-200 font-medium italic mb-8 max-w-2xl mx-auto leading-relaxed">
              "{testimonials[activeTestimonial].text}"
            </p>

            <h4 className="font-bold text-lg text-white">{testimonials[activeTestimonial].name}</h4>
            <p className="text-xs text-purple-400 uppercase tracking-wider font-semibold mt-1">{testimonials[activeTestimonial].role}</p>

            <div className="flex justify-center items-center gap-4 mt-8 pt-6 border-t border-purple-900/50">
              <button 
                onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-10 h-10 rounded-full bg-purple-950 border border-purple-800/60 flex items-center justify-center hover:bg-purple-900 text-purple-300 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="w-10 h-10 rounded-full bg-purple-950 border border-purple-800/60 flex items-center justify-center hover:bg-purple-900 text-purple-300 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Partner Logos Ticker */}
          <div className="pt-16 flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-black font-serif tracking-tighter text-white">ContrastAI</span>
            <span className="text-2xl font-bold tracking-widest text-purple-300">Interlock</span>
            <span className="text-2xl font-black tracking-tight text-white">Galileo</span>
            <span className="text-2xl font-bold tracking-wider text-purple-400">Layers</span>
          </div>

        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-24 px-4 lg:px-12 bg-[#070514]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-purple-400 font-bold text-xs uppercase tracking-widest">PRICING PLANS</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-2 mb-8">Pricing Plans Of <br />Your Art Journey</h2>

          {/* Monthly / Annually Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-sm font-semibold ${pricingInterval === 'monthly' ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
            <button 
              onClick={() => setPricingInterval(pricingInterval === 'monthly' ? 'annually' : 'monthly')}
              className="w-14 h-8 rounded-full bg-purple-900/60 border border-purple-500/50 p-1 relative transition-colors"
              aria-label="Toggle pricing interval"
            >
              <div className={`w-6 h-6 rounded-full bg-purple-400 transition-transform ${pricingInterval === 'annually' ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-semibold ${pricingInterval === 'annually' ? 'text-white' : 'text-slate-400'}`}>Annually Save 30%</span>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Silver Card */}
            <div className="bg-[#100926] p-8 rounded-3xl border border-purple-900/50 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Silver</span>
                <div className="flex items-baseline gap-1 mt-4 mb-6">
                  <span className="text-4xl sm:text-5xl font-black text-white">$19</span>
                  <span className="text-xs text-slate-400">/ month</span>
                </div>
                <button className="w-full bg-purple-950 hover:bg-purple-900 border border-purple-700/50 text-white font-bold py-3 rounded-xl mb-8 transition-colors text-sm">
                  Start free Trial today
                </button>
                <ul className="space-y-3.5 text-sm text-slate-300">
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 flex-shrink-0" /> Text-to-video</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 flex-shrink-0" /> Automated translations</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 flex-shrink-0" /> 100 Creative Units</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 flex-shrink-0" /> All Basic Features</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 flex-shrink-0" /> 20+ Remove background/mo</li>
                </ul>
              </div>
            </div>

            {/* Gold Card (Featured) */}
            <div className="bg-gradient-to-b from-[#180d3b] to-[#100926] p-8 rounded-3xl border-2 border-purple-500 flex flex-col justify-between shadow-2xl relative transform md:-translate-y-4">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow">Most Popular</span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">Gold</span>
                <div className="flex items-baseline gap-1 mt-4 mb-6">
                  <span className="text-4xl sm:text-5xl font-black text-white">$69</span>
                  <span className="text-xs text-slate-400">/ month</span>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3 rounded-xl mb-8 transition-all shadow-lg text-sm">
                  Start free Trial today
                </button>
                <ul className="space-y-3.5 text-sm text-slate-200">
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 flex-shrink-0" /> Text-to-video</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 flex-shrink-0" /> Automated translations</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 flex-shrink-0" /> 1500 Creative Units</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 flex-shrink-0" /> All Basic Features</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 flex-shrink-0" /> 50+ Remove background/mo</li>
                </ul>
              </div>
            </div>

            {/* Platinum Card */}
            <div className="bg-[#100926] p-8 rounded-3xl border border-purple-900/50 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Platinum</span>
                <div className="flex items-baseline gap-1 mt-4 mb-6">
                  <span className="text-4xl sm:text-5xl font-black text-white">$99</span>
                  <span className="text-xs text-slate-400">/ month</span>
                </div>
                <button className="w-full bg-purple-950 hover:bg-purple-900 border border-purple-700/50 text-white font-bold py-3 rounded-xl mb-8 transition-colors text-sm">
                  Start free Trial today
                </button>
                <ul className="space-y-3.5 text-sm text-slate-300">
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 flex-shrink-0" /> Text-to-video</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 flex-shrink-0" /> Automated translations</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 flex-shrink-0" /> Unlimited Avatars</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 flex-shrink-0" /> All Basic Features</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 flex-shrink-0" /> Unlimited Remove background/mo 16x Factor Upscaling</li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 px-4 lg:px-12 bg-[#090618] border-t border-purple-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 font-bold text-xs uppercase tracking-widest">FAQ</span>
            <h2 className="text-4xl sm:text-5xl font-black mt-2">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#100926] rounded-2xl border border-purple-900/50 overflow-hidden transition-all">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-purple-950/20 transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg text-white">{faq.q}</span>
                  <div className="w-8 h-8 rounded-full bg-purple-950 flex items-center justify-center text-purple-400 flex-shrink-0">
                    {activeFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-purple-950/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Section */}
      <section id="blog" className="py-24 px-4 lg:px-12 bg-[#070514]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-16 gap-6">
            <div>
              <span className="text-purple-400 font-bold text-xs uppercase tracking-widest">LATEST BLOG</span>
              <h2 className="text-3xl sm:text-5xl font-black mt-2">Articles & Resources</h2>
            </div>
            <a href="#blogs" className="inline-flex items-center gap-2 bg-purple-950/60 border border-purple-500/40 hover:bg-purple-900/60 text-purple-200 px-6 py-3 rounded-full text-sm font-semibold transition-all">
              <span>More Blogs</span>
              <ArrowRight className="w-4 h-4 text-purple-400" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#100926] rounded-2xl overflow-hidden border border-purple-900/50 flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=500&q=80" alt="Blog 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                    <span>16th Apr '25</span>
                    <span>·</span>
                    <span className="text-purple-400 font-bold uppercase">AI Agency</span>
                  </div>
                  <h3 className="font-bold text-lg text-white mb-3 group-hover:text-purple-300 transition-colors">
                    How AI is enhancing customer experience in retail
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-purple-950 text-xs text-slate-400 flex items-center justify-between">
                <span>By Smith</span>
                <span className="text-purple-400 font-semibold">Read More</span>
              </div>
            </div>

            <div className="bg-[#100926] rounded-2xl overflow-hidden border border-purple-900/50 flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=500&q=80" alt="Blog 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                    <span>29th Aug '24</span>
                    <span>·</span>
                    <span className="text-purple-400 font-bold uppercase">AI Agency</span>
                  </div>
                  <h3 className="font-bold text-lg text-white mb-3 group-hover:text-purple-300 transition-colors">
                    How our AI services can transform your business
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-purple-950 text-xs text-slate-400 flex items-center justify-between">
                <span>By Smith</span>
                <span className="text-purple-400 font-semibold">Read More</span>
              </div>
            </div>

            <div className="bg-[#100926] rounded-2xl overflow-hidden border border-purple-900/50 flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80" alt="Blog 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                    <span>29th Aug '24</span>
                    <span>·</span>
                    <span className="text-purple-400 font-bold uppercase">AI</span>
                  </div>
                  <h3 className="font-bold text-lg text-white mb-3 group-hover:text-purple-300 transition-colors">
                    Top programming languages for AI development
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-purple-950 text-xs text-slate-400 flex items-center justify-between">
                <span>By Smith</span>
                <span className="text-purple-400 font-semibold">Read More</span>
              </div>
            </div>

            <div className="bg-[#100926] rounded-2xl overflow-hidden border border-purple-900/50 flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=500&q=80" alt="Blog 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                    <span>29th Aug '24</span>
                    <span>·</span>
                    <span className="text-purple-400 font-bold uppercase">AI Agency</span>
                  </div>
                  <h3 className="font-bold text-lg text-white mb-3 group-hover:text-purple-300 transition-colors">
                    AI education: personalized learning and more
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-purple-950 text-xs text-slate-400 flex items-center justify-between">
                <span>By Smith</span>
                <span className="text-purple-400 font-semibold">Read More</span>
              </div>
            </div>

          </div>
        </div>
      </section>

  

    </div>
  );
}