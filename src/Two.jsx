import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';  // Example icon for finished projects
import { FaRegClock } from 'react-icons/fa';       // Example icon for ongoing projects
import { FaCalendarAlt } from 'react-icons/fa';    // Example icon for years experience
import { FaStar } from 'react-icons/fa';           // Example icon for good reviews

const Two = () => {
  return (
    <div className="font-sans">
      {/* Section */}
      <section className="flex items-center justify-center h-screen pt-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Section (Text) */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Worked on hundreds of projects
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Our mission is to make your business more stunning with different ways.
              </p>
              <button className="bg-gray-900 text-white py-2 px-6 rounded-md hover:bg-gray-700 transition">
                Email us
              </button>
            </div>

            {/* Right Section (Statistics with Illustrations) */}
            <div className="grid grid-cols-2 gap-4 text-center md:text-left">
              {/* First Row */}
              <div className="flex flex-col items-center md:items-start">
                <FaRegCheckCircle className="text-5xl text-gray-900 mb-2" /> {/* Icon for finished projects */}
                <div className="text-4xl font-bold text-gray-900">1145</div>
                <p className="text-gray-600">Finished projects</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <FaRegClock className="text-5xl text-gray-900 mb-2" /> {/* Icon for ongoing projects */}
                <div className="text-4xl font-bold text-gray-900">95</div>
                <p className="text-gray-600">On-going projects</p>
              </div>

              {/* Second Row */}
              <div className="flex flex-col items-center md:items-start">
                <FaCalendarAlt className="text-5xl text-gray-900 mb-2" /> {/* Icon for years experience */}
                <div className="text-4xl font-bold text-gray-900">15</div>
                <p className="text-gray-600">Years experience</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <FaStar className="text-5xl text-gray-900 mb-2" /> {/* Icon for good reviews */}
                <div className="text-4xl font-bold text-gray-900">1k+</div>
                <p className="text-gray-600">Good reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Two;
