import React from 'react';
const BannerSection = () => {
  return (
    <div className="items-center flex flex-col justify-center py-32 banner-section ">
      <h1 className="text-4xl font-semibold text-center">
        Unleash Your Innovative Potential
      </h1>
      <h2 className="lg:text-xl mt-10">
        Innovate, collaborate and achieve with IdeateX!
      </h2>
      <button className="mt-10 bg-indigo-800 px-3 py-2 rounded-sm text-white hover:bg-indigo-500">
        Find Out More
      </button>
    </div>
  );
};

export default BannerSection;
