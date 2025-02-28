import React from 'react';

const Review = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 lg:px-24 py-12">
      
      {/* Review Section */}
      <div className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between mb-16">
        {/* Left Section: Image Placeholder */}
        <div className="w-full md:w-1/2 bg-gray-300 h-64 mb-8 md:mb-0"></div>
        {/* Right Section: Review Text */}
        <div className="w-full md:w-1/2 md:pl-8 flex flex-col justify-between">
          <h2 className="text-2xl font-semibold mb-4">What they say about us</h2>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <p className="text-gray-700 font-semibold">Lucky Ferdiand</p>
          <p className="text-gray-500 mb-4">CEO of RideWave</p>
          {/* Navigation Arrows */}
          <div className="flex items-center">
            <button className="text-gray-400 hover:text-gray-700 text-2xl mr-4">&#8592;</button>
            <button className="text-gray-400 hover:text-gray-700 text-2xl">&#8594;</button>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-lg flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section: Title */}
        <h2 className="text-3xl font-semibold mb-4 lg:mb-0">Cool ways to Level up your business</h2>
        {/* Right Section: Button */}
        <div className="lg:ml-8">
          <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="bg-gray-500 text-white px-6 py-2 rounded">Get it now</button>
        </div>
      </div>
    </div>
  );
};

export default Review;
