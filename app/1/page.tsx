'use client'

import React, { useState } from 'react';
import { 
  Mail, MapPin, Phone, Search, ShoppingCart, Menu, X, ChevronRight, 
  CheckCircle, Star, Award, ShieldCheck, ArrowRight, Send, Globe,
   Clock, ChevronDown
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Solar Installation',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const testimonials = [
    {
      name: "Olivia Bennett",
      location: "California, USA",
      text: "I am very impressed with solarva solar energy Inc. They have build the solar panels for my home. They are so handy end expert on what they are doing. Their cost management also very strong. Highly recommended.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Eris Stocklin",
      location: "Texas, USA",
      text: "I am very impressed with solarva solar energy Inc. They have build the solar panels for my home. They are so handy end expert on what they are doing. Their cost management also very strong. Highly recommended.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Sophia Brooks",
      location: "Washington, USA",
      text: "I am very impressed with solarva solar energy Inc. They have build the solar panels for my home. They are so handy end expert on what they are doing. Their cost management also very strong. Highly recommended.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', service: 'Solar Installation', message: '' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubscribed(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#FFB800] selection:text-black">
      
      <section className="relative bg-[#0b1d28] text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=2000&q=80" 
            alt="Solar rooftop worker" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d28] via-[#0b1d28]/80 to-transparent z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-12 text-center lg:text-left">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-4">About Us</h1>
          <div className="flex items-center justify-center lg:justify-start gap-2 text-sm font-medium text-slate-300">
            <a href="#home" className="hover:text-[#FFB800]">HOME 1</a>
            <span>/</span>
            <span className="text-[#28A745] font-semibold">ABOUT US</span>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#28A745]/10 px-3 py-1 rounded-full text-[#28A745] font-bold text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#28A745]"></span>
                About Solarva Services
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b1d28] leading-tight">
                We are helping our clients with our solar skills for a long period of time in USA
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                We’re finding ways to bring energy to more people in more ways every day, so that all of us can be part of the changing energy system. Because Powering Progress means providing more & cleaner energy across the country.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                By providing both individuals and businesses with a variety of solar services products offer financial protection.
              </p>
              <div>
                <a href="#learn-more" className="inline-flex items-center gap-2 bg-[#0b1d28] hover:bg-[#28A745] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column (Images) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-[1.02] transition-transform">
                    <img 
                      src="https://images.unsplash.com/photo-1509391365360-b4b60434b9d0?auto=format&fit=crop&w=600&q=80" 
                      alt="Solar specialist with blueprints" 
                      className="w-full h-72 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-6 sm:mt-12">
                  <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-[1.02] transition-transform">
                    <img 
                      src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=600&q=80" 
                      alt="Engineers collaborating on solar project" 
                      className="w-full h-72 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {}
      <section className="py-20 lg:py-28 bg-[#f8f9fa] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Collage & Rotating Badge */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=600&q=80" 
                      alt="Solar technician working" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80" 
                      alt="Solar farm at sunset" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Rotating Circular Badge Asset */}
              <div className="absolute -bottom-10 right-6 sm:right-12 z-20 w-36 h-36 bg-[#0b1d28] rounded-full p-2 shadow-2xl flex items-center justify-center animate-spin-slow hidden sm:flex">
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg className="w-full h-full absolute animate-spin" viewBox="0 0 100 100" style={{ animationDuration: '15s' }}>
                    <path id="curve" fill="transparent" d="M 15, 50 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                    <text className="text-[10px] uppercase font-bold tracking-widest fill-[#FFB800]">
                      <textPath href="#curve" startOffset="0%">
                        • SOLARVA SOLAR ENERGY • SAVE THE PLANET
                      </textPath>
                    </text>
                  </svg>
                  <div className="w-12 h-12 rounded-full bg-[#FFB800] flex items-center justify-center text-[#0b1d28]">
                    <SunIcon className="w-6 h-6 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#28A745]/10 px-3 py-1 rounded-full text-[#28A745] font-bold text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#28A745]"></span>
                About Company
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b1d28] leading-tight">
                Solarva believes in sustainable energy practices
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                We’re finding ways to bring energy to more people in more ways every day, so that all of us can be part of the changing energy system. Because Powering Progress means providing more & cleaner energy across the country.
              </p>
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <h4 className="font-bold text-[#0b1d28] text-sm mb-3">Solarva Solar Energy specialty:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#28A745] flex-shrink-0" />
                    <span>Lower Energy Costs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#28A745] flex-shrink-0" />
                    <span>Increase Home Value</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#28A745] flex-shrink-0" />
                    <span>Environmentally Friendly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#28A745] flex-shrink-0" />
                    <span>Energy Independence</span>
                  </div>
                </div>
              </div>

              <div>
                <a href="#learn-more" className="inline-flex items-center gap-2 bg-[#0b1d28] hover:bg-[#28A745] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {}
      <section className="bg-white border-y border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="py-4 md:py-0">
              <div className="text-4xl sm:text-5xl font-black text-[#0b1d28] mb-1">20+</div>
              <div className="text-slate-500 font-semibold text-sm">Employees</div>
              <div className="text-slate-400 text-xs mt-1">We have 20+ amazing expert solar expert for repair & installation</div>
            </div>
            <div className="py-4 md:py-0">
              <div className="text-4xl sm:text-5xl font-black text-[#0b1d28] mb-1">100%</div>
              <div className="text-slate-500 font-semibold text-sm">Client Satisfaction</div>
              <div className="text-slate-400 text-xs mt-1">We achieved 100% of our client satisfaction through our work</div>
            </div>
            <div className="py-4 md:py-0">
              <div className="text-4xl sm:text-5xl font-black text-[#0b1d28] mb-1">5k+</div>
              <div className="text-slate-500 font-semibold text-sm">Installation</div>
              <div className="text-slate-400 text-xs mt-1">We have 20 years of experience in installing panels for our clients.</div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="bg-[#0b1d28] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1509391365360-b4b60434b9d0?auto=format&fit=crop&w=800&q=80" alt="background pattern" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-end">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#28A745]/20 px-3 py-1 rounded-full text-[#28A745] font-bold text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#28A745]"></span>
                Why Choose Us
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Reasons to Choose Us
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                We’re finding ways to bring energy to more people in more ways every day, so that all of us can be part of the changing energy system. Because Powering Progress means providing more
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                <img 
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80" 
                  alt="Wind turbines and solar farm overview" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* 4 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#122638] p-8 rounded-2xl border border-slate-700/60 hover:border-[#FFB800] transition-all group">
              <div className="w-14 h-14 rounded-xl bg-[#FFB800]/10 flex items-center justify-center text-[#FFB800] mb-6 group-hover:bg-[#FFB800] group-hover:text-[#0b1d28] transition-colors">
                <SunIcon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Expert Installation</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We offer professional solar panel installation services. Team of experienced technicians will ensure it is installed correctly.
              </p>
            </div>

            <div className="bg-[#122638] p-8 rounded-2xl border border-slate-700/60 hover:border-[#FFB800] transition-all group">
              <div className="w-14 h-14 rounded-xl bg-[#FFB800]/10 flex items-center justify-center text-[#FFB800] mb-6 group-hover:bg-[#FFB800] group-hover:text-[#0b1d28] transition-colors">
                <DollarSignIcon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Low Cost operation</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We offer professional solar panel installation services. Team of experienced technicians will ensure it is installed correctly.
              </p>
            </div>

            <div className="bg-[#122638] p-8 rounded-2xl border border-slate-700/60 hover:border-[#FFB800] transition-all group">
              <div className="w-14 h-14 rounded-xl bg-[#FFB800]/10 flex items-center justify-center text-[#FFB800] mb-6 group-hover:bg-[#FFB800] group-hover:text-[#0b1d28] transition-colors">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Expert Solar Worker</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We offer professional solar panel installation services. Team of experienced technicians will ensure it is installed correctly.
              </p>
            </div>

            <div className="bg-[#122638] p-8 rounded-2xl border border-slate-700/60 hover:border-[#FFB800] transition-all group">
              <div className="w-14 h-14 rounded-xl bg-[#FFB800]/10 flex items-center justify-center text-[#FFB800] mb-6 group-hover:bg-[#FFB800] group-hover:text-[#0b1d28] transition-colors">
                <CpuIcon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Modern Technology</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We offer professional solar panel installation services. Team of experienced technicians will ensure it is installed correctly.
              </p>
            </div>

          </div>

        </div>
      </section>

      {}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Tall Image */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[520px]">
                <img 
                  src="https://images.unsplash.com/photo-1509391365360-b4b60434b9d0?auto=format&fit=crop&w=700&q=80" 
                  alt="Technician installing rooftop panels" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Middle Content & Values */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#28A745]/10 px-3 py-1 rounded-full text-[#28A745] font-bold text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#28A745]"></span>
                Company Specialty
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0b1d28] leading-tight">
                Solarva believes in sustainable energy practices
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We’re finding ways to bring energy to more people in more ways every day, so that all of us can be part of the changing energy system. Because Powering Progress means providing more
              </p>
              <div>
                <a href="#learn" className="inline-flex items-center gap-2 bg-[#28A745] hover:bg-[#218838] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Values Box */}
              <div className="bg-[#0b1d28] text-white p-6 rounded-2xl shadow-xl space-y-4">
                <h4 className="font-bold text-lg text-white">Solarva Values</h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  We’re finding ways to bring energy to more people in more ways every day, so that all of us can be part of
                </p>
                <div className="space-y-2.5 text-xs font-medium text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#28A745] flex-shrink-0" />
                    <span>Less reliant on traditional energy sources</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#28A745] flex-shrink-0" />
                    <span>Reduce your carbon footprint for a healthier planet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#28A745] flex-shrink-0" />
                    <span>Producing clean and renewable source of power</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#28A745] flex-shrink-0" />
                    <span>Practice conservation & promote biodiversity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Rating Badges */}
            <div className="lg:col-span-3 space-y-6">
              
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 font-black text-xl flex-shrink-0">
                  G
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-1">
                    <span className="font-bold text-slate-800 text-sm mr-1">4.9</span>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Overall Client Rating</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-[#28A745] flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">25 Prestigious</div>
                  <div className="text-xs text-slate-500 font-medium">Global Awards</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">18 Qualification</div>
                  <div className="text-xs text-slate-500 font-medium">Service Certificate</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {}
      <section className="py-20 lg:py-28 bg-[#0b1d28] text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#28A745]/20 px-3 py-1 rounded-full text-[#28A745] font-bold text-xs uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#28A745]"></span>
            Client Testimonial
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            What our clients say about our services
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-2xl bg-[#122638] border transition-all duration-300 flex flex-col justify-between ${activeTestimonial === index ? 'border-[#FFB800] shadow-2xl scale-[1.02]' : 'border-slate-700/60'}`}
                onMouseEnter={() => setActiveTestimonial(index)}
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <img src={item.image} alt={item.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#FFB800]" />
                    <div>
                      <h4 className="font-bold text-lg text-white">{item.name}</h4>
                      <p className="text-slate-400 text-xs">{item.location}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                    "{item.text}"
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/60">
                  <span className="text-xs font-semibold text-slate-400">Rating:</span>
                  <div className="flex items-center gap-1 text-[#FFB800]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-2 mt-12">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveTestimonial(i)}
                className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === i ? 'bg-[#FFB800] w-8' : 'bg-slate-700 hover:bg-slate-500'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Images */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[450px]">
                <img 
                  src="https://images.unsplash.com/photo-1509391365360-b4b60434b9d0?auto=format&fit=crop&w=500&q=80" 
                  alt="Technician working" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[450px] mt-12">
                <img 
                  src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=500&q=80" 
                  alt="Engineers reviewing solar setup" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-slate-100">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-[#28A745]/10 px-3 py-1 rounded-full text-[#28A745] font-bold text-xs uppercase tracking-wider mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#28A745]"></span>
                  Send Us Email
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0b1d28]">
                  Let's discuss a project
                </h2>
              </div>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-[#28A745] text-sm font-semibold flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Thank you! Your message has been sent successfully. We will get back to you shortly.</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#28A745] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2">E-mail Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="samplename@gmail.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#28A745] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Phone No</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+054-123-55678" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#28A745] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Service Name</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#28A745] transition-colors text-slate-700"
                    >
                      <option>Solar Installation</option>
                      <option>Solar Planning</option>
                      <option>Electricity Storage</option>
                      <option>Solar Repairing</option>
                      <option>Bio gas Plant</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    required
                    placeholder="Text Here..." 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#28A745] transition-colors resize-none"
                  ></textarea>
                </div>

                <div>
                  <button 
                    type="submit" 
                    className="bg-[#28A745] hover:bg-[#218838] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 text-sm"
                  >
                    Send Us Mail
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 text-center">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">
            We have collaborate with <span className="text-[#28A745] font-bold">20 amazing companies</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-black font-serif tracking-tighter text-slate-800">Avasan</span>
            <span className="text-2xl font-bold italic tracking-wider text-slate-700">~^~</span>
            <span className="text-xl font-extrabold tracking-widest text-slate-800">ZRND</span>
            <span className="text-xl font-bold tracking-tight text-slate-800">vezlor</span>
            <span className="text-xl font-bold tracking-wide text-purple-700">purplezen</span>
            <span className="text-xl font-black tracking-widest bg-slate-900 text-white px-2 py-1 rounded">FLASH</span>
          </div>
        </div>
      </section>

      {}
      <section className="bg-[#28A745] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div>
            <div className="text-emerald-100 font-bold text-sm mb-2 flex items-center justify-center lg:justify-start gap-2">
              <Phone className="w-4 h-4" />
              <span>Call us: +234 567 888</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Prioritizing renewable energy to create safer world
            </h2>
          </div>
          <div>
            <a href="#contact" className="inline-block bg-[#0b1d28] hover:bg-[#122638] text-white font-bold px-8 py-4 rounded-xl shadow-2xl transition-all transform hover:scale-105">
              Contact Our Team
            </a>
          </div>
        </div>
      </section>

      {}
     

    </div>
  );
}

// Helper SVG Icons for features
function SunIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="M4.93 4.93l1.41 1.41"></path>
      <path d="M17.66 17.66l1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="M6.34 17.66l-1.41 1.41"></path>
      <path d="M19.07 4.93l-1.41 1.41"></path>
    </svg>
  );
}

function DollarSignIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  );
}

function CpuIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <line x1="9" y1="1" x2="9" y2="4"></line>
      <line x1="15" y1="1" x2="15" y2="4"></line>
      <line x1="9" y1="20" x2="9" y2="23"></line>
      <line x1="15" y1="20" x2="15" y2="23"></line>
      <line x1="20" y1="9" x2="23" y2="9"></line>
      <line x1="20" y1="14" x2="23" y2="14"></line>
      <line x1="1" y1="9" x2="4" y2="9"></line>
      <line x1="1" y1="14" x2="4" y2="14"></line>
    </svg>
  );
}