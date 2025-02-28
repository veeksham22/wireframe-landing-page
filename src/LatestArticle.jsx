import React from 'react';

const LatestArticle = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 lg:px-24 py-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Latest article for you</h1>
        <button className="bg-gray-500 text-white px-6 py-2 rounded">See more</button>
      </div>

      {/* Article List */}
      <div className="flex flex-col gap-8 w-full">
        {/* Article 1 */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/3 bg-gray-300 h-40 mb-4 md:mb-0"></div>
          <div className="w-full md:w-2/3 md:ml-4">
            <p className="text-sm text-gray-500 mb-2">17-12-2020</p>
            <h3 className="text-lg font-semibold mb-2">
              How to Conduct a Competitive Analysis for Your Business
            </h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>

        {/* Article 2 */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/3 bg-gray-300 h-40 mb-4 md:mb-0"></div>
          <div className="w-full md:w-2/3 md:ml-4">
            <p className="text-sm text-gray-500 mb-2">17-12-2020</p>
            <h3 className="text-lg font-semibold mb-2">
              How to Get Your First Sale in 30 Days: A Marketing Checklist for New Entrepreneurs
            </h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestArticle;
