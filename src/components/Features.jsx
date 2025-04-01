import React from 'react';
import { CheckCircle } from 'lucide-react';
import Bgfeatures from '../assets/bg-features.png';

const Features = () => {
  const features = [
    { title: 'Automated Booking Management', icon: 'check-circle' },
    { title: 'Real-time Guest Data Tracking', icon: 'check-circle' },
    { title: 'Staff Scheduling and Management', icon: 'check-circle' },
    { title: 'Advanced Reporting and Analytics', icon: 'check-circle' },
    { title: 'Seamless Integration with Third-Party Tools', icon: 'check-circle' },
    { title: 'Customizable User Interface', icon: 'check-circle' },
  ];

  return (
    <section id="features" 
    className="py-20 bg-cover bg-center py-20 from-blue-50 to-white"
    style={{ backgroundImage: `url(${Bgfeatures})` }}>
      <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800 tracking-tight animate-fade-in">
        Why Choose Us?
      </h2>
      <ul className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center justify-start bg-gradient-to-r from-white to-blue-50 p-6 rounded-2xl shadow-lg transition transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105"
          >
            <CheckCircle className="text-blue-600 text-4xl mr-4" />
            <p className="text-xl font-semibold text-gray-800">{feature.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Features;
