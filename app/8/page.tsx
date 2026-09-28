'use client'

import React, { useState } from 'react';
import { 
    Phone, Mail, MapPin, ChevronDown, ArrowRight, Play, Star, 
    Shield, TrendingUp, Landmark, Users, Award, CheckCircle, 
    Facebook, Twitter, Linkedin, Instagram, ArrowLeft, Menu, X, 
    Search, ArrowUp, Send, Smartphone, Download
} from 'lucide-react';

export default function GrupiApp() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState('About Us');
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        setNewsletterSubscribed(true);
        setTimeout(() => setNewsletterSubscribed(false), 5000);
        setNewsletterEmail('');
    };

    return (
        <div className="bg-[#111111] text-slate-300 antialiased font-sans selection:bg-[#FFD700] selection:text-black">
            
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 bg-[#111111]/95 backdrop-blur-md border-b border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 md:px-12 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3">
                        <div className="bg-[#FFD700] text-black p-2 rounded font-black text-xl flex items-center justify-center w-10 h-10 shadow-lg">
                            G
                        </div>
                        <span className="font-extrabold text-xl tracking-wider text-white">GRUPI</span>
                    </a>

                    {/* Nav Items with Numbers */}
                    <nav className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-widest uppercase">
                        {[
                            { num: '01', label: 'Home' },
                            { num: '02', label: 'About Us' },
                            { num: '03', label: 'Services' },
                            { num: '04', label: 'Portfolio' },
                            { num: '05', label: 'Pages' },
                            { num: '06', label: 'Blog' }
                        ].map((item, idx) => (
                            <a 
                                key={idx} 
                                href="#" 
                                onClick={() => setActiveNav(item.label)}
                                className={`flex flex-col items-center gap-1 transition ${activeNav === item.label ? 'text-[#FFD700]' : 'text-neutral-400 hover:text-white'}`}
                            >
                                <span className={`text-[10px] ${activeNav === item.label ? 'text-[#FFD700]' : 'text-neutral-600'}`}>{item.num}</span>
                                <span>{item.label}</span>
                            </a>
                        ))}
                    </nav>

                    {/* Search & Call Action */}
                    <div className="flex items-center gap-6">
                        <button className="text-neutral-400 hover:text-[#FFD700] transition">
                            <Search className="w-4 h-4" />
                        </button>
                        <div className="hidden sm:flex items-center gap-3 bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-full">
                            <div className="w-8 h-8 rounded-full bg-[#FFD700] text-black flex items-center justify-center">
                                <Phone className="w-4 h-4" />
                            </div>
                            <div className="text-left">
                                <span className="text-[10px] uppercase text-neutral-500 block">Call us:</span>
                                <span className="text-xs font-bold text-white tracking-wider">123-4356-6789</span>
                            </div>
                        </div>

                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-white">
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="lg:hidden bg-neutral-900 border-t border-neutral-800 px-6 py-6 space-y-4">
                        {[
                            { num: '01', label: 'Home' },
                            { num: '02', label: 'About Us' },
                            { num: '03', label: 'Services' },
                            { num: '04', label: 'Portfolio' },
                            { num: '05', label: 'Pages' },
                            { num: '06', label: 'Blog' }
                        ].map((item, idx) => (
                            <a key={idx} href="#" className="flex items-center gap-4 text-sm font-bold text-neutral-300 hover:text-[#FFD700]">
                                <span className="text-[#FFD700] text-xs">{item.num}</span> {item.label}
                            </a>
                        ))}
                    </div>
                )}
            </header>

            {/* Hero Banner with Big "ABOUT US" */}
            <section className="relative bg-neutral-950 py-24 lg:py-32 overflow-hidden border-b border-neutral-900 text-center">
                <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
                
                <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-4">
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-widest text-white uppercase font-sans opacity-90">
                        About Us
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-neutral-400">
                        <a href="#" className="hover:text-white">Home</a>
                        <span>//</span>
                        <span className="text-[#FFD700]">About Us</span>
                    </div>
                </div>
            </section>

            {/* There Are Many Reasons to Choose Our Agency */}
            <section className="py-24 max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-6 space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-[#FFD700] rounded-sm"></div>
                        <span className="text-xs uppercase tracking-widest text-[#FFD700] font-bold">There Are Many Reasons</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-white tracking-wide leading-tight">
                        TO CHOICE OUR AGENCY
                    </h2>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                        Grupi has been optimized to give your visitors the best experience in terms of UX/UI, with a unique design to deliver all layouts.
                    </p>

                    {/* Image & Stamp Card */}
                    <div className="relative mt-8 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl group">
                        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" alt="Team collaborating" className="w-full h-[380px] object-cover group-hover:scale-105 transition duration-700" />
                        <div className="absolute top-4 left-4 bg-[#FFD700] text-black font-black text-[10px] uppercase tracking-widest py-1 px-3 rounded shadow rotate-[-9deg]">
                            BEST DIGITAL AGENCY 2022
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-6 space-y-8 bg-neutral-900/50 p-8 sm:p-12 rounded-3xl border border-neutral-800">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-3">We are here to serve you!</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            With over a decade of experience, we've established ourselves as one of the pioneering agencies in the region. Our small, flexible, agile and design-led structures and processes allow us to highly responsive and innovative.
                        </p>
                    </div>

                    {/* Skill Progress Bars */}
                    <div className="space-y-6 pt-4">
                        <div>
                            <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2 text-neutral-300">
                                <span>UI/UX DESIGN</span>
                                <span className="text-[#FFD700]">65%</span>
                            </div>
                            <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-[#FFD700] h-full rounded-full" style={{ width: '65%' }}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2 text-neutral-300">
                                <span>MARKETING</span>
                                <span className="text-[#FFD700]">90%</span>
                            </div>
                            <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-[#FFD700] h-full rounded-full" style={{ width: '90%' }}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2 text-neutral-300">
                                <span>WEB DEVDLOPMENT</span>
                                <span className="text-[#FFD700]">70%</span>
                            </div>
                            <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-[#FFD700] h-full rounded-full" style={{ width: '70%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                        <button className="w-12 h-12 rounded-full bg-[#FFD700] text-black flex items-center justify-center hover:scale-110 transition shadow-lg">
                            <Play className="w-5 h-5 fill-black ml-0.5" />
                        </button>
                        <span className="text-xs uppercase font-bold tracking-widest text-white">CONTACT US</span>
                    </div>
                </div>
            </section>

            {/* Statistics Banner */}
            <section className="bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 py-16 border-y border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="space-y-2 border-r border-neutral-800 last:border-none">
                        <div className="w-12 h-12 rounded-xl bg-neutral-800/80 text-[#FFD700] flex items-center justify-center mx-auto mb-4">
                            <Award className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-black text-white">2,205</h3>
                        <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Completed Projects</p>
                    </div>

                    <div className="space-y-2 border-r border-neutral-800 last:border-none">
                        <div className="w-12 h-12 rounded-xl bg-neutral-800/80 text-[#FFD700] flex items-center justify-center mx-auto mb-4">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-black text-white">54+</h3>
                        <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Active Members</p>
                    </div>

                    <div className="space-y-2 border-r border-neutral-800 last:border-none">
                        <div className="w-12 h-12 rounded-xl bg-neutral-800/80 text-[#FFD700] flex items-center justify-center mx-auto mb-4">
                            <Star className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-black text-white">14+</h3>
                        <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Award Winning</p>
                    </div>

                    <div className="space-y-2">
                        <div className="w-12 h-12 rounded-xl bg-neutral-800/80 text-[#FFD700] flex items-center justify-center mx-auto mb-4">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-black text-white">100%</h3>
                        <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Satisfaction Rate</p>
                    </div>
                </div>
            </section>

            {/* Services & Honeycomb Graphics Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-[#FFD700] rounded-sm"></div>
                        <span className="text-xs uppercase tracking-widest text-[#FFD700] font-bold">Services</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-white tracking-wide leading-tight uppercase">
                        WE ARE A DIGITALLY-LED, FULL-SERVICE CREATIVE AGENCY.
                    </h2>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                        Grupi is a design studio founded in London and expanded our services, and become a multinational firm.
                    </p>
                    <div className="flex gap-2 pt-2">
                        <span className="w-2 h-2 rounded-full bg-neutral-600"></span>
                        <span className="w-6 h-2 rounded-full bg-[#FFD700]"></span>
                        <span className="w-2 h-2 rounded-full bg-neutral-600"></span>
                    </div>
                </div>

                {/* Service Cards */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                    {/* Card 1 */}
                    <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl space-y-6 hover:border-[#FFD700] transition duration-300 group">
                        <div className="flex justify-between items-start">
                            <div className="w-12 h-12 rounded-xl bg-neutral-800 text-[#FFD700] flex items-center justify-center group-hover:bg-[#FFD700] group-hover:text-black transition">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <span className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:bg-[#FFD700] group-hover:text-black transition">
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-white">USER EXPERIENCE DESIGN</h3>
                        <ul className="space-y-2 text-xs text-neutral-400 border-t border-neutral-800 pt-4">
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"></span> UX strategy</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"></span> Information architecture</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"></span> Prototyping</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"></span> Wireframing</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"></span> UI Design</li>
                        </ul>
                    </div>

                    {/* Card 2 / Honeycomb graphic container */}
                    <div className="space-y-6">
                        <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl space-y-6 hover:border-[#FFD700] transition duration-300 group">
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 rounded-xl bg-neutral-800 text-[#FFD700] flex items-center justify-center group-hover:bg-[#FFD700] group-hover:text-black transition">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <span className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:bg-[#FFD700] group-hover:text-black transition">
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white">WEB DEVELOPMENT</h3>
                            <ul className="space-y-2 text-xs text-neutral-400 border-t border-neutral-800 pt-4">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"></span> WordPress web development</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"></span> Dynamic CMS-based development</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"></span> Mobile app development</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"></span> E-commerce</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"></span> Domain</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brands We've Collaborated With */}
            <section className="py-20 bg-neutral-950 border-y border-neutral-900">
                <div className="max-w-7xl mx-auto px-4 md:px-12 text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-[#FFD700] rounded-sm"></div>
                        <span className="text-xs uppercase tracking-widest text-[#FFD700] font-bold">Partners</span>
                    </div>
                    <h2 className="text-3xl font-black text-white">BRANDS WE’VE COLLABORATED WITH TEAM.</h2>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-2 sm:grid-cols-4 gap-8 opacity-60">
                    {['LOREMIPSUM', 'LOREMIPSUM', 'LOREMIPSUM', 'LOREMIPSUM', 'LOREMIPSUM', 'LOREMIPSUM', 'LOREMIPSUM', 'LOREMIPSUM'].map((brand, idx) => (
                        <div key={idx} className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl text-center font-black tracking-widest text-neutral-400 hover:text-[#FFD700] transition">
                            {brand}
                            <span className="block text-[8px] tracking-widest text-neutral-600 font-normal mt-1">YOUR TAGLINE</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Striking Call-to-Action Banner ("Don't Late, Join With Us Today!") */}
            <section className="relative bg-neutral-900 py-24 overflow-hidden border-b border-neutral-800">
                <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1600')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-8 space-y-6">
                        <div className="inline-block bg-[#FFD700] text-black text-[10px] uppercase font-black px-3 py-1 rounded tracking-widest">
                            BEST AWARD WINNER
                        </div>
                        <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-none">
                            DON’T LATE, JOIN WITH US TODAY!
                        </h2>
                        <div>
                            <a href="#" className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#e6c200] text-black font-black px-8 py-4 rounded text-xs uppercase tracking-wider transition shadow-xl">
                                CONTACT US NOW <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comprehensive Footer */}
            <footer className="bg-neutral-950 text-neutral-400 pt-20 border-t border-neutral-900">
                <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">
                    
                    {/* Brand / About */}
                    <div className="md:col-span-4 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#FFD700] text-black p-2 rounded font-black text-xl flex items-center justify-center w-10 h-10 shadow-lg">
                                G
                            </div>
                            <span className="font-extrabold text-xl tracking-wider text-white">GRUPI</span>
                        </div>
                        <p className="text-xs leading-relaxed text-neutral-400">
                            Grupi has been optimized to give your visitors the best experience in terms of UX/UI.
                        </p>
                    </div>

                    {/* Subscribe Now */}
                    <div className="md:col-span-3 space-y-4">
                        <h4 className="text-white font-bold text-sm tracking-wider uppercase border-b border-neutral-800 pb-2">SUBSCRIBE NOW</h4>
                        <p className="text-xs text-neutral-400">Subscribe to Grupi Insights, our monthly look.</p>
                        <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                            <input 
                                type="email" 
                                required 
                                value={newsletterEmail} 
                                onChange={(e)=>setNewsletterEmail(e.target.value)} 
                                placeholder="Your mail address..." 
                                className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-xs text-white focus:outline-none focus:border-[#FFD700]" 
                            />
                            <button type="submit" className="w-full bg-[#FFD700] hover:bg-[#e6c200] text-black font-black py-3 rounded text-xs uppercase tracking-wider transition">
                                SUBSCRIBE
                            </button>
                            {newsletterSubscribed && (
                                <p className="text-[10px] text-emerald-400 font-medium">Successfully subscribed!</p>
                            )}
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-white font-bold text-sm tracking-wider uppercase border-b border-neutral-800 pb-2">CONTACT INFO</h4>
                        <div className="space-y-2 text-xs">
                            <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#FFD700]" /> +123 (4567) 890</p>
                            <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#FFD700]" /> info@envato.com</p>
                            <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#FFD700]" /> 380 St Kilda Road, Melbourne</p>
                        </div>
                    </div>

                    {/* Quick Link */}
                    <div className="md:col-span-3 space-y-4">
                        <h4 className="text-white font-bold text-sm tracking-wider uppercase border-b border-neutral-800 pb-2">QUICK LINK</h4>
                        <ul className="grid grid-cols-2 gap-2 text-xs">
                            <li><a href="#" className="hover:text-[#FFD700] transition">&gt; Home</a></li>
                            <li><a href="#" className="hover:text-[#FFD700] transition">&gt; About Us</a></li>
                            <li><a href="#" className="hover:text-[#FFD700] transition">&gt; Services</a></li>
                            <li><a href="#" className="hover:text-[#FFD700] transition">&gt; Contact Us</a></li>
                            <li><a href="#" className="hover:text-[#FFD700] transition">&gt; Blog</a></li>
                        </ul>
                    </div>
                </div>

                {/* Image Gallery Grid & Copyright */}
                <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 border-b border-neutral-900 grid grid-cols-2 sm:grid-cols-6 gap-4">
                    {[
                        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=200',
                        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=200',
                        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
                        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
                        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
                        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200'
                    ].map((img, idx) => (
                        <div key={idx} className="rounded-lg overflow-hidden h-20 border border-neutral-800 group">
                            <img src={img} alt="Gallery item" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                        </div>
                    ))}
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-12 py-6 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
                    <p>© 2026 CaseThemes. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition">Cookie Policy</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}