// components/Footer.js

import Image from 'next/image';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import logo from '@/public/assets/logo.png'; // Adjust the path to your logo image

const Footer = () => {
  const primaryColor = '#101828';

  const footerSections = [
    {
      title: 'Services',
      links: [
        { text: 'Video Production', href: '/services' },
        { text: 'Content Strategy', href: '/services' },
        { text: 'Social Media', href: '/services' },
        { text: 'Brand Identity', href: '/services' },
        { text: 'Performance Marketing', href: '/services' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blog', href: '/blog' },
        { text: 'Case Studies', href: '/case-studies' },
        { text: 'Newsletter', href: '/newsletter' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Portfolio', href: '/portfolio' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ];

  const socialLinks = [
    { href: 'https://twitter.com/glassmatemedia', icon: <FaTwitter /> },
    { href: 'https://www.instagram.com/glassmatemedia/', icon: <FaInstagram /> },
    { href: 'https://www.linkedin.com/company/glassmatemedia/', icon: <FaLinkedinIn /> },
  ];

  return (
    <footer style={{ backgroundColor: primaryColor }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="pb-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Contact Section */}
          <div className="md:col-span-4 lg:col-span-5">
            {/* Logo Placeholder */}
            <div className="w-40 h-12 mb-6 flex items-center justify-center border-2 border-dashed border-gray-600">
              <Image src={logo} alt="Glassmate Media Logo" width={160} height={48} className="object-contain" />
              <span className="font-bold text-xl text-gray-400"> GLASSMATE</span>
            </div>
            <h3 className="text-lg font-semibold leading-6">Contact Us</h3>
            <p className="mt-4 text-base text-gray-300">
              <a href="mailto:hello@glassmatemedia.com" className="hover:text-white transition-colors duration-300">
                hello@glassmatemedia.com
              </a>
            </p>
            <p className="mt-2 text-base text-gray-300">+1 (555) 123-4567</p>
          </div>

          {/* Links Section */}
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold leading-6">{section.title}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {section.links.map((link) => (
                    <li key={link.text}>
                      <a 
                        href={link.href} 
                        className="text-base text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-base text-gray-400 order-2 md:order-1">&copy; 2025 Glassmate Media. All rights reserved.</p>
          <div className="flex gap-x-6 order-1 md:order-2">
            <a href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="/terms-and-conditions" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Terms and Conditions</a>
          </div>
          <div className="flex gap-x-4 order-3">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <span className="sr-only">{social.href}</span>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
