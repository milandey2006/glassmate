
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
        "It has been a matter of pride and joy to see Sudarshan grow as a professional and as a person at LeapForWord, where he has demonstrated exceptional professional skills and commitment to our mission of enhancing English literacy. Over the years, he has built and led a media production team that has improved impact of our educational content. I was in awe of the media team's accomplishment when they delivered 50 episodes for Doordarshan &spos; s educational TV series within an astonishing 45-day timeframe—Sudarshan was leading from the front!",
      name: "Mandar Gite",
      designation: "Co-Founder @ LeapForWord",
      src: "/testi/mandar.jpeg",
    },
    {
      quote:
        "I worked with Sudarshan at Leapforword, where he consistently impressed me with his creativity and dedication. He played a key role in producing amazing videos that captured our projects on the ground and significantly contributed to our digital content development efforts. His attention to detail and innovative ideas helped elevate our content, making it more engaging and impactful. I highly recommend Sudarshan for any project that requires a talented and driven professional.",
      name: "Roopali Mohite ",
      designation: "#CSR #Corporate Social Responsibility",
      src: "/testi/Roopali.jpeg",
    },
    {
      quote:
        "Excellent Professional in Digital Marketing and Content Development. Highly dedicated and committed fellow. It was an enriching experience working with Sudharshan, though for a short period. Definitely he will be the best choice and will be a great asset, whichever company he works for.",
      name: "SASTHA RAJAGOPAL",
      designation: "Manager ~ Business Excellence",
      src: "/testi/satsha.jpeg",
    },
    {
      quote:
        "I had the pleasure of working with Sudarshan for a year as part of his media team. His expertise in event management operations and media production was instrumental to our success. Sudarshan excelled in managing and organizing the WPC, a key competition held by our organization. His leadership and organizational skills ensured smooth execution of complex events. I highly recommend Sudarshan for roles requiring strong project management and media production capabilities.",
      name: "Krit Gupta ",
      designation: "Software Developer at Rutgers SAS-IT",
      src: "/testi/krit.jpeg",
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
      {" "}
    </div>
    </section>
  );
};

export default TestimonialSection;
