"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink, Calendar, Tag } from "lucide-react";

const PortfolioPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  // Sample portfolio data - replace with your actual projects
  const portfolioItems = [
    {
      id: 1,
      title: "Brand Campaign Video",
      category: "Video Production",
      date: "2024",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "#",
      description:
        "Creative brand campaign showcasing innovative storytelling and visual effects.",
      tags: ["Branding", "Motion Graphics", "Commercial"],
    },
    {
      id: 2,
      title: "Product Launch Campaign",
      category: "Digital Marketing",
      date: "2024",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "#",
      description:
        "Comprehensive digital campaign for product launch across multiple platforms.",
      tags: ["Social Media", "Content Creation", "Strategy"],
    },
    {
      id: 3,
      title: "Corporate Documentary",
      category: "Video Production",
      date: "2024",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "#",
      description:
        "Documentary-style corporate video highlighting company culture and values.",
      tags: ["Documentary", "Corporate", "Storytelling"],
    },
    {
      id: 4,
      title: "Social Media Campaign",
      category: "Content Creation",
      date: "2024",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "#",
      description:
        "Engaging social media content series with high engagement rates.",
      tags: ["Social Media", "Animation", "Digital"],
    },
    {
      id: 5,
      title: "Event Coverage",
      category: "Video Production",
      date: "2024",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "#",
      description: "Professional event documentation with cinematic quality.",
      tags: ["Events", "Live Coverage", "Editing"],
    },
    {
      id: 6,
      title: "Explainer Video Series",
      category: "Animation",
      date: "2024",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "#",
      description:
        "Educational video series with custom animations and graphics.",
      tags: ["Education", "Animation", "Graphics"],
    },
  ];

  const getCardZIndex = (index) => {
    if (selectedCard === null) {
      return 10 - index; // Default stacking
    }
    return selectedCard === index ? 50 : 10 - index;
  };

  const getCardPosition = (index) => {
    if (index >= 3) return {}; // Only animate first 3 cards

    if (selectedCard === null) {
      // Default stacked position
      return {
        x: index * 20,
        y: index * 30,
        rotate: index * 2 - 2,
      };
    } else if (selectedCard === index) {
      // Selected card comes to front
      return {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1.05,
      };
    } else {
      // Other cards move back
      return {
        x: index * 25,
        y: index * 35,
        rotate: index * 3 - 3,
        scale: 0.95,
      };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <div className="container mx-auto px-6 pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing our creative excellence in digital media production and
            marketing campaigns
          </p>
        </motion.div>

        {/* Interactive Cards Section */}
        <div className="mb-20">
          <div className="relative max-w-4xl mx-auto">
            {/* First 3 cards with special animation */}
            {/* Featured Projects Stacked Section */}
            <div className="relative flex justify-center items-center h-[42rem]">
              {portfolioItems.slice(0, 3).map((item, index) => (
                <motion.div
                  key={item.id}
                  className="absolute w-[20rem] h-[34rem] cursor-pointer" // Portrait size
                  style={{ zIndex: getCardZIndex(index) }}
                  animate={{
                    ...getCardPosition(index),
                    // More spacing between cards
                    x:
                      selectedCard === null
                        ? index * 80 - 80
                        : selectedCard === index
                          ? 0
                          : (index - selectedCard) * 100,
                    y:
                      selectedCard === null
                        ? index * 30
                        : selectedCard === index
                          ? 0
                          : 40,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  onClick={() =>
                    setSelectedCard(selectedCard === index ? null : index)
                  }
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shadow-2xl">
                    {/* Portrait Graphic / Thumbnail */}
                    <div className="relative w-full h-4/5 bg-gray-700">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-4 left-4 bg-black/50 rounded px-3 py-1 text-sm">
                        {item.date}
                      </div>
                    </div>

                    {/* Card Info */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Regular Grid for Remaining Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.slice(3).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105">
                {/* Video thumbnail */}
                <div className="relative h-48 bg-gray-700 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded px-2 py-1">
                    <Calendar className="w-3 h-3 inline mr-1" />
                    <span className="text-xs text-white">{item.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-md flex items-center"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something amazing for your brand
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get In Touch
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPage;
