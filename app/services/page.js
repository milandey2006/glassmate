"use client";
import { Carousel, Card } from '@/components/ui/apple-cards-carousel'
import React, { useState, useEffect, useRef } from 'react'

const cardsData = [
  {
    title: "Video Production & Editing",
    category: "From reels to corporate films, we deliver stunning edits.",
    src: "/services/editing.jpg",
    content: (
      <div>
        <p>Professional video production and editing services that bring your vision to life. From concept to final cut, we handle everything with precision and creativity.</p>
      </div>
    ),
  },
  {
    title: "Graphic Design & Branding",
    category: "Logos, pitch decks, brand books — built to impress",
    src: "/services/graphic.jpg",
    content: (
      <div>
        <p>Complete branding solutions that make your business stand out. We create cohesive visual identities that resonate with your target audience.</p>
      </div>
    ),
  },
  {
    title: "Social Media Strategy & Management",
    category: "We post. You grow.",
    src: "/services/smma.jpg",
    content: (
      <div>
        <p>Strategic social media management that builds communities and drives engagement. Let us handle your online presence while you focus on your business.</p>
      </div>
    ),
  },
  {
    title: "Digital Marketing & SEO",
    category: "Drive traffic that matters.",
    src: "/services/seo.jpg",
    content: (
      <div>
        <p>Comprehensive digital marketing strategies that increase your online visibility and drive qualified traffic to your business.</p>
      </div>
    ),
  },
  {
    title: "Photography & Event Coverage",
    category: "Product, corporate, and candid storytelling.",
    src: "https://images.unsplash.com/photo-1511818963245-c8b261859b3d?q=80&w=1932&auto=format&fit=crop",
    content: (
      <div>
        <p>Professional photography services that capture moments and tell stories. From corporate events to product shoots, we deliver stunning visuals.</p>
      </div>
    ),
  },
  {
    title: "Motion Graphics & Animation",
    category: "Add magic with dynamic visual storytelling",
    src: "/services/motion.jpg",
    content: (
      <div>
        <p>Dynamic motion graphics and animations that bring your brand to life. Perfect for explainer videos, social media content, and brand storytelling.</p>
      </div>
    ),
  },
  {
    title: "Website & App Design",
    category: "Design that works. UX that converts",
    src: "/services/web.jpg",
    content: (
      <div>
        <p>User-centered web and app design that combines beautiful aesthetics with seamless functionality. We create digital experiences that convert.</p>
      </div>
    ),
  },
  {
    title: "Content Creation & Copywriting",
    category: "Say the right thing. Always.",
    src: "/services/cc.jpg",
    content: (
      <div>
        <p>Compelling content and copy that speaks to your audience. From blog posts to ad copy, we craft words that engage and convert.</p>
      </div>
    ),
  },
  {
    title: "Influencer Collaborations",
    category: "Partner with creators your audience trusts.",
    src: "/services/influence.jpg",
    content: (
      <div>
        <p>Strategic influencer partnerships that amplify your brand message. We connect you with creators who align with your values and audience.</p>
      </div>
    ),
  },
  {
    title: "Ad Campaign Management",
    category: "Google, Meta, LinkedIn, YouTube: we manage all.",
    src: "/services/ad.jpg",
    content: (
      <div>
        <p>Full-service ad campaign management across all major platforms. We optimize for performance and ROI while you focus on your business.</p>
      </div>
    ),
  },
];

// Counter Animation Hook
const useCountAnimation = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      let startTime = null;
      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, end, duration]);

  return [count, ref];
};

const StatsCard = ({ number, suffix = '', label, icon, delay = 0 }) => {
  const [animatedCount, ref] = useCountAnimation(number, 2000 + delay);
  
  return (
    <div 
      ref={ref}
      className="relative group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
        <div className="text-4xl mb-4">{icon}</div>
        <div className="text-4xl md:text-5xl font-bold text-white mb-2">
          {animatedCount}{suffix}
        </div>
        <div className="text-sm text-slate-400 uppercase tracking-wide">{label}</div>
      </div>
    </div>
  );
};

const page = () => {
  const carouselItems = cardsData.map((card, index) => (
    <Card 
      key={index} 
      card={card} 
      index={index} 
      layout={true}
    />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* Subtitle */}
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-200">Full-Service Creative Agency</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Creative Excellence
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Delivered
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-16">
              From concept to execution, we deliver comprehensive creative solutions that elevate your brand and drive remarkable results.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Our
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Expertise</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Discover how our specialized services can transform your business and help you achieve your goals.
            </p>
          </div>
          
          {/* Carousel */}
          <Carousel items={carouselItems} />
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Brand?
            </h3>
            <p className="text-lg text-slate-400 mb-8">
              Let's discuss how our services can help you achieve your business objectives and stand out in your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all duration-300">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page