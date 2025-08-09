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
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
    "Others",
  ];

  // UPDATED: Handle input changes and clear errors for the field being edited
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Clear the error for the field being typed in
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }

    // Special handling for the phone field to enforce rules as user types
    if (name === "phone") {
      // Allow only numbers and limit to 10 digits
      const sanitizedValue = value.replace(/[^0-9]/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: sanitizedValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // UPDATED: All new validation logic based on your requirements
  const validateForm = () => {
    const newErrors = {};

    // Name Validation: Required, letters and spaces only
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Please enter a valid name (letters only).";
    }

    // Email Validation: Required and valid format
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone Validation: Required, numbers only, exactly 10 digits
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]+$/.test(formData.phone)) {
      // This check is mostly handled by live input filtering, but good for submit
      newErrors.phone = "Only numbers are allowed.";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Please enter a 10-digit phone number.";
    }

    // Services Validation: Required
    if (!formData.services) {
      newErrors.services = "Please select a service.";
    }

    // Message Validation: Optional, but if present, must be 20-500 characters
    if (formData.message.trim() && (formData.message.length < 20 || formData.message.length > 500)) {
        newErrors.message = "Message must be between 20 and 500 characters.";
    }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus(null); // Clear any previous success/error messages
      return;
    }

    setLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", services: "", message: "" });
        setErrors({});
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
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
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Talk to a{" "}
              <span className="text-blue-400 italic font-light">
                Creative Expert
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              When you connect with us, you speak directly with a creative strategist. No pushy sales talk, just honest ideas.
            </p>
            <div className="flex space-x-6 pt-8">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"><div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700"><Mail className="w-5 h-5" /></div><span className="text-sm"><a href="mailto:info@glassmatemedia.com">info@glassmatemedia.com</a></span></div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"><div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700"><Phone className="w-5 h-5" /></div><span className="text-sm">+91 809 780 3740</span></div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:pl-8 mt-12">
            <form onSubmit={handleSubmit} noValidate className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl space-y-4">
              <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>

              {submitStatus === "success" && <div className="bg-green-500/20 border border-green-500/30 text-green-200 px-4 py-3 rounded-lg">Message sent successfully! We'll be in touch soon.</div>}
              {submitStatus === "error" && <div className="bg-red-500/20 border border-red-500/30 text-red-200 px-4 py-3 rounded-lg">Failed to send message. Please try again later.</div>}

              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name <span className="text-red-400">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className={`w-full px-4 py-3 bg-slate-900 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.name ? 'border-red-500 border-2' : 'border border-slate-600 focus:border-transparent'}`}
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address <span className="text-red-400">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@gmail.com"
                  className={`w-full px-4 py-3 bg-slate-900 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.email ? 'border-red-500 border-2' : 'border border-slate-600 focus:border-transparent'}`}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>
              
              {/* Phone Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number <span className="text-red-400">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="10-digit mobile number"
                  className={`w-full px-4 py-3 bg-slate-900 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.phone ? 'border-red-500 border-2' : 'border border-slate-600 focus:border-transparent'}`}
                />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Services Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Service of Interest <span className="text-red-400">*</span></label>
                <select
                  name="services"
                  value={formData.services}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-slate-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.services ? 'border-red-500 border-2' : 'border border-slate-600 focus:border-transparent'}`}
                >
                  <option value="" className="text-gray-500">Select a service...</option>
                  {serviceOptions.map((service, index) => <option key={index} value={service} className="text-white">{service}</option>)}
                </select>
                {errors.services && <p className="text-red-400 text-sm mt-1">{errors.services}</p>}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Min 20 characters..."
                  className={`w-full px-4 py-3 bg-slate-900 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${errors.message ? 'border-red-500 border-2' : 'border border-slate-600 focus:border-transparent'}`}
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <button type="submit" disabled={loading} className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl disabled:opacity-50 cursor-pointer">
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}