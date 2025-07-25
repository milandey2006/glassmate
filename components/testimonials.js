
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
