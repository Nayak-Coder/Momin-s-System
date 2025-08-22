import React from 'react';
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Building responsive and high-performance websites.',
      icon: <FaCode className="text-4xl text-blue-600" />,
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Designing user-friendly and aesthetic interfaces.',
      icon: <FaPaintBrush className="text-4xl text-green-600" />,
    },
    {
      id: 3,
      title: 'Mobile App Development',
      description: 'Creating cross-platform mobile applications.',
      icon: <FaMobileAlt className="text-4xl text-purple-600" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h1>
      <p className="text-gray-600 mb-8">
        We offer a range of high-quality digital services to help your business grow.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition duration-300"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;