"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: "When you create a great result, customers tell each other about it. This quote absolutely applies to Amce Studios. With a lot of hard work and quick implementation, the team from amce studios turned our wishes into reality. We, Craft Engineering GmbH, say thank you.",
      author: "Thore Weiss",
      position: "Managing Director, Craft Engineering GmbH"
    },
    {
      id: 2,
      text: "Outstanding service and incredible attention to detail. The team delivered beyond our expectations and truly understood our vision from day one. We couldn't be happier with the results.",
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

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-gray-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 h-150 justify-center flex items-center">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <h3 className="text-gray-600 text-sm font-medium mb-6 text-center">
            What our customers say about the collaboration
          </h3>
          
          <div
            className={`transition-opacity duration-300 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <blockquote className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6 text-center px-4">
              "{currentTestimonial.text}"
            </blockquote>
            
            <div className="text-center mb-6">
              <div className="font-semibold text-gray-900 mb-1">
                {currentTestimonial.author}
              </div>
              <div className="text-gray-600 text-sm">
                {currentTestimonial.position}
              </div>
            </div>
          </div>

          {/* Navigation for mobile */}
          <div className="flex justify-center gap-3 mb-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
              disabled={isTransitioning}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
              disabled={isTransitioning}
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Dots indicator for mobile */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isTransitioning) return;
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsTransitioning(false);
                  }, 300);
                }}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:items-start lg:gap-8">
          {/* Left side - Header and Navigation */}
          <div className="flex-shrink-0 w-64">
            <h3 className="text-gray-600 text-md font-bold mb-8">
              Loved by Brands. Backed by Results
            </h3>
            
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                disabled={isTransitioning}
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                disabled={isTransitioning}
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Right side - Testimonial Content */}
          <div className="flex-1">
            <div
              className={`transition-opacity duration-300 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <blockquote className="text-gray-800 text-lg leading-relaxed mb-8">
                "{currentTestimonial.text}"
              </blockquote>
              
              <div>
                <div className="font-semibold text-gray-900 mb-1">
                  {currentTestimonial.author}
                </div>
                <div className="text-gray-600 text-sm">
                  {currentTestimonial.position}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots indicator for desktop */}
        <div className="hidden lg:flex lg:justify-center lg:mt-12 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isTransitioning) return;
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsTransitioning(false);
                }, 300);
              }}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;