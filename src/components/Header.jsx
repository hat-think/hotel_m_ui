import React, { useState } from 'react';
import { ArrowLeft, Cpu, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Cpu className="text-blue-600" size={28} />
          <h1 className="text-xl font-bold text-gray-700">HAT PMS</h1>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className={`lg:flex space-x-6 text-gray-600 ${isMenuOpen ? 'flex flex-col space-y-4 absolute top-16 left-0 right-0 bg-gray-100 p-6 shadow-lg lg:space-y-0 lg:flex-row lg:static' : 'hidden'}`}>
          <a href="#dashboard" className="hover:text-blue-600">Dashboard</a>
          <a href="#search" className="hover:text-blue-600">Search</a>
          <a href="#explore" className="hover:text-blue-600">Explore</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center space-x-1 hover:bg-blue-600">
            <ArrowLeft size={16} />
            <span>Login</span>
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
