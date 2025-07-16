"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const GlassMateHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[] relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-8 py-20 max-w-7xl">
        {/* Who We Are Section */}
        <div className={`mb-20 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-gray-400 text-md font-mono mb-2 tracking-wider uppercase">
            Who are we
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-5xl font-black text-white leading-tight mb-12">
            We Dont Follow <span className="text-cyan-400">Trends</span>
            <br />
            <span className="text-white">We Make Them Beg for a Retainer</span>
            <br />
            
          </h1>
          
          <p className="text-gray-400 text-lg font-mono max-w-2xl">
            GlassMate Media is not just a media agency were your strategic partner in storytelling and growth.
          </p>
        </div>

        {/* What We Do Section */}
        <div className={`mb-20 transform transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-gray-400 text-sm font-mono mb-2 tracking-wider uppercase">
            What we do
          </p>
          
          <h2 className="text-5xl md:text-7xl lg:text-5xl font-black text-white leading-tight mb-12">
            We <span className="text-white">Dream in Color</span>
            <br />
            <span className="text-cyan-400">And Deliver in Conversions</span>
          </h2>
          
          <p className="text-gray-400 text-lg font-mono max-w-2xl">
            We blend storytelling, technology, and strategy to create media that resonates, engages,

            <br />
            and converts.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className={`mb-20 transform transition-all duration-1000 ease-out delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-gray-400 text-sm font-mono mb-2 tracking-wider uppercase">
            Why choose us
          </p>
          
          <h3 className="text-4xl md:text-6xl lg:text-5xl font-black text-white leading-tight mb-12">
            We Don t Just  <span className="text-cyan-400">Impress</span>
            <br />
            We Leave a <span className="text-white">Dent</span>
          </h3>
          
          <p className="text-gray-400 text-lg font-mono max-w-2xl mb-12">
            Because we go beyond content—we create experiences that drive impact.
          </p>
        </div>

        {/* Call to Action */}
        <div className={`transform transition-all duration-1000 ease-out delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="mb-16">
            <h4 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
              <span className="text-cyan-400">YOUR VISION,</span> OUR <span className="text-white">CREATIVITY,</span>
              <br />
              <span className="text-cyan-400">UNSTOPPABLE GROWTH!</span>
            </h4>
          </div>
          
          
          <button className="group inline-flex items-center bg-cyan-400 text-black px-8 py-4 font-bold text-sm tracking-wider uppercase hover:bg-cyan-300 transition-all duration-300 hover:scale-105">
            <Link href="/services">Lets Build Something Amazing</Link>
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Subtle animated elements */}
      <div className="absolute top-1/4 right-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-10 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-2000"></div>
    </div>
  );
};

export default GlassMateHero;