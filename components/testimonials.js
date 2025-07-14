"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Data for testimonials
const testimonials = [
  {
    id: 1,
    text: "When you create a great result, customers tell each other about it. This quote absolutely applies to Amce Studios. With a lot of hard work and quick implementation, the team from amce studios turned our wishes into reality. We, Craft Engineering GmbH, say thank you.",
    author: "Thore Weiss",
    position: "Managing Director, Craft Engineering GmbH"
  },
  {
    id: 2,
    text: "Outstanding service and incredible attention to detail. The team delivered beyond our expectations and truly understood our vision from day one. We couldnt be happier with the results.",
    author: "Sarah Johnson",
    position: "CEO, Innovation Labs"
  },
  {
    id: 3,
    text: "Professional, efficient, and creative. Working with this team has been a game-changer for our business. They transformed our ideas into something truly remarkable.",
    author: "Michael Chen",
    position: "Product Manager, Tech Solutions Inc."
  }
];

// Reusable component for displaying the testimonial content
const TestimonialContent = ({ testimonial, isTransitioning, className = '' }) => (
  <div
    className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'} ${className}`}
  >
    <blockquote className="text-gray-800 text-lg leading-relaxed mb-8">
      {/* FIXED: Replaced " with HTML entities */}
      &ldquo;{testimonial.text}&rdquo;
    </blockquote>
    <div>
      <div className="font-semibold text-gray-900 mb-1">{testimonial.author}</div>
      <div className="text-gray-600 text-sm">{testimonial.position}</div>
    </div>
  </div>
);


const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigation = (newIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 300);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    handleNavigation(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    handleNavigation(newIndex);
  };

  const handleDotClick = (index) => {
    handleNavigation(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[500px]">
      <div className="max-w-7xl mx-auto w-full">

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <h3 className="text-gray-600 text-sm font-medium mb-8 text-center">
            What our customers say about the collaboration
          </h3>
          <TestimonialContent
            testimonial={currentTestimonial}
            isTransitioning={isTransitioning}
            className="text-center"
          />
          <div className="flex justify-center gap-4 mt-8 mb-6">
            <button onClick={handlePrev} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors" disabled={isTransitioning}>
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button onClick={handleNext} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors" disabled={isTransitioning}>
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button key={index} onClick={() => handleDotClick(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'}`} />
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:items-start lg:gap-12">
          <div className="flex-shrink-0 w-72">
            <h3 className="text-gray-800 text-2xl font-bold mb-10">
              Loved by Brands. Backed by Results.
            </h3>
            <div className="flex gap-3">
              <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors" disabled={isTransitioning}>
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button onClick={handleNext} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors" disabled={isTransitioning}>
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
             <TestimonialContent
                testimonial={currentTestimonial}
                isTransitioning={isTransitioning}
              />
            <div className="flex mt-12 gap-2">
                {testimonials.map((_, index) => (
                    <button key={index} onClick={() => handleDotClick(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'}`} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;