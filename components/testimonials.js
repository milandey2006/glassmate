"use client";
import React from 'react';
import { motion } from 'motion/react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "Marketing Director, TechCorp",
    review: "Outstanding creative work! Their team delivered exceptional branding solutions that transformed our company's image. The attention to detail and professionalism exceeded our expectations."
  },
  {
    id: 2,
    name: "Michael Chen",
    designation: "CEO, StartupVenture",
    review: "Working with this agency was a game-changer for our business. Their strategic approach to digital marketing increased our online presence by 300%. Highly recommended!"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    designation: "Brand Manager, Fashion House",
    review: "The creative excellence they bring to every project is remarkable. Our social media engagement skyrocketed after implementing their content strategy. Truly professional team."
  },
  {
    id: 4,
    name: "David Thompson",
    designation: "Founder, E-commerce Plus",
    review: "Their e-commerce solutions helped us achieve 250% growth in sales. The website design is not only beautiful but also highly functional. Worth every investment."
  },
  {
    id: 5,
    name: "Lisa Park",
    designation: "Operations Manager, HealthTech",
    review: "From concept to execution, they delivered beyond our expectations. The video production quality is cinema-grade and perfectly captures our brand essence."
  },
  {
    id: 6,
    name: "James Wilson",
    designation: "Creative Director, Agency Pro",
    review: "Their consultation services provided invaluable insights that reshaped our entire marketing strategy. The ROI we've seen is exceptional. Professional and results-driven team."
  }
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex-shrink-0 w-80 mx-4 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-500">
      {/* Double Quotes Icon */}
      <div className="text-4xl text-[#00D3F2] mb-4 font-serif">&quot;</div>
      
      {/* Review Text */}
      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4">
        {testimonial.review}
      </p>
      
      {/* Reviewer Info */}
      <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
        <h4 className="font-semibold text-gray-900 dark:text-white text-base mb-1">
          {testimonial.name}
        </h4>
        <p className="text-[#1595A8FF] dark:text-blue-400 text-sm font-medium">
          {testimonial.designation}
        </p>
      </div>
    </div>
  );
};

const MarqueeTestimonials = () => {
  const [isPaused, setIsPaused] = React.useState(false);
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Loved by Clients.  <span className="text-[#14B8D1FF]">Backed by Results.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            What our customers say about the collaboration
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling Container with Pause on Hover */}
        <motion.div
          className="flex"
          animate={{
            x: [-1600, 0]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
        >
          {allTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeTestimonials;
