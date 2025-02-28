import React from 'react';

const Team = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-8 lg:px-24 py-12">
      {/* Client Section */}
      <div className="text-center mb-16 w-full">
        <h1 className="text-4xl font-bold mb-12">Our Client</h1>
        <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
          <span className="text-gray-400 text-2xl lg:text-3xl">Ghulik.co</span>
          <span className="text-gray-400 text-2xl lg:text-3xl">Yoci Store</span>
          <span className="text-gray-400 text-2xl lg:text-3xl">Ride Wave</span>
          <span className="text-gray-400 text-2xl lg:text-3xl">AMEF FARMA</span>
          <span className="text-gray-400 text-2xl lg:text-3xl">Auth.UK</span>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center w-full">
        <h1 className="text-4xl font-bold mb-12">Our Great Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 bg-gray-300 rounded-full mb-6"></div>
            <h2 className="text-xl lg:text-2xl font-semibold">Warso Setyo</h2>
            <p className="text-gray-500 text-base lg:text-lg">Project Manager</p>
          </div>
          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 bg-gray-300 rounded-full mb-6"></div>
            <h2 className="text-xl lg:text-2xl font-semibold">Retno Hadi</h2>
            <p className="text-gray-500 text-base lg:text-lg">Marketing Expert</p>
          </div>
          {/* Team Member 3 */}
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 bg-gray-300 rounded-full mb-6"></div>
            <h2 className="text-xl lg:text-2xl font-semibold">Nurbianto</h2>
            <p className="text-gray-500 text-base lg:text-lg">Graphic Designer</p>
          </div>
          {/* Team Member 4 */}
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 bg-gray-300 rounded-full mb-6"></div>
            <h2 className="text-xl lg:text-2xl font-semibold">Zubaidah</h2>
            <p className="text-gray-500 text-base lg:text-lg">Accounting</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
