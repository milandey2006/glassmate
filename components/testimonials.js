"use client";
import React from 'react';
import { motion } from 'motion/react';

const testimonials = [
  {
    id: 1,
    name: "Bharati Mahimkar",
    designation: "Director - Operations & Clinical, EAP-India",
    review: "GlassMate Media truly understands our needs and delivers videos and creatives that ensure outstanding results. Their team&spos;s creativity and professionalism made it easy to bring our message to life through impactful videos and graphics. I'd recommend them to anyone looking to make a mark on social media"
  },
  {
    id: 2,
    name: "Mandar Gite",
    designation: "Co-Founder, LeapForWord",
    review: "I've had the privilege of seeing Sudarshan lead impactful media projects with creativity, speed, and precision — including delivering 50 educational TV episodes for Doordarshan in just 45 days while at LeapForWord. His ability to manage teams, craft compelling content, and execute at scale is exceptional. Now, with GlassMate Media, he brings that same vision and dedication to help brands tell their stories with the same passion and excellence."
  },
  {
    id: 3,
    name: "Roopali Mohite",
    designation: "Deputy Manager, TATA AutoComp Systems Ltd.",
    review: "I had the opportunity to work with Sudarshan during his time at LeapForWord, where his creativity and dedication truly stood out. He played a key role in producing videos that captured our projects on the ground and significantly boosted our digital content efforts. Today, with GlassMate Media, Sudarshan brings that same level of attention to detail and innovative thinking — helping brands create engaging, impactful, and memorable media"
  },
  {
    id: 4,
    name: "Krit Gupta",
    designation: "Software Developer, Rutgers SAS-IT",
    review: "I had the pleasure of working with Sudarshan for a year as part of his media team. His expertise in event management and media production ensured the seamless execution of complex events. The leadership and organizational skills he demonstrated then are the same qualities he now channels into GlassMate Media — delivering projects with precision, creativity, and measurable impact."
  },
  {
    id: 5,
    name: "Disha Thakkar",
    designation: "Product & Project Manager - LeapForWord",
    review: "I worked with Sudarshan at LeapForWord, where his design vision brought our content to life. Whether it was books, digital audio, or video content, his ability to visualize the end product from the very start made the process impactful and efficient. His calm approach under pressure and willingness to go the extra mile stood out then — and those same qualities now define his work at GlassMate Media."
  },
  {
    id: 6,
    name: "Jaspreet Singh",
    designation: "CSR Consultant",
    review: "As a CSR Consultant, I often rely on strong visual storytelling and creative narratives to convey the real impact of the programs I evaluate. My collaboration with GlassMate Media has been nothing short of exceptional.A special mention goes to Sudarshan, whose creative insights have consistently elevated my CSR impact stories. His ability to translate complex project outcomes into engaging and emotionally resonant content has helped me communicate my client's work in a way that is both authentic and compelling. The attention to detail, innovative approach, and understanding of CSR nuances have made every project we've worked on together more impactful.I truly appreciate the professionalism and creativity that GlassMate Media brings to the table, and I look forward to continuing our association."
  },
  {
    id: 7,
    name: "Disha Thakkar",
    designation: "Product & Project Manager - LeapForWord",
    review: "I worked with Sudarshan at LeapForWord, where his design vision brought our content to life. Whether it was books, digital audio, or video content, his ability to visualize the end product from the very start made the process impactful and efficient. His calm approach under pressure and willingness to go the extra mile stood out then — and those same qualities now define his work at GlassMate Media."
  },
  {
    id: 8,
    name: "Ujjwal Bahal",
    designation: "Founder - TrueChem & ChemFlow | Co-Founder - GroFo Foundation",
    review: "Working with GlassMate Media has been a game-changer for our brands. Sudarshan and his team brought unmatched clarity to our brand guidelines and created pitch decks that not only looked stunning but communicated our story with precision. Their media strategy and consultation helped us position ourselves effectively in a competitive market, while their media production quality exceeded our expectations. GlassMate Media isn't just a service provider — they're a creative partner invested in our success"
  },
  {
    id: 8,
    name: "Dr. Ameya Ambulkar",
    designation: "Professor | Speaker & Researcher | Entrepreneur",
    review: "Working with GlassMate Media has been an excellent experience. They collaborated with me to create a detailed content strategy, bringing strong skills in video production, post-production, and a sharp creative eye. One of the highlights was how they took a complex campaign idea and broke it down into a clear, step-by-step execution plan- from scripting and storyboarding to final delivery. In another instance, their research-driven approach helped us identify the right hooks and formats that actually led to better engagement and conversions. Every project was handled with a clear focus on the outcome, and they consistently delivered exactly what was needed. I am very happy with their service and look forward to working with them again."
  },
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
            Words That Keep  <span className="text-[#14B8D1FF]">Us Going.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Real Feedback. Real Results.
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
