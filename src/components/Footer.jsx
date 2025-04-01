import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Name */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">PMS UI</h2>
            <p className="text-gray-500 mt-2">Empowering your property management experience.</p>
          </div>

          {/* Links */}
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#about" className="hover:text-white transition">About Us</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          {/* Social Media */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-gray-500 hover:text-white transition" size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="text-gray-500 hover:text-white transition" size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-gray-500 hover:text-white transition" size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-gray-500 hover:text-white transition" size={24} />
            </a>
          </div>
        </div>

        {/* Contact Form on Right Side */}
        <div className="mt-12 flex justify-end">
          <section id="contact" className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
            <h2 className="text-3xl font-bold text-white text-center mb-6">Contact Us</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 border rounded-md bg-gray-700 text-white" />
              <input type="email" placeholder="Your Email" className="w-full p-2 border rounded-md bg-gray-700 text-white" />
              <textarea placeholder="Your Message" className="w-full p-2 border rounded-md bg-gray-700 text-white"></textarea>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 w-full">Send Message</button>
            </form>
          </section>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-gray-600 text-sm text-center">
          © {new Date().getFullYear()} PMS UI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
