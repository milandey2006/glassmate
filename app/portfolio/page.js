"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Heart, MessageCircle, Share, Bookmark, MoreHorizontal, ChevronLeft, ChevronRight, Calendar, Tag, ExternalLink } from "lucide-react";

const ResponsivePortfolioGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlides, setCurrentSlides] = useState({
    square: 0,
    portrait_video: 0,
    portrait_photo: 0
  });

  // Portfolio items separated by type
  const imageItems = [
    {
      id: 1,
      type: "image",
      aspectRatio: "square", // 1080x1080
      title: "Brand Identity Design",
      category: "Graphic Design",
      src: "/api/placeholder/300/300",
      height: "h-80",
      likes: 234,
      comments: 12,
      description: "Complete brand identity redesign for a tech startup"
    },
    {
      id: 3,
      type: "image",
      aspectRatio: "portrait", // 1080x1920
      title: "UI/UX Design",
      category: "Web Design",
      src: "/api/placeholder/300/400",
      height: "h-72",
      likes: 189,
      comments: 8,
      description: "Mobile app interface design concept"
    },
    {
      id: 5,
      type: "image",
      aspectRatio: "square", // 1080x1080
      title: "Photography Portfolio",
      category: "Photography",
      src: "/api/placeholder/300/300",
      height: "h-96",
      likes: 445,
      comments: 19,
      description: "Portrait photography session highlights"
    },
    {
      id: 6,
      type: "image",
      aspectRatio: "portrait", // 1080x1920
      title: "Logo Collection",
      category: "Branding",
      src: "/api/placeholder/300/400",
      height: "h-64",
      likes: 123,
      comments: 6,
      description: "Collection of recent logo designs"
    },
    {
      id: 8,
      type: "image",
      aspectRatio: "square", // 1080x1080
      title: "Website Design",
      category: "Web Design",
      src: "/api/placeholder/300/300",
      height: "h-88",
      likes: 678,
      comments: 32,
      description: "E-commerce website redesign project"
    },
    {
      id: 9,
      type: "image",
      aspectRatio: "portrait",
      title: "Illustration Series",
      category: "Illustration",
      src: "/api/placeholder/300/480",
      height: "h-[30rem]",
      likes: 234,
      comments: 11,
      description: "Digital illustration collection"
    },
    {
      id: 10,
      type: "image",
      aspectRatio: "square",
      title: "Print Design",
      category: "Print",
      src: "/api/placeholder/300/300",
      height: "h-84",
      likes: 167,
      comments: 9,
      description: "Magazine layout and print materials"
    },
    {
    id: 81, // New unique ID
    type: "image",
    aspectRatio: "square", // 1080x1080
    title: "Creative Campaign",
    category: "Marketing",
    src: "/api/placeholder/300/300",
    height: "h-80", // Adjust height as needed
    likes: 156,
    comments: 8,
    description: "Social media marketing campaign design"
  }
  ];

  const videoItems = [
    {
      id: 2,
      type: "video",
      title: "Documentary | Storytelling",
      category: "Animation",
      date: "2024",
      thumbnail: "https://cdn.wallpapersafari.com/54/45/1c2FPv.jpg",
      youtubeId: "CUAAT_5vhDw",
      description: "Showcase of latest motion graphics work",
      tags: ["Animation", "Motion Graphics", "Reel"],
      relatedVideos: [
        { id: "CUAAT_5vhDw", title: "Pranil Naik" },
        { id: "pQDTnEQv8Mo", title: "Inspiring Teaching Story | Ramesh Kulkarni - Jalna" },
        { id: "5AIeCOoTWsE", title: "Documentary | Storytelling | Pappaya Farming I Prakirti Foundation" },
        { id: "iE__2Irx28c", title: "About Organization | Corporate AV" },
        { id: "VFh54L_LXiw", title: "A Journey from Hindi teacher to an English teacher - Suman Sharma" },
        { id: "OZHG-T3TMq4", title: "What can we learn from the Polio Immunization drive to solve the English Illiteracy Problem" }
      ]
    },
    {
      id: 4,
      type: "video",
      title: "Corporate Films",
      category: "Commercial",
      date: "2024",
      thumbnail: "https://www.picturesunfold.com/wp-content/themes/pictureunfold/img/services/Pictures-Unfold-Services-Corporate-films.jpg",
      youtubeId: "ScMzIvxBSi4",
      description: "30-second product commercial for e-commerce brand",
      tags: ["Commercial", "Product", "Advertisement"],
      relatedVideos: [
        { id: "ZNWmAuuzncc", title: "Colors Marathi Serial | Sakhya Re | Making of Title Song | Monali Thakur" },
        { id: "dQw4w9WgXcQ", title: "Extended Cut" },
        { id: "L_jWHffIx5E", title: "Making Of" },
        { id: "fJ9rUzIMcZQ", title: "Director's Commentary" }
      ]
    },
    {
      id: 7,
      type: "video",
      title: "Animation | Promotional AVs",
      category: "Social Media",
      date: "2024",
      thumbnail: "https://i.redd.it/mthr3x0q3m091.png",
      youtubeId: "L_jWHffIx5E",
      description: "Instagram story animations and posts",
      tags: ["Social Media", "Instagram", "TikTok"],
      relatedVideos: [
        { id: "rODemvn3kwA", title: "Animation | Promotional AVs" },
        { id: "7MKAj-Z6nG4", title: "Animation | Marketing" },
        { id: "qB9tnA-zsps", title: "Animation | 3D | Trophy Launch" },
        { id: "DrSQB94BjWk", title: "3D Text Reveal | Promo" },
        { id: "rcVaMg8JOnI", title: "Animation | 3D | Trophy Reveal" }
      ]
    },
    {
      id: 11,
      type: "video",
      title: "Audio Series & Stories",
      category: "Documentary",
      date: "2024",
      thumbnail: "/api/placeholder/400/300",
      youtubeId: "fJ9rUzIMcZQ",
      description: "Corporate event highlights video",
      tags: ["Documentary", "Corporate", "Events"],
      relatedVideos: [
        { id: "VzupYuJBIRI", title: "Audio Series & Stories | Generative AI" },
        { id: "dQw4w9WgXcQ", title: "Employee Interviews" },
        { id: "ScMzIvxBSi4", title: "Company Culture" },
        { id: "L_jWHffIx5E", title: "Office Tour" }
      ]
    },
    {
      id: 12,
      type: "video",
      title: "Promo AVs | Marketing",
      category: "Education",
      date: "2024",
      thumbnail: "/api/placeholder/400/300",
      youtubeId: "QB7ACr7pUuE",
      description: "Design tutorial for beginners",
      tags: ["Tutorial", "Education", "Design"],
      relatedVideos: [
        { id: "9XSvJZBn_iI", title: "Promo AVs | Marketing" },
        { id: "9eGp3C7XSrU", title: "Marketing AVs | Course Promotion" },
        { id: "ScMzIvxBSi4", title: "Tips & Tricks" }
      ]
    },
    {
      id: 13,
      type: "video",
      title: "Corporate Communications",
      category: "Branding",
      date: "2024",
      thumbnail: "/api/placeholder/400/300",
      youtubeId: "ZbZSe6N_BXs",
      description: "Award-winning brand campaign video",
      tags: ["Branding", "Campaign", "Award"],
      relatedVideos: [
        { id: "HCfbtuRLTGY", title: "Decoding Workplace Fatigue: Why You Feel Exhausted Despite Sleep | Bee Mahimkar | EAP-India" },
        { id: "ujvOJq6dGZg", title: "Corporate Communications" },
        { id: "ScMzIvxBSi4", title: "Behind Scenes" }
      ]
    }
  ];

  // Group image items by aspect ratio for mobile carousels
  const groupedImageItems = {
    square: imageItems.filter(item => item.aspectRatio === "square"),
    portrait_photo: imageItems.filter(item => item.aspectRatio === "portrait")
  };

  // Function to distribute items evenly across columns
  const distributeItemsInColumns = (items, numColumns) => {
    const columns = Array.from({ length: numColumns }, () => []);
    const columnHeights = Array(numColumns).fill(0);
    
    // Define height values for each height class
    const heightMap = {
      'h-64': 256,
      'h-72': 288,
      'h-80': 320,
      'h-84': 336,
      'h-88': 352,
      'h-96': 384,
      'h-[30rem]': 480
    };
    
    items.forEach((item) => {
      // Find the column with minimum height
      const minHeightIndex = columnHeights.indexOf(Math.min(...columnHeights));
      columns[minHeightIndex].push(item);
      
      // Add the item's height to that column
      const itemHeight = heightMap[item.height] || 320;
      columnHeights[minHeightIndex] += itemHeight + 24; // 24px for gap
    });
    
    return columns;
  };

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
    if (!project || !project.relatedVideos) return null;

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
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-gray-900 rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

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

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Project Videos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {project.relatedVideos.map((video, index) => (
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

  // Mobile Carousel Component (for images only)
  const MobileCarousel = ({ items, title, aspectRatio, currentSlide, setCurrentSlide }) => {
    const nextSlide = () => {
      setCurrentSlide((prev) => ({
        ...prev,
        [aspectRatio]: (prev[aspectRatio] + 1) % items.length
      }));
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => ({
        ...prev,
        [aspectRatio]: prev[aspectRatio] === 0 ? items.length - 1 : prev[aspectRatio] - 1
      }));
    };

    if (items.length === 0) return null;

    return (
      <div className="mb-8">
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {items.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 px-2">
                  <div 
                    className="relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700"
                    style={{ aspectRatio: aspectRatio === "square" ? "1/1" : "9/16" }}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-lg font-bold text-white mb-2 line-clamp-2">
                        {item.title}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-300">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{item.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{item.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {items.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}

          <div className="flex justify-center mt-4 space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(prev => ({ ...prev, [aspectRatio]: index }))}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
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
            Showcasing our creative excellence in digital media production and marketing campaigns
          </p>
        </motion.div>

        {/* Images Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Creative <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our graphic design, branding, and visual identity projects
            </p>
          </motion.div>

          {/* Mobile Image Carousels */}
          <div className="block lg:hidden">
            <MobileCarousel 
              items={groupedImageItems.square}
              title="Square Posts (1080x1080)"
              aspectRatio="square"
              currentSlide={currentSlides.square}
              setCurrentSlide={setCurrentSlides}
            />
            
            <MobileCarousel 
              items={groupedImageItems.portrait_photo}
              title="Portrait Photos (1080x1920)"
              aspectRatio="portrait_photo"
              currentSlide={currentSlides.portrait_photo}
              setCurrentSlide={setCurrentSlides}
            />
          </div>

          {/* Desktop Image Masonry Grid - UPDATED FOR EVEN BOTTOM */}
          <div className="hidden lg:block">
            {/* For Large screens (3 columns) */}
            <div className="hidden lg:block xl:hidden">
              <div className="flex gap-6">
                {distributeItemsInColumns(imageItems, 3).map((column, columnIndex) => (
                  <div key={columnIndex} className="flex-1 space-y-6">
                    {column.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: (columnIndex * column.length + index) * 0.1 }}
                        className="group"
                      >
                        <div className={`relative ${item.height} bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-300 transform hover:scale-[1.02]`}>
                          <div className="relative w-full h-full">
                            <img
                              src={item.src}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20">
                                {item.category}
                              </span>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                                {item.title}
                              </h3>
                              
                              <div className="flex items-center space-x-4 text-sm text-gray-300">
                                <div className="flex items-center space-x-1">
                                  <Heart className="w-4 h-4" />
                                  <span>{item.likes}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MessageCircle className="w-4 h-4" />
                                  <span>{item.comments}</span>
                                </div>
                              </div>
                            </div>

                            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* For Extra Large screens (4 columns) */}
            <div className="hidden xl:block">
              <div className="flex gap-6">
                {distributeItemsInColumns(imageItems, 4).map((column, columnIndex) => (
                  <div key={columnIndex} className="flex-1 space-y-6">
                    {column.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: (columnIndex * column.length + index) * 0.1 }}
                        className="group"
                      >
                        <div className={`relative ${item.height} bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-300 transform hover:scale-[1.02]`}>
                          <div className="relative w-full h-full">
                            <img
                              src={item.src}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20">
                                {item.category}
                              </span>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                                {item.title}
                              </h3>
                              
                              <div className="flex items-center space-x-4 text-sm text-gray-300">
                                <div className="flex items-center space-x-1">
                                  <Heart className="w-4 h-4" />
                                  <span>{item.likes}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MessageCircle className="w-4 h-4" />
                                  <span>{item.comments}</span>
                                </div>
                              </div>
                            </div>

                            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Videos Section - UNCHANGED */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Video <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Watch our latest video productions, animations, and commercials
            </p>
          </motion.div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105">
                  <div className="relative h-48 bg-gray-700 overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="text-lg font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

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
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let&apos;s collaborate to create something amazing for your brand
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Video Modal - Only for video items */}
      <VideoModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default ResponsivePortfolioGrid;
