"use client";
import React from "react";

// Replace these with your actual logo image paths
const clientLogos = [
  "/clients/atlas.png",
  "/clients/EAp.png",
  "/clients/hygine.png",
  "/clients/leap.png",
  "/clients/nihar.png",
  "/clients/streax.png",
  "/clients/sudlife.png",
];

const ClientLogoMarquee = () => (
  <section className="py-7 bg-[#F4F2FE] w-full">
    <div className="flex items-center justify-center gap-8">
      {/* Trusted By Label */}
      <span className="text-base md:text-lg font-semibold text-gray-900 whitespace-nowrap ml-2 md:ml-8 mr-4">
        Trusted by<br />Top Companies
      </span>

      {/* Marquee container */}
      <div className="relative overflow-x-hidden w-[90vw] max-w-[800px]">
        <div className="group flex items-center">
          <div className="marquee-track flex gap-10">
            {/* Show logos twice for seamless slide */}
            {[...clientLogos, ...clientLogos].map((logo, idx) => (
              <div
                key={idx}
                // Changed from h-[70px] to h-[85px]
                className="bg-white rounded-md shadow-sm flex items-center justify-center w-[95px] h-[95px] mx-2 border border-gray-200"
              >
                <img
                  src={logo}
                  alt={`Client logo ${idx + 1}`}
                  // Changed from h-12 w-12 to h-16 w-16
                  className="h-16 w-16 object-contain"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Style for marquee */}
        <style jsx>{`
          .marquee-track {
            will-change: transform;
            animation: slide-right 22s linear infinite;
          }
          .group:hover .marquee-track {
            animation-play-state: paused;
          }
          @keyframes slide-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          @media (max-width: 768px) {
            .marquee-track div {
              // Changed from width: 54px; height: 54px; to 60px
              width: 60px; height: 60px;
            }
          }
        `}</style>
      </div>
    </div>
  </section>
);

export default ClientLogoMarquee;