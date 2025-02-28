import React from 'react';

const Last = () => {
  return (
    <footer className="bg-gray-700 text-gray-300 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between px-4 lg:px-24">
        
        {/* Left Section */}
        <div className="mb-8 lg:mb-0">
          <h1 className="text-3xl font-bold text-white mb-6">Growth.co</h1>
          
          {/* Menu, Services, and About - arranged side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Menu */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Menu</h2>
              <ul>
                <li className="mb-2"><a href="#" className="hover:text-white">Home</a></li>
                <li className="mb-2"><a href="#" className="hover:text-white">Work</a></li>
                <li className="mb-2"><a href="#" className="hover:text-white">Services</a></li>
                <li className="mb-2"><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Services</h2>
              <ul>
                <li className="mb-2"><a href="#" className="hover:text-white">Email Marketing</a></li>
                <li className="mb-2"><a href="#" className="hover:text-white">Ads Marketing</a></li>
                <li className="mb-2"><a href="#" className="hover:text-white">Landing Page</a></li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h2 className="text-lg font-semibold mb-4">About us</h2>
              <ul>
                <li className="mb-2"><a href="#" className="hover:text-white">About</a></li>
                <li className="mb-2"><a href="#" className="hover:text-white">Contact</a></li>
                <li className="mb-2"><a href="#" className="hover:text-white">Career</a></li>
              </ul>
            </div>
            
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3">
          <h2 className="text-2xl font-semibold text-white mb-4">Stay up to date with our story</h2>
          <p className="mb-4">Join and be the first to get the latest news about trends, promotions, and much more!</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 bg-gray-600 text-white focus:outline-none"
            />
            <button className="bg-gray-500 text-white px-4 py-2 rounded-r-md hover:bg-gray-400">Join </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto text-center mt-8">
        <p className="text-gray-400">&copy; 2021 Ibey Design. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Last;
