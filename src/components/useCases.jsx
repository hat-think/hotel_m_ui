import React from 'react';
import { Briefcase, CalendarCheck, BarChart2, Users } from 'lucide-react';
import BguseCases from '../assets/bg-useCases.png';

const useCases = [
  {
    title: 'Room Booking & Reservations',
    description: 'Manage real-time bookings, cancellations, and availability. Streamline guest check-in and check-out processes.',
    icon: <CalendarCheck className='text-blue-600 text-4xl mb-4' />,
  },
  {
    title: 'Staff Scheduling & Management',
    description: 'Assign tasks, manage shifts, and keep track of staff performance from one dashboard.',
    icon: <Users className='text-green-600 text-4xl mb-4' />,
  },
  {
    title: 'Revenue Tracking & Reporting',
    description: 'Monitor financial performance and generate insightful analytics reports for better decision making.',
    icon: <BarChart2 className='text-purple-600 text-4xl mb-4' />,
  },
  {
    title: 'Property Maintenance & Upkeep',
    description: 'Track maintenance tasks, log issues, and ensure a smooth and comfortable guest experience.',
    icon: <Briefcase className='text-orange-600 text-4xl mb-4' />,
  }
];

const UseCasePage = () => {
  return (
    <section className='py-20 bg-gray-50'  style={{ backgroundImage: `url(${BguseCases})` }}>
      <h2 className='text-5xl font-extrabold text-center mb-12 text-gray-800 tracking-tight'>
        HMS Use Cases
      </h2>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4'>
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-start bg-white p-8 rounded-2xl shadow-lg transition transform duration-300 hover:-translate-y-2 hover:shadow-2xl'
          >
            {useCase.icon}
            <h3 className='text-2xl font-semibold text-gray-800 mb-2'>{useCase.title}</h3>
            <p className='text-gray-600 text-center'>{useCase.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCasePage;
