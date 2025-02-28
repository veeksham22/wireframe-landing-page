import React from 'react';

const Hero = () => {
  return (
    <div className="font-sans">
      {/* Navigation Bar */}
      <header className="fixed w-full top-0 left-0 z-10 bg-white shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-gray-900 text-lg font-bold">Growth.co</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-500 hover:text-gray-900">Home</a>
              <a href="#work" className="text-gray-500 hover:text-gray-900">Work</a>
              <a href="#services" className="text-gray-500 hover:text-gray-900">Services</a>
              <a href="#blog" className="text-gray-500 hover:text-gray-900">Blog</a>
            </div>
            {/* Search Input */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search here"
                className="pl-4 pr-8 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-white px-2 py-1 rounded">
                Search
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen pt-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Section (Graphic) */}
            <div className="flex justify-center">
              <div className="bg-gray-300 h-64 w-64 rounded-full"></div>
            </div>

            {/* Right Section (Text) */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Cool ways to Level up your business
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Our mission is to make your business more stunning with different ways.
              </p>
              <div className="space-x-4">
                <button className="bg-gray-900 text-white py-2 px-6 rounded-md hover:bg-gray-700 transition">
                  Email us
                </button>
                <button className="border border-gray-900 text-gray-900 py-2 px-6 rounded-md hover:bg-gray-100 transition">
                  See our project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Nav Menu */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg py-4 flex justify-around">
        <a href="#home" className="text-gray-500 hover:text-gray-900">Home</a>
        <a href="#work" className="text-gray-500 hover:text-gray-900">Work</a>
        <a href="#services" className="text-gray-500 hover:text-gray-900">Services</a>
        <a href="#blog" className="text-gray-500 hover:text-gray-900">Blog</a>
      </div>
    </div>
  );
};

export default Hero;
