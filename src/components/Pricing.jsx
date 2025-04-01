import React from 'react';
import { CheckCircle } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      title: 'Basic',
      price: '$29/month',
      description: 'Basic booking management and guest tracking.',
      features: ['Booking Management', 'Guest Tracking'],
      recommended: false,
    },
    {
      title: 'Pro',
      price: '$59/month',
      description: 'Advanced analytics and staff management.',
      features: ['Advanced Analytics', 'Staff Management', 'Integration Support'],
      recommended: true,
    },
    {
      title: 'Enterprise',
      price: '$99/month',
      description: 'Full feature access and premium support.',
      features: ['All Features', 'Premium Support', 'Customization Options'],
      recommended: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-r from-blue-50 to-white">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">
        Pricing Plans
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl shadow-lg text-center transition transform duration-300 hover:-translate-y-2 hover:shadow-2xl ${
              plan.recommended ? 'bg-blue-600 text-white scale-105' : 'bg-white text-gray-800'
            }`}
          >
            {plan.recommended && (
              <span className="inline-block bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Recommended
              </span>
            )}
            <h3 className="text-3xl font-bold">{plan.title}</h3>
            <p className="text-4xl font-extrabold my-4">{plan.price}</p>
            <p className="text-lg mb-6">{plan.description}</p>
            <ul className="space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center justify-center space-x-2">
                  <CheckCircle className={`text-2xl ${plan.recommended ? 'text-white' : 'text-blue-600'}`} />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 px-6 py-2 rounded-full font-semibold ${
                plan.recommended
                  ? 'bg-white text-blue-600 hover:bg-gray-100'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              } transition`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
