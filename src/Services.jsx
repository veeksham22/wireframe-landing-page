import React from 'react';
// Importing icons from React Icons (adjust based on the icons you prefer)
import { FaEnvelope, FaBullhorn, FaLaptop } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 lg:px-24">
      {/* Title Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">Best services we provided for you</h1>
          <p className="text-gray-500">Our mission is to make your business more stunning with different ways</p>
        </div>
        <button className="bg-gray-500 text-white px-6 py-2 rounded mt-6 md:mt-0">
          Email us
        </button>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {/* Email Marketing */}
        <div className="flex flex-col items-center text-center">
          <FaEnvelope className="text-5xl text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email Marketing</h3>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>

        {/* Ads Marketing */}
        <div className="flex flex-col items-center text-center">
          <FaBullhorn className="text-5xl text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Ads Marketing</h3>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>

        {/* Landing Page */}
        <div className="flex flex-col items-center text-center">
          <FaLaptop className="text-5xl text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Landing Page</h3>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
