// components/ResponsiveNavbar.js

"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Mail, Settings } from "lucide-react";
import Image from "next/image";

// Make sure your logo is in the 'public/assets/' directory
import logo from '../public/assets/logo.png';

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "About", icon: User, href: "/about" },
    { name: "Services", icon: Briefcase, href: "/services" },
    { name: "Contact", icon: Mail, href: "/contact" },
    { name: "Portfolio", icon: Settings, href: "/portfolio" },
  ];

  const navbarClasses = hasScrolled
    ? "bg-white/20 backdrop-blur-xl "
    : "bg-transparent";
  const textColorClasses = hasScrolled ? "text-gray-900" : "text-white";
  const hoverColorClass = hasScrolled ? "hover:text-blue-600" : "hover:text-gray-200";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClasses}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo and Company Name */}
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <div className="flex items-center space-x-3">
                <Image
                  src={logo}
                  alt="Glassmate Media Logo"
                  width={70}
                  height={20}
                  priority
                />
                {/* ADDED: Company name styled to match the navbar's text color */}
                <span className={`text-2xl font-bold  ${textColorClasses}`}>
                  Glassmate Media
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${textColorClasses} ${hoverColorClass} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center gap-2 group`}
                  >
                    <item.icon size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                    <span>{item.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`${textColorClasses} ${hoverColorClass} p-2 rounded-md transition-colors duration-300`}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.25 }}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-900 hover:bg-blue-50 hover:text-blue-600 block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 flex items-center gap-4"
                  >
                    <item.icon size={20} />
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default ResponsiveNavbar;