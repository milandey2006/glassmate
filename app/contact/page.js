"use client";
import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    referral: '',
    message: '',
    agreeToTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left side - Messaging */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/30">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-blue-200 text-sm font-medium">Full-Service Creative Agency</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Speak with a{' '}
                <span className="text-blue-400 italic font-light">Creative Expert</span>,{' '}
                not a salesperson
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                When you book a meeting with us, youll talk directly to a creative strategist — not a sales rep. 
                Were here to provide insights, brainstorm solutions, and discuss your brands growth goals from day one.
              </p>
            </div>
            
            {/* Contact info */}
            <div className="flex space-x-6 pt-8">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm">hello@glassmate.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="lg:pl-8 mt-12">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold mb-8 text-center">Get in touch</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="johndoe@gmail.com"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+31 6 12 34 56 78"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Where did you hear about us? <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="referral"
                    value={formData.referral}
                    onChange={handleInputChange}
                    placeholder="Where did you hear about us?"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="w-4 h-4 mt-1 text-blue-500 bg-slate-900 border-slate-600 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label className="text-sm text-gray-400 leading-relaxed">
                    By clicking "Send Message" youre confirming that you agree with our{' '}
                    <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                      Terms and Conditions
                    </a>
                  </label>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                >
                  Send Message →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Process Slider Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-green-400 font-medium">Creative Process</span>
            </div>
            <div className="flex space-x-2">
              <button className="w-10 h-10 bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 transition-all">
                ←
              </button>
              <button className="w-10 h-10 bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 transition-all">
                →
              </button>
            </div>
          </div>
          
          <h2 className="text-4xl font-bold mb-16 text-center">Heres what to expect</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-3xl font-bold text-blue-400 opacity-50">01</div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Discovery Meeting</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We take the time to understand your business, brand goals, and challenges — so we can get a clear picture of what you truly need.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-3xl font-bold text-blue-400 opacity-50">02</div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Creative Analysis</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We analyze your current creative assets and brand positioning to identify opportunities and gaps.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-3xl font-bold text-blue-400 opacity-50">03</div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Strategy Presentation</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    In a follow-up call, we share our findings and an initial roadmap for elevated creative execution.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-3xl font-bold text-blue-400 opacity-50">04</div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Build & Execute</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Once aligned, we assemble a creative team to build and scale your high-performing brand assets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}