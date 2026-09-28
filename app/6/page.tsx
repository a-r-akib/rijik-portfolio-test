'use client'

import React, { useState, useEffect } from 'react';

export default function LawnaAboutUs() {
    // State for interactive timeline
    const [activeYear, setActiveYear] = useState(2010);
    
    // State for accordions in "Understanding the Basics Contract"
    const [activeAccordion, setActiveAccordion] = useState(1);
    
    // State for mobile menu toggle
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    // State for form submission
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    // History data mapping
    const historyData = {
        1998: {
            year: '1998',
            title: 'Foundation of Lawna',
            desc: 'Lawna was established with a small team of dedicated legal professionals committed to delivering exceptional corporate counsel and client service.',
            img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600'
        },
        2000: {
            year: '2000',
            title: 'Expanding Regional Practice',
            desc: 'Expanded our practice areas into commercial litigation and financial regulatory compliance, serving nationwide clients.',
            img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600'
        },
        2004: {
            year: '2004',
            title: 'New Metropolitan Headquarters',
            desc: 'Moved to our state-of-the-art headquarters and welcomed leading partners in intellectual property and maritime law.',
            img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600'
        },
        2010: {
            year: '2010',
            title: 'Our Law Firm In 2010',
            desc: 'We prioritize our clients\' needs, understanding that each case is unique. Our team of seasoned attorneys is committed to delivering tailored solutions, ensuring you receive the attention and representation you deserve.',
            img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600'
        },
        2016: {
            year: '2016',
            title: 'International Reach & Partnerships',
            desc: 'Established international desks in Europe and Asia, catering to cross-border commercial transactions and international arbitration.',
            img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600'
        },
        2020: {
            year: '2020',
            title: 'Digital Transformation in Legal Tech',
            desc: 'Launched secure 24/7 client portals and automated contract review divisions to navigate global digital compliance.',
            img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600'
        },
        2024: {
            year: '2024',
            title: 'Over 40 Years of Legal Excellence',
            desc: 'Celebrating four decades of unwavering commitment to justice, client advocacy, and community leadership.',
            img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600'
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 5000);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="bg-white text-slate-800 antialiased overflow-x-hidden font-sans">
            
            {}
            <div className="bg-[#0f172a] text-slate-300 text-xs py-2 px-4 md:px-12 border-b border-slate-800">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div className="flex items-center gap-6">
                        <a href="#signin" className="hover:text-[#C5A880] transition flex items-center gap-1.5 font-medium">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Customer Sign In
                        </a>
                        <a href="tel:666888000" className="hover:text-[#C5A880] transition flex items-center gap-1.5 font-medium">
                            <svg className="w-3.5 h-3.5 text-[#C5A880]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> Call Now 666 888 000
                        </a>
                    </div>
                    <div className="flex items-center gap-4 text-slate-400">
                        <a href="#" className="hover:text-white transition">FB</a>
                        <a href="#" className="hover:text-white transition">TW</a>
                        <a href="#" className="hover:text-white transition">LI</a>
                        <a href="#" className="hover:text-white transition">IG</a>
                    </div>
                </div>
            </div>

            {}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all">
                <div className="max-w-7xl mx-auto px-4 md:px-12 py-4 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-2">
                        <div className="bg-[#121824] text-[#C5A880] p-2 rounded-lg font-serif font-bold text-xl flex items-center justify-center w-10 h-10 shadow">
                            L
                        </div>
                        <div>
                            <span className="font-serif text-2xl font-bold tracking-wide text-slate-900 block leading-tight">Lawna</span>
                            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold block">Law Firm & Associates</span>
                        </div>
                    </a>

                    <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-slate-700">
                        {['Home', 'Pages', 'Services', 'Case Studies', 'Blog', 'Shop'].map((item, idx) => (
                            <a key={idx} href="#" className="flex items-center gap-1 hover:text-[#C5A880] transition">
                                {item} <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg>
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <a href="#consultation" className="hidden sm:inline-flex items-center gap-2 border border-slate-300 hover:border-[#C5A880] hover:bg-[#C5A880] hover:text-white text-slate-800 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition duration-300">
                            Strategy Call <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                        </a>
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-slate-700 hover:text-[#C5A880]">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3 shadow-xl">
                        {['Home', 'Pages', 'Services', 'Case Studies', 'Blog', 'Shop'].map((item, idx) => (
                            <a key={idx} href="#" className="block text-slate-700 font-medium hover:text-[#C5A880]">{item}</a>
                        ))}
                        <div className="pt-2">
                            <a href="#consultation" className="block text-center w-full bg-[#121824] text-white py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase">Strategy Call</a>
                        </div>
                    </div>
                )}
            </header>

            {}
            <section className="relative bg-slate-950 text-white overflow-hidden py-16 lg:py-24">
                <div className="absolute inset-0 z-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1600')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50 z-1"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs text-slate-200 mb-8 border border-white/10">
                        <a href="#" className="hover:text-[#C5A880] transition">Home</a>
                        <span>/</span>
                        <span className="text-[#C5A880]">About Us</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8 space-y-6">
                            <span className="text-[#C5A880] italic font-serif text-xl sm:text-2xl block">About Us</span>
                            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                                With Over <span className="text-[#C5A880]">40 Years</span> Of Experience, We Provide Exceptional Legal Representation That Gets You The Justice You Deserve.
                            </h1>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-6 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" alt="Lawyer working" className="w-full h-[380px] object-cover group-hover:scale-105 transition duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md text-slate-900 p-6 rounded-xl shadow-xl">
                                    <ul className="space-y-2 text-xs sm:text-sm font-medium">
                                        <li className="flex items-center gap-2"><span className="text-[#C5A880]">✓</span> Full service corporate commercial law</li>
                                        <li className="flex items-center gap-2"><span className="text-[#C5A880]">✓</span> Team building leadership.</li>
                                        <li className="flex items-center gap-2"><span className="text-[#C5A880]">✓</span> 24/7 availability across time zones</li>
                                        <li className="flex items-center gap-2"><span className="text-[#C5A880]">✓</span> Effective and innovative commercial law.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600" alt="Lawyers walking" className="w-full h-[380px] object-cover" />
                            </div>
                            <div className="space-y-6 bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                                <div>
                                    <h3 className="font-serif text-4xl sm:text-5xl font-bold text-white">1.5k<span className="text-[#C5A880]">+</span></h3>
                                    <p className="text-slate-400 text-xs uppercase tracking-wider mt-1">Clients and Partners Worldwide</p>
                                </div>
                                <hr className="border-slate-800" />
                                <div>
                                    <h3 className="font-serif text-4xl sm:text-5xl font-bold text-white">36<span className="text-[#C5A880]">+</span></h3>
                                    <p className="text-slate-400 text-xs uppercase tracking-wider mt-1">Awards Winning Acquired</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
                    <span className="text-[#C5A880] italic font-serif text-xl block mb-2">Our History</span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-16">Company History At A Glance</h2>

                    <div className="relative max-w-5xl mx-auto mb-16">
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-300 -translate-y-1/2 z-0 hidden sm:block"></div>
                        <div className="grid grid-cols-2 sm:grid-cols-7 gap-4 relative z-10">
                            {[1998, 2000, 2004, 2010, 2016, 2020, 2024].map((year) => (
                                <button key={year} onClick={() => setActiveYear(year)} className="group flex flex-col items-center focus:outline-none">
                                    <span className={`w-4 h-4 rounded-full transition border-4 border-white shadow mb-3 ${activeYear === year ? 'bg-[#C5A880] scale-110' : 'bg-slate-300 group-hover:bg-[#C5A880]'}`}></span>
                                    <span className={`font-serif transition ${activeYear === year ? 'text-xl font-bold text-[#C5A880]' : 'text-lg font-bold text-slate-500 group-hover:text-[#C5A880]'}`}>{year}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 grid grid-cols-1 md:grid-cols-12 text-left">
                        <div className="md:col-span-6">
                            <img src={historyData[activeYear].img} alt="History timeline" className="w-full h-full object-cover min-h-[280px]" />
                        </div>
                        <div className="md:col-span-6 p-8 sm:p-10 flex flex-col justify-center">
                            <span className="text-[#C5A880] font-serif text-2xl font-bold mb-2">{historyData[activeYear].year}</span>
                            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">{historyData[activeYear].title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{historyData[activeYear].desc}</p>
                        </div>
                    </div>
                </div>
            </section>

            {}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                        <div>
                            <span className="text-[#C5A880] italic font-serif text-xl block mb-2">Expert Attorneys</span>
                            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Our Attorneys Important</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Alen Hispro', role: 'Bank & Financial Lawyer', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500' },
                            { name: 'Richard Vance', role: 'Corporate Litigation', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500' },
                            { name: 'Jonathan Sterling', role: 'Commercial Consultant', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500' }
                        ].map((attorney, idx) => (
                            <div key={idx} className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition duration-300">
                                <div className="relative bg-slate-200 pt-8 px-8 pb-0 overflow-hidden">
                                    <img src={attorney.img} alt={attorney.name} className="w-full h-80 object-cover object-top rounded-t-xl group-hover:scale-105 transition duration-500" />
                                </div>
                                <div className="p-6 text-center bg-white">
                                    <h3 className="font-serif text-xl font-bold text-slate-900">{attorney.name}</h3>
                                    <p className="text-[#C5A880] text-xs font-semibold uppercase tracking-wider mt-1">{attorney.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {}
            <section className="bg-[#121824] text-white py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-6 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team meeting" className="w-full h-[480px] object-cover" />
                            </div>
                        </div>

                        <div className="lg:col-span-6 space-y-8">
                            <div>
                                <span className="text-[#C5A880] italic font-serif text-xl block mb-2">Why Choose Us</span>
                                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">We're Very Experience in Professional Law Solution.</h2>
                                <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                                    With years of expertise, we deliver professional legal solutions designed to address complex challenges and meet your unique needs effectively.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#C5A880]">🛡️</div>
                                    <div>
                                        <h4 className="font-serif text-lg font-bold text-white">Knowledgeable Attorneys</h4>
                                        <p className="text-slate-400 text-xs sm:text-sm mt-1">Our knowledgeable attorneys provide expert advice and effective legal strategies.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#C5A880]">💰</div>
                                    <div>
                                        <h4 className="font-serif text-lg font-bold text-white">Affordable Fees</h4>
                                        <p className="text-slate-400 text-xs sm:text-sm mt-1">We offer high-quality legal services with transparent and affordable fees.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#C5A880]">🏆</div>
                                    <div>
                                        <h4 className="font-serif text-lg font-bold text-white">Quick & Positive Result</h4>
                                        <p className="text-slate-400 text-xs sm:text-sm mt-1">We focus on delivering quick & positive results for all matters.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-6 space-y-6">
                            <span className="text-[#C5A880] italic font-serif text-xl block">Legal Excellence</span>
                            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">Understanding the Basics Contract</h2>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            <div className="space-y-4 pt-4">
                                {[
                                    { id: 1, title: 'We specialize in law from 25m upwards', text: 'Comprehensive legal solutions tailored specifically for high-net-worth commercial portfolios.' },
                                    { id: 2, title: 'We care about the rest', text: 'Every client receives personalized attention, dedicated case managers, and relentless advocacy.' },
                                    { id: 3, title: 'Unique client experience division', text: 'Our dedicated support unit ensures transparent communication, proactive updates, and 24/7 availability.' }
                                ].map((item) => (
                                    <div key={item.id} className="border-b border-slate-200 pb-4">
                                        <button onClick={() => setActiveAccordion(activeAccordion === item.id ? null : item.id)} className="w-full flex justify-between items-center text-left font-serif text-lg font-bold text-slate-900 hover:text-[#C5A880] transition">
                                            <span>{item.title}</span>
                                            <span className={`text-[#C5A880] transition-transform ${activeAccordion === item.id ? 'rotate-90' : ''}`}>›</span>
                                        </button>
                                        {activeAccordion === item.id && <div className="text-slate-600 text-sm mt-2">{item.text}</div>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-6 relative flex justify-center">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md w-full">
                                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=700" alt="Lawyer reviewing contract" className="w-full h-[500px] object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {}
            <section className="py-20 bg-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-12 text-center mb-12">
                    <span className="text-[#C5A880] italic font-serif text-xl block mb-2">Testimonials</span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">What Our Clients Say</h2>
                </div>

                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 relative border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-2xl overflow-hidden shadow-md">
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400" alt="William Turner" className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-4 text-left">
                            <p className="font-serif text-lg sm:text-xl text-slate-800 italic leading-relaxed">
                                "Exceptional legal services! The team was knowledgeable, professional, and attentive to every detail. They provided reliable solutions."
                            </p>
                            <div>
                                <h4 className="font-serif text-lg font-bold text-slate-900">William Turner</h4>
                                <p className="text-xs text-slate-500 uppercase tracking-wider">Chief Product Officer, SolaGen Inc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-12 text-center mb-16">
                    <span className="text-[#C5A880] italic font-serif text-xl block mb-2">Our History</span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Our Achieved Awards</h2>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { year: '2012', title: 'Top Law Firm of the Year', desc: 'Recognized for exceptional service and outstanding results.' },
                        { year: '2014', title: 'Best Client Satisfaction Awards', desc: 'Honored for our dedication to client care.' },
                        { year: '2018', title: 'Top Litigation Firm Recognition', desc: 'Honored for excellence in courtroom advocacy.' }
                    ].map((award, idx) => (
                        <div key={idx} className="bg-slate-50 p-8 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden group">
                            <span className="absolute top-4 right-6 font-serif text-6xl font-bold text-slate-200 group-hover:text-[#C5A880]/10 transition">{award.year}</span>
                            <h3 className="font-serif text-xl font-bold text-slate-900 mb-3 relative z-10">{award.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed relative z-10">{award.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {}
            <section id="consultation" className="py-24 bg-slate-50 relative">
                <div className="max-w-5xl mx-auto px-4 md:px-12">
                    <div className="text-center mb-16">
                        <span className="text-[#C5A880] italic font-serif text-xl block mb-2">Legal Excellence</span>
                        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Get Free Consultations</h2>
                    </div>

                    <form onSubmit={handleFormSubmit} className="space-y-6 bg-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-slate-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Name</label>
                                <input type="text" required value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} placeholder="Your full name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-[#C5A880]" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Email</label>
                                <input type="email" required value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} placeholder="Your email address" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-[#C5A880]" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Subject</label>
                            <input type="text" required value={formData.subject} onChange={(e)=>setFormData({...formData, subject: e.target.value})} placeholder="Subject of your consultation" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-[#C5A880]" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Message</label>
                            <textarea rows="5" required value={formData.message} onChange={(e)=>setFormData({...formData, message: e.target.value})} placeholder="Describe your case or query..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-[#C5A880]"></textarea>
                        </div>
                        <div className="text-center pt-4">
                            <button type="submit" className="w-full sm:w-auto bg-[#121824] hover:bg-slate-900 text-white font-bold px-10 py-4 rounded-full text-xs uppercase tracking-wider transition duration-300 shadow-lg">
                                Message Now
                            </button>
                        </div>
                    </form>
                    {formSubmitted && (
                        <div className="mt-4 p-4 bg-emerald-50 text-emerald-800 text-center rounded-xl text-sm font-medium">
                            Thank you! Your consultation request has been successfully submitted.
                        </div>
                    )}
                </div>
            </section>

            {}
            <footer className="bg-[#0b1019] text-white pt-16 border-t border-slate-900">
                <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
                    <div className="md:col-span-5 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-[#C5A880] text-slate-950 p-2 rounded-lg font-serif font-bold text-xl flex items-center justify-center w-10 h-10 shadow">
                                L
                            </div>
                            <div>
                                <span className="font-serif text-2xl font-bold tracking-wide text-white block leading-tight">Lawna</span>
                                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold block">Law Firm & Associates</span>
                            </div>
                        </div>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pr-6">
                            On the other hand, We denounce with righteous indignation And dislike men who are beguiled.
                        </p>
                    </div>

                    <div className="md:col-span-4 space-y-4">
                        <h4 className="font-serif text-lg font-bold text-white border-b border-slate-800 pb-2">QUICK LINKS</h4>
                        <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-slate-400">
                            <li><a href="#" className="hover:text-[#C5A880] transition">FAQ</a></li>
                            <li><a href="#" className="hover:text-[#C5A880] transition">Terms Condition</a></li>
                            <li><a href="#" className="hover:text-[#C5A880] transition">Payment Info</a></li>
                            <li><a href="#" className="hover:text-[#C5A880] transition">Privacy Notice</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-3 space-y-4">
                        <h4 className="font-serif text-lg font-bold text-white border-b border-slate-800 pb-2">Say Hello</h4>
                        <a href="mailto:hello@design.com" className="font-serif text-xl sm:text-2xl font-bold text-[#C5A880] hover:underline block">hello@design.com</a>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-12 py-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
                    <p>© 2026 All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}