"use client";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const cardsData = [
  {
    title: "Video Production & Editing",
    category: "From reels to corporate films, we deliver stunning edits.",
    src: "/services/editing.jpg",
    content: (
      <div>
        <p className="text-gray-800">
          From concept to final cut, we craft videos that captivate. Corporate
          films, reels, promos, or documentaries — precision editing and
          cinematic storytelling bring your brand to life.
        </p>
      </div>
    ),
  },
  {
    title: "Graphic Design & Branding",
    category: "Logos, pitch decks, brand books — built to impress",
    src: "/services/graphic.jpg",
    content: (
      <div>
        <p className="text-gray-800">
          Complete branding solutions that make your business stand out. We
          create cohesive visual identities that resonate with your target
          audience.
        </p>
      </div>
    ),
  },
  {
    title: "Personal & Business Branding",
    category: "Logos, pitch decks, brand books — built to impress",
    src: "/services/personal.jpg",
    content: (
      <div>
        <p className="text-gray-800">
          Whether you're an entrepreneur, a startup, or an established business,
          we help shape your brand identity. From defining your voice to
          creating a strong digital presence, we craft strategies that make your
          brand visible, trusted, and memorable.
        </p>
      </div>
    ),
  },
  {
    title: "Consultation Services (Media Strategy & Branding Advisory)",
    category: "Logos, pitch decks, brand books — built to impress",
    src: "/services/consult.png",
    content: (
      <div>
        <p className="text-gray-800">
          Clarity fuels creativity. We help brands define positioning, media
          plans, and campaigns that align with vision, audience, and market
          trends.
        </p>
      </div>
    ),
  },
  {
    title: "Social Media Strategy & Management",
    category: "We post. You grow.",
    src: "/services/smma.jpg",
    content: (
      <div>
        <p className="text-gray-800">
          We don&apos;t just post; we position. From content calendars to
          performance-driven campaigns, we manage your social presence to grow
          your community and brand reach
        </p>
      </div>
    ),
  },
  {
    title: "Digital Marketing & SEO",
    category: "Drive traffic that matters.",
    src: "/services/seo.jpg",
    content: (
      <div>
        <p className="text-gray-800">
          Drive meaningful traffic and boost visibility with strategic
          campaigns. From SEO optimization to paid ads, we ensure your brand
          ranks higher, attracts the right audience, and achieves measurable
          growth.
        </p>
      </div>
    ),
  },
  {
    title: "Photography & Event Coverage",
    category: "Product, corporate, and candid storytelling.",
    src: "/services/photo.jpg",
    content: (
      <div>
        <p className="text-gray-800">
          Capture moments that matter with professional product, corporate, and
          candid photography. We provide end-to-end event coverage to visually
          tell your story and create timeless impressions.
        </p>
      </div>
    ),
  },
  {
    title: "Motion Graphics & Animation",
    category: "Add magic with dynamic visual storytelling",
    src: "/services/motion.jpg",
    content: (
      <div>
        <p className="text-gray-800">
          Bring ideas to life with stunning motion graphics and animations. From
          dynamic explainer videos to visual effects, we add the magic that
          makes your content memorable.
        </p>
      </div>
    ),
  },
  {
    title: "Event Management and Operations",
    category: "Add magic with dynamic visual storytelling",
    src: "/services/event.png",
    content: (
      <div>
        <p className="text-gray-800">
          Bring ideas to life with stunning motion graphics and animations. From
          dynamic explainer videos to visual effects, we add the magic that
          makes your content memorable.
        </p>
      </div>
    ),
  },
  {
    title: "Website & App Design",
    category: "Design that works. UX that converts",
    src: "/services/web.jpg",
    content: (
      <div>
        <p className="text-gray-800">
          Design that works. We create user-friendly websites and apps that look
          stunning and convert visitors into customers. From UX to UI, every
          detail is built to perform.
        </p>
      </div>
    ),
  },
  {
    title: "Content Creation & Copywriting",
    category: "Say the right thing. Always.",
    src: "/services/cc.jpg",
    content: (
      <div>
        <p className="text-gray-800">
          Words that win attention. We craft engaging content and compelling
          copy that speaks to your audience, strengthens your brand voice, and
          drives action.
        </p>
      </div>
    ),
  },
  {
    title: "Influencer Collaborations",
    category: "Partner with creators your audience trusts.",
    src: "/services/influence.jpg",
    content: (
      <div>
        <p className="text-gray-800">
          Expand your reach with authentic creator partnerships. We connect you
          with influencers your audience trusts, helping amplify your brand’s
          visibility and credibility.
        </p>
      </div>
    ),
  },
  {
    title: "Ad Campaign Management",
    category: "Google, Meta, LinkedIn, YouTube: we manage all.",
    src: "/services/ad.jpg",
    content: (
      <div>
        <p className="text-gray-800">
          Maximize your ROI with expertly managed ad campaigns. From Google and
          Meta to LinkedIn and YouTube, we handle everything — targeting,
          optimization, and reporting — so your brand gets the spotlight it
          deserves.
        </p>
      </div>
    ),
  },
  {
    title: "E-commerce Solutions",
    category: "Google, Meta, LinkedIn, YouTube: we manage all.",
    src: "/services/ecomm.png",
    content: (
      <div>
        <p className="text-gray-800">
          Empowering online sales with intuitive platforms. From product pages
          to payment gateways, we create e-commerce sites built to scale.
        </p>
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

const StatsCard = ({ number, suffix = "", label, icon, delay = 0 }) => {
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
          {animatedCount}
          {suffix}
        </div>
        <div className="text-sm text-slate-400 uppercase tracking-wide">
          {label}
        </div>
      </div>
    </div>
  );
};

const page = () => {
  const carouselItems = cardsData.map((card, index) => (
    <Card key={index} card={card} index={index} layout={true} />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="text-center max-w-5xl mx-auto mb-5 pt-20 md:pt-32 lg:pt-40">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-gray-600/30">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-blue-200">
            Full-Service Creative Agency
          </span>
        </div>

        {/* ONE MAIN HEADING */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
          Creative Excellence
          <span className="text-blue-400"> Delivered</span>
        </h1>

        {/* ONE SUB HEADING */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          From concept to execution, we deliver comprehensive creative solutions
          that elevate your brand and drive remarkable results.
        </p>
      </div>

      {/* Services Section */}
      <div className="relative py-10">
        <div className="container mx-auto px-4">
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
              Lets discuss how our services can help you achieve your business
              objectives and stand out in your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Start Your Project
                </button>
              </Link>
              <Link href="/portfolio" passHref>
                <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all duration-300">
                  View Our Portfolio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
