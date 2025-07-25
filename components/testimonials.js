// "use client";
// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// // Data for testimonials
// const testimonials = [
//   {
//     id: 1,
//     text: "When you create a great result, customers tell each other about it. This quote absolutely applies to Amce Studios. With a lot of hard work and quick implementation, the team from amce studios turned our wishes into reality. We, Craft Engineering GmbH, say thank you.",
//     author: "Thore Weiss",
//     position: "Managing Director, Craft Engineering GmbH",
//     avatar: "TW"
//   },
//   {
//     id: 2,
//     text: "Outstanding service and incredible attention to detail. The team delivered beyond our expectations and truly understood our vision from day one. We couldn't be happier with the results.",
//     author: "Sarah Johnson",
//     position: "CEO, Innovation Labs",
//     avatar: "SJ"
//   },
//   {
//     id: 3,
//     text: "Professional, efficient, and creative. Working with this team has been a game-changer for our business. They transformed our ideas into something truly remarkable.",
//     author: "Michael Chen",
//     position: "Product Manager, Tech Solutions Inc.",
//     avatar: "MC"
//   }
// ];

// // Individual testimonial card component
// const TestimonialCard = ({ testimonial, isActive, position }) => {
//   const getCardClasses = () => {
//     const baseClasses = "absolute top-0 w-full transition-all duration-500 ease-in-out";

//     switch (position) {
//       case 'active':
//         return `${baseClasses} translate-x-0 opacity-100 scale-100 z-10`;
//       case 'next':
//         return `${baseClasses} translate-x-full opacity-60 scale-95 z-0`;
//       case 'prev':
//         return `${baseClasses} -translate-x-full opacity-60 scale-95 z-0`;
//       default:
//         return `${baseClasses} translate-x-full opacity-0 scale-90 z-0`;
//     }
//   };

//   return (
//     <div className={getCardClasses()}>
//       <div className="bg-white rounded-2xl shadow-lg p-8 mx-4 relative overflow-hidden">
//         {/* Decorative quote icon */}
//         <div className="absolute top-6 right-6 opacity-10">
//           <Quote className="w-16 h-16 text-gray-400" />
//         </div>

//         {/* Quote marks */}
//         <div className="flex items-start mb-6">
//           <Quote className="w-8 h-8 text-blue-500 mr-4 flex-shrink-0 mt-1" />
//           <blockquote className="text-gray-700 text-lg leading-relaxed italic">
//             {testimonial.text}
//           </blockquote>
//         </div>

//         {/* Author info */}
//         <div className="flex items-center mt-8 pt-6 border-t border-gray-100">
//           <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
//             {testimonial.avatar}
//           </div>
//           <div>
//             <div className="font-semibold text-gray-900 text-lg">{testimonial.author}</div>
//             <div className="text-gray-600 text-sm">{testimonial.position}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const TestimonialSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   // Auto-play functionality
//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying]);

//   const handleNavigation = (newIndex) => {
//     setCurrentIndex(newIndex);
//     setIsAutoPlaying(false);
//     // Resume auto-play after 10 seconds
//     setTimeout(() => setIsAutoPlaying(true), 10000);
//   };

//   const handleNext = () => {
//     const newIndex = (currentIndex + 1) % testimonials.length;
//     handleNavigation(newIndex);
//   };

//   const handlePrev = () => {
//     const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
//     handleNavigation(newIndex);
//   };

//   const getCardPosition = (index) => {
//     if (index === currentIndex) return 'active';
//     if (index === (currentIndex + 1) % testimonials.length) return 'next';
//     if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) return 'prev';
//     return 'hidden';
//   };

//   return (
//     <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//             Loved by Clients. Backed by Results.
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             What our customers say about the collaboration
//           </p>
//         </div>

//         {/* Testimonial Cards Container */}
//         <div className="relative">
//           <div className="relative h-80 lg:h-96 overflow-hidden">
//             {testimonials.map((testimonial, index) => (
//               <TestimonialCard
//                 key={testimonial.id}
//                 testimonial={testimonial}
//                 isActive={index === currentIndex}
//                 position={getCardPosition(index)}
//               />
//             ))}
//           </div>

//           {/* Navigation Controls */}
//           <div className="flex items-center justify-center mt-12 gap-8">
//             <button
//               onClick={handlePrev}
//               className="w-14 h-14 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:shadow-xl group"
//             >
//               <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
//             </button>

//             {/* Dots Indicator */}
//             <div className="flex gap-3">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleNavigation(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     index === currentIndex
//                       ? 'bg-blue-500 scale-125'
//                       : 'bg-gray-300 hover:bg-gray-400'
//                   }`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={handleNext}
//               className="w-14 h-14 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:shadow-xl group"
//             >
//               <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
//             </button>
//           </div>

//           {/* Progress Bar */}
//           {/* <div className="mt-8 max-w-md mx-auto">
//             <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
//               <div
//                 className="h-full bg-blue-500 rounded-full transition-all duration-300"
//                 style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
//               />
//             </div>
//           </div> */}
//         </div>

//         {/* Auto-play indicator */}
//         {/* <div className="text-center mt-6">
//           <button
//             onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//             className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'} Auto-slide
//           </button>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;

import React from "react";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote:
        "I have worked with Sudarshan at LeapForWord. While I am a Content developer he is the designer of the same. He has good skill sets at Visualizations of E learning Products be it Books or Digital Audio Video Content. His ability to look through the final outcome on the drawing board itself makes the product designing journey Impactful. He is a great team player who never says No. Irrespective of how pressurizing the situation or deadline is !!! :) :)",
      name: "Disha Thakkar",
      designation: "Product Manager at LeapForWord",
      src: "/testi/disha.jpeg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
     <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Loved by Clients. Backed by Results.
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        What our customers say about the collaboration
      </p>
      <div className="">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
      //{" "}
    </div>
    </section>
  );
};

export default TestimonialSection;
