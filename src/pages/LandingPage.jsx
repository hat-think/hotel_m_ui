import React from 'react';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import UseCases from '../components/useCases';
import Bghomepage from '../assets/bg-homepage.png';

const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="flex flex-col md:flex-row justify-between items-center py-20 px-6 md:px-20 bg-gradient-to-r from-blue-50 to-white shadow-md">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-2 animate-fade-in">
            Elevate Your Hotel Management
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            Simplify your hotel operations with an all-in-one CRM solution. Manage bookings, guest data, staff, and more efficiently.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:from-blue-700 hover:to-blue-500">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-1/2 h-80 mt-10 md:mt-0 flex justify-center items-center">
          <img
            src={Bghomepage}
            alt="Hotel Management"
            className="rounded-lg shadow-lg object-cover w-3/4 h-full"
          />
        </div>
      </section>
      <Features />
      <UseCases />
      <Pricing />
      {/* <Contact /> */}
    </div>
  );
};

export default LandingPage;
