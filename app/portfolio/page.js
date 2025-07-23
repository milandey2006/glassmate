"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink, Calendar, Tag } from "lucide-react";

const PortfolioPage = () => {
  const [cardOrder, setCardOrder] = useState([0, 1, 2]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Sample portfolio data with YouTube video IDs
  const portfolioItems = [
    {
      id: 1,
      title: "Brand Campaign Video",
      category: "Video Production",
      date: "2024",
      thumbnail: "/api/placeholder/400/300",
      youtubeId: "dQw4w9WgXcQ",
      description: "Creative brand campaign showcasing innovative storytelling and visual effects.",
      tags: ["Branding", "Motion Graphics", "Commercial"],
      relatedVideos: [
        { id: "dQw4w9WgXcQ", title: "Main Campaign Video" },
        { id: "ScMzIvxBSi4", title: "Behind the Scenes" },
        { id: "L_jWHffIx5E", title: "Director's Cut" },
        { id: "fJ9rUzIMcZQ", title: "Extended Version" },
        { id: "QB7ACr7pUuE", title: "Making Of" },
        { id: "ZbZSe6N_BXs", title: "Client Testimonial" }
      ]
    },
    {
      id: 2,
      title: "Product Launch Campaign",
      category: "Digital Marketing",
      date: "2024",
      thumbnail: "/api/placeholder/400/300",
      youtubeId: "jNQXAC9IVRw",
      description: "Comprehensive digital campaign for product launch across multiple platforms.",
      tags: ["Social Media", "Content Creation", "Strategy"],
      relatedVideos: [
        { id: "jNQXAC9IVRw", title: "Launch Teaser" },
        { id: "dQw4w9WgXcQ", title: "Product Demo" },
        { id: "ScMzIvxBSi4", title: "Social Media Ad 1" },
        { id: "L_jWHffIx5E", title: "Social Media Ad 2" },
        { id: "fJ9rUzIMcZQ", title: "Influencer Collaboration" },
        { id: "QB7ACr7pUuE", title: "Campaign Results" }
      ]
    },
    {
      id: 3,
      title: "Corporate Documentary",
      category: "Video Production",
      date: "2024",
      thumbnail: "/api/placeholder/400/300",
      youtubeId: "9bZkp7q19f0",
      description: "Documentary-style corporate video highlighting company culture and values.",
      tags: ["Documentary", "Corporate", "Storytelling"],
      relatedVideos: [
        { id: "9bZkp7q19f0", title: "Full Documentary" },
        { id: "dQw4w9WgXcQ", title: "Employee Interviews" },
        { id: "ScMzIvxBSi4", title: "Company Culture" },
        { id: "L_jWHffIx5E", title: "Office Tour" },
        { id: "fJ9rUzIMcZQ", title: "Leadership Stories" },
        { id: "QB7ACr7pUuE", title: "Vision & Mission" }
      ]
    },
    {
      id: 4,
      title: "Social Media Campaign",
      category: "Content Creation",
      date: "2024",
      thumbnail: "/api/placeholder/400/300",
      youtubeId: "kJQP7kiw5Fk",
      description: "Engaging social media content series with high engagement rates.",
      tags: ["Social Media", "Animation", "Digital"],
      relatedVideos: [
        { id: "kJQP7kiw5Fk", title: "Campaign Overview" },
        { id: "dQw4w9WgXcQ", title: "Instagram Stories" },
        { id: "ScMzIvxBSi4", title: "TikTok Content" },
        { id: "L_jWHffIx5E", title: "Facebook Ads" },
        { id: "fJ9rUzIMcZQ", title: "YouTube Shorts" },
        { id: "QB7ACr7pUuE", title: "LinkedIn Posts" }
      ]
    },
    {
      id: 5,
      title: "Event Coverage",
      category: "Video Production",
      date: "2024",
      thumbnail: "/api/placeholder/400/300",
      youtubeId: "lDK9QqIzhwk",
      description: "Professional event documentation with cinematic quality.",
      tags: ["Events", "Live Coverage", "Editing"],
      relatedVideos: [
        { id: "lDK9QqIzhwk", title: "Event Highlights" },
        { id: "dQw4w9WgXcQ", title: "Opening Ceremony" },
        { id: "ScMzIvxBSi4", title: "Keynote Speeches" },
        { id: "L_jWHffIx5E", title: "Panel Discussions" },
        { id: "fJ9rUzIMcZQ", title: "Networking Sessions" },
        { id: "QB7ACr7pUuE", title: "Closing Remarks" }
      ]
    },
    {
      id: 6,
      title: "Explainer Video Series",
      category: "Animation",
      date: "2024",
      thumbnail: "/api/placeholder/400/300",
      youtubeId: "y8Kyi0WNg40",
      description: "Educational video series with custom animations and graphics.",
      tags: ["Education", "Animation", "Graphics"],
      relatedVideos: [
        { id: "y8Kyi0WNg40", title: "Series Introduction" },
        { id: "dQw4w9WgXcQ", title: "Episode 1: Basics" },
        { id: "ScMzIvxBSi4", title: "Episode 2: Advanced" },
        { id: "L_jWHffIx5E", title: "Episode 3: Expert Tips" },
        { id: "fJ9rUzIMcZQ", title: "Episode 4: Case Studies" },
        { id: "QB7ACr7pUuE", title: "Episode 5: Conclusion" }
      ]
    },
  ];

  // YouTube Embed Component
  const YouTubeEmbed = ({ videoId, title }) => {
    return (
      <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  };

  // Video Modal Component
  const VideoModal = ({ project, isOpen, onClose }) => {
    if (!project) return null;

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-gray-900 rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-medium text-white">
                    {project.category}
                  </span>
                  <span className="text-gray-400 text-sm">{project.date}</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-3">{project.title}</h2>
                <p className="text-gray-300 text-lg">{project.description}</p>
              </div>

              {/* Video Grid */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Project Videos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {project.relatedVideos?.map((video, index) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <YouTubeEmbed videoId={video.id} title={video.title} />
                      <h4 className="text-white font-medium mt-3 group-hover:text-blue-400 transition-colors">
                        {video.title}
                      </h4>
                    </motion.div>
                  ))}
                </div>

                {/* Project Tags */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm hover:bg-gray-600 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  // Modal control functions
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  // Handle card position swapping
  const handleCardClick = (clickedPosition) => {
    if (selectedCard !== null) {
      setSelectedCard(null);
      return;
    }

    const newOrder = [...cardOrder];
    
    if (clickedPosition === 0) {
      // Left card clicked - rotate left
      newOrder[0] = cardOrder[2]; // right goes to left
      newOrder[1] = cardOrder[0]; // left goes to center  
      newOrder[2] = cardOrder[1]; // center goes to right
    } else if (clickedPosition === 2) {
      // Right card clicked - rotate right
      newOrder[0] = cardOrder[1]; // center goes to left
      newOrder[1] = cardOrder[2]; // right goes to center
      newOrder[2] = cardOrder[0]; // left goes to right
    } else {
      // Middle card clicked - just show selection state
      setSelectedCard(1);
      return;
    }
    
    setCardOrder(newOrder);
  };

  const getCardZIndex = (position) => {
    if (selectedCard === 1) {
      return position === 1 ? 50 : 10;
    }
    
    // Middle position always has highest z-index
    if (position === 1) return 30; // Middle card on top
    if (position === 0) return 20; // Left card
    if (position === 2) return 25; // Right card
    return 10;
  };

  // Responsive card positioning
  const getCardPosition = (position) => {
    if (selectedCard === 1 && position === 1) {
      // Selected middle card
      return {
        x: 0,
        y: -20,
        rotate: 0,
        scale: 1.1,
      };
    } else if (selectedCard === 1) {
      // Other cards when middle is selected
      const backPositions = [
        { x: -120, y: 60, rotate: -12, scale: 0.9 }, // Left
        { x: 0, y: 40, rotate: 0, scale: 0.9 },      // Middle
        { x: 120, y: 60, rotate: 12, scale: 0.9 }    // Right
      ];
      return backPositions[position];
    }

    // Responsive default positions
    const positions = [
      { x: 0, y: 0, rotate: 0 }, // Left card
      { x: 0, y: 0, rotate: 0 }, // Middle card - on top
      { x: 0, y: 0, rotate: 0 }  // Right card
    ];
    return positions[position];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-8 sm:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Showcasing our creative excellence in digital media production and
            marketing campaigns
          </p>
        </motion.div>

        {/* Responsive Overlapping Cards - All Screen Sizes with Proper Padding */}
        <div className="mb-20 px-4 sm:px-8">
          <div className="relative max-w-6xl mx-auto">
            <div className="relative flex justify-center items-center h-[30rem] sm:h-[35rem] lg:h-[45rem] overflow-visible">
              {[0, 1, 2].map((position) => {
                const itemIndex = cardOrder[position];
                const item = portfolioItems[itemIndex];
                
                return (
                  <motion.div
                    key={`${item.id}-${position}`}
                    className={`absolute cursor-pointer
                      ${position === 0 ? 
                        'w-[14rem] h-[22rem] sm:w-[16rem] sm:h-[24rem] md:w-[18rem] md:h-[28rem] lg:w-[20rem] lg:h-[32rem] -translate-x-[70px] sm:-translate-x-[80px] md:-translate-x-[100px] lg:-translate-x-[120px] translate-y-[20px] sm:translate-y-[25px] md:translate-y-[30px] lg:translate-y-[40px] -rotate-[6deg] sm:-rotate-[7deg] lg:-rotate-[8deg]' : ''}
                      ${position === 1 ? 
                        'w-[16rem] h-[26rem] sm:w-[18rem] sm:h-[28rem] md:w-[20rem] md:h-[32rem] lg:w-[22rem] lg:h-[36rem] translate-x-0 translate-y-0 rotate-0' : ''}
                      ${position === 2 ? 
                        'w-[14rem] h-[22rem] sm:w-[16rem] sm:h-[24rem] md:w-[18rem] md:h-[28rem] lg:w-[20rem] lg:h-[32rem] translate-x-[70px] sm:translate-x-[80px] md:translate-x-[100px] lg:translate-x-[120px] translate-y-[20px] sm:translate-y-[25px] md:translate-y-[30px] lg:translate-y-[40px] rotate-[6deg] sm:rotate-[7deg] lg:rotate-[8deg]' : ''}
                    `}
                    style={{ zIndex: getCardZIndex(position) }}
                    animate={getCardPosition(position)}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    onClick={() => handleCardClick(position)}
                    whileHover={{ scale: selectedCard === null ? 1.02 : 1.05 }}
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                      {/* Portrait Graphic / Thumbnail */}
                      <div className="relative w-full h-4/5 bg-gray-700 overflow-hidden">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1 text-sm border border-gray-600">
                          <Calendar className="w-3 h-3 inline mr-1" />
                          {item.date}
                        </div>
                        
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
                            <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Card Info */}
                      <div className="p-3 sm:p-4 lg:p-6 h-1/5 flex flex-col justify-center">
                        <div className="flex items-center justify-between mb-1 sm:mb-2 lg:mb-3">
                          <span className="text-xs bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 lg:px-3 py-1 rounded-full font-medium">
                            {item.category}
                          </span>
                          <ExternalLink className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-gray-400 hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-sm sm:text-base lg:text-xl font-bold text-white leading-tight">
                          {item.title}
                        </h3>
                      </div>

                      {/* Hover overlay with description */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 lg:p-6"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <p className="text-gray-200 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {item.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-xs bg-white/20 text-white px-2 py-1 rounded-md backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Responsive Grid for Remaining Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
          {portfolioItems.slice(3).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105">
                {/* Video thumbnail */}
                <div className="relative h-40 sm:h-48 bg-gray-700 overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 sm:w-12 h-8 sm:h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded px-2 py-1">
                    <Calendar className="w-3 h-3 inline mr-1" />
                    <span className="text-xs text-white">{item.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
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
          className="text-center mt-12 sm:mt-20 px-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let&apos;s collaborate to create something amazing for your brand
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />

      {/* Custom CSS for hiding scrollbars */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default PortfolioPage;
