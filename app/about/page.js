"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Lightbulb, Rocket, Star } from 'lucide-react';
import Image from 'next/image';
import banner from '@/public/about/about.png';
import mobileBanner from '@/public/about/about_res.png'; // Add your mobile banner here

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const clientTypes = [
    "Startups & Creators",
    "MSMEs", 
    "NGOs & Educators",
    "Production Houses",
    "Social Enterprises",
    "Corporate & CSR",
    "Digital-first Brands"
  ];

  return (
    <>
      <div className="mt-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center space-x-3 bg-slate-700/15 px-8 py-4 rounded-full border border-slate-600/25 mb-8 backdrop-blur-sm hover:bg-slate-600/20 transition-all duration-300">
                <div className="w-3 h-3 bg-sage-500 rounded-full" style={{backgroundColor: '#6B8E73'}}></div>
                <span className="text-slate-200 text-base font-medium tracking-wide">
                  The Founder&apos;s Journey
                </span>
              </div>
            </div>
            <p className="text-lg text-gray-600 w-95 mx-auto">
              It started with breakfast and clarity... <br></br>
              By Sudarshan (Founder – GlassMate Media)
            </p>
          </motion.div>
        </div>
      </div>

      {/* Responsive Banner Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center max-w-8xl mx-auto sm:px-6 lg:px-8 pt-5"
      >
        {/* Desktop/Tablet Banner - Hidden on mobile */}
        <div className="hidden md:block w-full">
          <Image
            src={banner}
            alt='about-us banner'
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        
        {/* Mobile Banner - Only visible on mobile */}
        <div className="block md:hidden w-full px-4">
          <Image
            src={mobileBanner} // Replace with your mobile banner path
            alt='about-us banner mobile'
            className="w-full h-auto object-cover rounded-lg"
            priority
          />
        </div>
      </motion.div>

      {/* Rest of your existing code remains the same */}
      <div className="min-h-screen bg-[#0f172a] text-white overflow-hidden">
        <div className="container mx-auto px-6 py-8 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-20 w-64 h-64 bg-slate-600/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 left-16 w-80 h-80 bg-gray-500/4 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header - Centered */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-3 bg-slate-700/15 px-8 py-4 rounded-full border border-slate-600/25 mb-8 backdrop-blur-sm hover:bg-slate-600/20 transition-all duration-300">
              <div className="w-3 h-3 bg-sage-500 rounded-full" style={{backgroundColor: '#6B8E73'}}></div>
              <span className="text-slate-200 text-base font-medium tracking-wide">
                The Agency Today
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-white leading-tight">
              From one vision to a{" "}
              <span className="text-sage-400 italic font-light block mt-2" style={{color: '#6B8E73'}}>
                full-service creative engine
              </span>
            </h1>
          </div>

          {/* New Asymmetrical Layout */}
          <div className="space-y-16">
            {/* Row 1: Large Left + Small Right */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Who We Are - Large Card */}
              <div 
                className={`lg:col-span-2 group transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                onMouseEnter={() => setHoveredSection('who')}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <div className="relative bg-slate-800/25 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-12 h-full transition-all duration-500 group-hover:bg-slate-800/35 group-hover:border-slate-500/50 group-hover:shadow-2xl group-hover:shadow-slate-900/30">
                  <div className="absolute top-6 right-6 w-20 h-20 bg-sage-500/10 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundColor: '#6B8E73', opacity: hoveredSection === 'who' ? '0.1' : '0.05'}}></div>
                  
                  <h2 className="text-4xl font-bold mb-8 text-white group-hover:text-sage-200 transition-colors duration-300" style={{color: hoveredSection === 'who' ? '#8FA68E' : 'white'}}>
                    Who We Are
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                    GlassMate Media is a Mumbai-based media agency that transforms ideas into impactful visuals and strategy-driven content. Built on lived experience, it&apos;s a team-led extension of everything the founder learned the hard way.
                  </p>
                </div>
              </div>

              {/* Why GlassMate - Vertical Card */}
              <div 
                className={`group transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                onMouseEnter={() => setHoveredSection('why')}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <div className="relative bg-slate-800/25 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-8 h-full transition-all duration-500 group-hover:bg-slate-800/35 group-hover:border-slate-500/50 group-hover:shadow-2xl group-hover:shadow-slate-900/30">
                  <div className="absolute bottom-6 left-6 w-16 h-16 bg-terracotta-500/10 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundColor: '#C17B5A', opacity: hoveredSection === 'why' ? '0.1' : '0.05'}}></div>
                  
                  <h2 className="text-2xl font-bold mb-6 text-white group-hover:text-terracotta-200 transition-colors duration-300" style={{color: hoveredSection === 'why' ? '#D19B7C' : 'white'}}>
                    Why &apos;GlassMate&apos;?
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p className="text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      Because great media should be like glass — clear, reflective, and real.
                    </p>
                    <p className="text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      And every brand deserves a mate that&apos;s transparent, collaborative, and rooted in purpose.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Small Left + Large Right */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Our Clients - Compact Card */}
              <div 
                className={`group transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                onMouseEnter={() => setHoveredSection('clients')}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <div className="relative bg-slate-800/25 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-8 h-full transition-all duration-500 group-hover:bg-slate-800/35 group-hover:border-slate-500/50 group-hover:shadow-2xl group-hover:shadow-slate-900/30">
                  <div className="absolute top-6 right-6 w-16 h-16 bg-teal-500/10 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundColor: '#6B9B9B', opacity: hoveredSection === 'clients' ? '0.1' : '0.05'}}></div>
                  
                  <h2 className="text-2xl font-bold mb-6 text-white group-hover:text-teal-200 transition-colors duration-300" style={{color: hoveredSection === 'clients' ? '#8BB0B0' : 'white'}}>
                    Our Clients Include
                  </h2>
                  <ul className="space-y-2 text-gray-300">
                    {clientTypes.map((client, index) => (
                      <li 
                        key={index}
                        className="flex items-center space-x-2 text-sm transition-all duration-300 hover:text-teal-300 hover:translate-x-1 list-none"
                      >
                        <div className="w-1.5 h-1.5 bg-teal-400/60 rounded-full group-hover:bg-teal-400 transition-colors duration-300" style={{backgroundColor: hoveredSection === 'clients' ? '#6B9B9B' : '#6B9B9B80'}}></div>
                        <span> {client}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* What We Do - Large Card */}
              <div 
                className={`lg:col-span-2 group transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                onMouseEnter={() => setHoveredSection('what')}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <div className="relative bg-slate-800/25 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-12 h-full transition-all duration-500 group-hover:bg-slate-800/35 group-hover:border-slate-500/50 group-hover:shadow-2xl group-hover:shadow-slate-900/30">
                  <div className="absolute bottom-6 left-6 w-20 h-20 bg-rose-500/10 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundColor: '#B5838D', opacity: hoveredSection === 'what' ? '0.1' : '0.05'}}></div>
                  
                  <h2 className="text-4xl font-bold mb-8 text-white group-hover:text-rose-200 transition-colors duration-300" style={{color: hoveredSection === 'what' ? '#C599A3' : 'white'}}>
                    What We Do
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                    GlassMate Media delivers full-spectrum creative and digital solutions. From powerful video products to social media that speaks your brand language, every service is crafted with intent. We help founders and leaders build personal brands, consult on media strategy, drive digital marketing, and develop websites that convert. Whether it&apos;s crushing it on YouTube or scaling an online presence, GlassMate partners with you to make content that works.
                  </p>
                </div>
              </div>
            </div>

            {/* Final Section - Full Width with Side-by-Side Content */}
            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gradient-to-r from-slate-800/30 via-slate-800/20 to-slate-800/30 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-16 hover:bg-slate-800/40 hover:border-slate-500/50 transition-all duration-500">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Left Content */}
                  <div className="space-y-6">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                      Our Journey: <br/>
                      <span className="text-sage-400" style={{color: '#6B8E73'}}>Crafted with Purpose</span>
                    </h2>
                    <div className="w-16 h-1 bg-sage-500 rounded-full" style={{backgroundColor: '#6B8E73'}}></div>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      <strong className="text-white">
                        GlassMate Media is more than a content studio.
                      </strong>
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      It is a creative collective built on years of real experience and mindful evolution.
                    </p>
                  </div>
                  
                  {/* Right Content */}
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <p className="text-white font-semibold hover:text-sage-200 transition-colors duration-300" style={{"--hover-color": '#8FA68E'}}>
                        Where storytelling blends with thoughtful strategy.
                      </p>
                      <p className="text-white font-semibold hover:text-terracotta-200 transition-colors duration-300">
                        Where creativity meets responsibility.
                      </p>
                      <p className="text-white font-semibold hover:text-teal-200 transition-colors duration-300">
                        And where every project is handled with care and intention.
                      </p>
                      <p className="text-white font-semibold hover:text-rose-200 transition-colors duration-300">
                        From humble beginnings to a trusted partner for many brands.
                      </p>
                    </div>
                    
                    <div className="pt-6 border-t border-slate-600/30">
                      <p className="text-xl text-white">
                        <strong>
                          Today, we continue this journey with every client,<br></br> team member, and story we&apos;re honored to tell.
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AboutUs;
