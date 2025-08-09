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
          From idea to final export, we create videos that captivate and
          convert. Whether it&apos;s brand stories, reels, corporate films,
          event highlights, or documentaries — we bring your vision to life with
          cinematic precision and storytelling that sells.
        </p>
      </div>
    ),
    offer: (
      <div className="offer text-gray-800">
        What We Offer:
        <ul className="list-disc pl-5 mt-2">
          <li>Pre-production planning (script, concept, storyboard)</li>
          <li>
            Multi-cam shooting & live direction High-impact editing, color
          </li>
          <li>
            grading, sound design Vertical format reels, Ads & YouTube-ready
            cuts
          </li>
        </ul>
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
          We build visual identities that speak loud and clear. From striking
          logos to elegant pitch decks and cohesive brand kits — every design we
          craft helps your business make a lasting impression
        </p>
      </div>
    ),
    offer: (
      <div className="offer text-gray-800">
        What We Offer:
        <ul className="list-disc pl-5 mt-2">
          <li>Logo Design</li>
          <li>Brand Guidelines</li>
          <li> Pitch Decks & Brand Books</li>
          <li> Visual Identity Systems</li>
          <li> Graphic Templates (for Social Media, Print, etc.)</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Personal & Business Branding",
    category:
      "From Positioning to Planning — Strategy that Moves Brands Forward",
    src: "/services/personal.jpg",
    content: (
      <div>
        <p className="text-gray-800">
          Whether you're a startup founder, solo creator, or growing business,
          we help shape your identity. From personal positioning to full-scale
          brand kits, we craft consistent, clear, and impactful branding that
          earns trust and drives growth.
        </p>
      </div>
    ),
    offer: (
      <div className="offer text-gray-800">
        What We Offer:
        <ul className="list-disc pl-5 mt-2">
          <li>Brand Strategy & Positioning</li>
          <li>Visual Identity Systems</li>
          <li> Founder Branding Kits</li>
          <li> Business Brand Kits</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Consultation Services (Media Strategy & Branding Advisory)",
    category: "Clarity-led plans. Strategy that scales",
    src: "/services/consult.png",
    content: (
      <div>
        <p className="text-gray-800">
          Fuel strategy with clarity. We help brands define sharp positioning,
          cohesive messaging, and smart media plans that align with their
          audience, vision, and growth goals.
        </p>
      </div>
    ),
    offer: (
      <div className="offer text-gray-800">
        What We Offer:
        <ul className="list-disc pl-5 mt-2">
          <li>Brand Positioning & Messaging</li>
          <li>Media Planning & Campaign Strategy</li>
          <li> Cross-Channel Content Alignment</li>
          <li> Strategic Review & Advisory</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Social Media Strategy & Management",
    category: "We don&apos;t just scroll with trends — we steer the conversation.",
    src: "/services/smma.jpg",
    content: (
      <div>
        <p className="text-gray-800">
         From content calendars to conversion-led campaigns, we help you show up smart and speak your brand&apos;s voice. Whether it&apos;s growing reach, driving engagement, or building a loyal community — we post with purpose.
        </p>
      </div>
    ),
    offer: (
      <div className="offer text-gray-800">
        What We Offer:
        <ul className="list-disc pl-5 mt-2">
          <li>Social media strategy & planning</li>
          <li>Content calendar creation</li>
          <li> Post design & publishing</li>
          <li> Community management</li>
          <li> Platform growth (Instagram, LinkedIn, YouTube, etc.)</li>
          <li> Campaign analysis & reporting</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Digital Marketing & SEO",
    category: "Strategic Growth. Real Results",
    src: "/services/seo.jpg",
    content: (
      <div>
        <p className="text-gray-800">
          We drive traffic that matters. Through SEO, paid ads, and conversion-optimized strategies, we ensure your brand stands out, shows up, and scales sustainably.
        </p>
      </div>
    ),
    offer: (
      <div className="offer text-gray-800">
        What We Offer:
        <ul className="list-disc pl-5 mt-2">
          <li>SEO Audits & Optimization</li>
          <li>Paid Media (Google Ads, Meta, LinkedIn)</li>
          <li> Performance Reporting</li>
          <li> Conversion Rate Optimization</li>
          <li> Email Marketing Funnels</li>
          <li> Landing Page Strategy</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Photography & Event Coverage",
    category: "Capture the moment. Craft the memory",
    src: "/services/photo.jpg",
    content: (
      <div>
        <p className="text-gray-800">
          We capture stories, not just images. Whether it's a corporate shoot, product showcase, or live event, we bring your brand to life through compelling visual documentation.
        </p>
      </div>
    ),
    offer: (
      <div className="offer text-gray-800">
        What We Offer:
        <ul className="list-disc pl-5 mt-2">
          <li>Product Photography</li>
          <li>Corporate & Team Portraits</li>
          <li> Behind-the-Scenes Shoots</li>
          <li> Studio & On-Location Setup</li>
          <li> Candid Event Coverage</li>
          <li> Multi-Camera Coverage (for events)</li>
        </ul>
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
          Bring ideas to life with stunning motion graphics and animations. From dynamic explainer videos to visual effects, we add the magic that makes your content unforgettable.
        </p>
      </div>
    ),
    offer: (
      <div className="offer text-gray-800">
        What We Offer:
        <ul className="list-disc pl-5 mt-2">
          <li>Explainer videos & product demos</li>
          <li>2D & 3D animation</li>
          <li> Visual effects (VFX)</li>
          <li> Title sequences & lower thirds</li>
          <li> Animated infographics</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Event Management and Operations",
    category: "Plan, Execute, Impress",
    src: "/services/event.png",
    content: (
      <div>
        <p className="text-gray-800">
          From corporate events to product launches, we handle every detail to ensure your event runs seamlessly. Our team blends creativity with precision to deliver experiences your guests will remember.
        </p>
      </div>
    ),
    offer: (
      <div className="offer text-gray-800">
        What We Offer:
        <ul className="list-disc pl-5 mt-2">
          <li>End-to-end event planning and execution</li>
          <li>Stage, lighting, and AV setup</li>
          <li> Vendor coordination and logistics)</li>
          <li> Creative concepts & theme design</li>
          <li> On-site management</li>
        </ul>
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
          We create user-friendly websites and apps that are visually striking and built to convert visitors into customers. From UX to UI, every element is designed for performance.
        </p>
      </div>
    ),
    offer: (
      <div className="offer text-gray-800">
        What We Offer:
        <ul className="list-disc pl-5 mt-2">
          <li>Responsive website design</li>
          <li>Mobile app interface design</li>
          <li> UI/UX optimization</li>
          <li> Landing page design</li>
          <li> E-commerce site design</li>
        </ul>
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
     offer: (
      <div className="offer text-gray-800">
        What We Offer:
        <ul className="list-disc pl-5 mt-2">
          <li>Website and ad copy</li>
          <li>Social media content</li>
          <li> Blog and article writing</li>
          <li> Scriptwriting for videos</li>
          <li> Brand storytelling</li>
        </ul>
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
          Expand your reach with authentic creator partnerships. We connect you with influencers your audience trusts, helping amplify your brand&apos;s visibility and credibility.
        </p>
      </div>
    ),
    offer: (
      <div className="offer text-gray-800">
        What We Offer:
        <ul className="list-disc pl-5 mt-2">
          <li>Influencer sourcing and vetting</li>
          <li>Campaign concept development</li>
          <li> Contract negotiation</li>
          <li> Performance tracking</li>
          <li> Cross-platform collaborations</li>
        </ul>
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
          Maximize your ROI with expertly managed ad campaigns. From targeting to optimization and reporting, we ensure your brand gets the spotlight it deserves.
        </p>
      </div>
    ),
     offer: (
      <div className="offer text-gray-800">
        What We Offer:
        <ul className="list-disc pl-5 mt-2">
          <li>Campaign strategy and setup</li>
          <li>Audience targeting and segmentation</li>
          <li> A/B testing and optimization</li>
          <li> Budget management</li>
          <li> Analytics and reporting</li>
        </ul>
      </div>
    ),
  },
  {
    title: "E-commerce Solutions",
    category: "Build, sell, and scale seamlessly",
    src: "/services/ecomm.png",
    content: (
      <div>
        <p className="text-gray-800">
          Empowering online sales with intuitive platforms. From product pages to payment gateways, we design and develop e-commerce solutions built to grow with your business.
        </p>
      </div>
    ),
    offer: (
      <div className="offer text-gray-800">
        What We Offer:
        <ul className="list-disc pl-5 mt-2">
          <li>E-commerce website development</li>
          <li>Product catalog setup</li>
          <li> Secure payment integration</li>
          <li> User experience optimization</li>
          <li> Sales tracking and analytics</li>
        </ul>
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
        <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
          Creative Excellence,
          <span className="text-blue-400">Strategy-Driven</span>
        </h1>

        {/* ONE SUB HEADING */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          From concept to conversion, we craft solutions that captivate your
          audience and drive real growth.
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
              Let&apos;s explore how GlassMate can support your goals with
              smart, creative media solutions tailored to your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white cursor-pointer font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Start Your Project
                </button>
              </Link>
              <Link href="/portfolio" passHref>
                <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg cursor-pointer hover:bg-white/5 transition-all duration-300">
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
