"use client";
import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    message: "",
    agreeToTerms: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const serviceOptions = [
    "Video Production",
    "Graphic Design",
    "Content Creation",
    "Personal Branding",
    "Branding & Logo Design",
    "Social Media Management",
    "Consultation Services (Media Strategy & Branding Advisory)",
    "Digital Marketing",
    "Web Design & Development",
    "Mobile App Development",
    "E-commerce Solutions",
    "UI/UX Design",
    "SEO Services",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.services) {
      alert("Please fill in all required fields.");
      return false;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (!formData.agreeToTerms) {
      alert("You must agree to the terms and conditions.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          services: formData.services,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        // Reset form after successful submit
        setFormData({
          name: "",
          email: "",
          phone: "",
          services: "",
          message: "",
          agreeToTerms: false,
        });
      } else {
        console.error('API Error:', result.error);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Network Error:', error);
      setSubmitStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/30">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-blue-200 text-sm font-medium">
                Full-Service Creative Agency
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Speak with a{" "}
              <span className="text-blue-400 italic font-light">
                Creative Expert
              </span>
              , not a salesperson
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              When you book a meeting with us, you&apos;ll talk directly to a
              creative strategist — not a sales rep.
            </p>

            {/* CONTACT INFO */}
            <div className="flex space-x-6 pt-8">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm">info@glassmate.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm">+91 80978 03740</span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:pl-8 mt-12">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl space-y-6"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">
                Get in touch
              </h2>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-500/30 text-green-200 px-4 py-3 rounded-lg">
                  Message sent successfully! We&apos;ll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500/30 text-red-200 px-4 py-3 rounded-lg">
                  Failed to send message. Please try again or contact us directly.
                </div>
              )}

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
                  required
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
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
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
                  placeholder="+91 12345 67890"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  What services do you want?{" "}
                  <span className="text-red-400">*</span>
                </label>
                <select
                  name="services"
                  value={formData.services}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="" className="text-gray-500">
                    Select a service...
                  </option>
                  {serviceOptions.map((service, index) => (
                    <option key={index} value={service} className="text-white">
                      {service}
                    </option>
                  ))}
                </select>
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
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="w-4 h-4 mt-1 text-blue-500 bg-slate-900 border-slate-600 rounded focus:ring-blue-500 focus:ring-2"
                  required
                />
                <label
                  htmlFor="agreeToTerms"
                  className="text-sm text-gray-400 leading-relaxed cursor-pointer"
                >
                  By clicking <b>Send Message</b>, you agree with our{" "}
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
