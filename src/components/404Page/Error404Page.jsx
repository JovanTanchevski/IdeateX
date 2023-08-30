import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../../images/ErrorBannerImg.webp';

const Error404Page = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 error-page-section sm:flex-row ">
      <img
        src={NotFoundImage}
        alt="not-found-img"
        className="w-2/5 max-h-full"
      />
      <div className=" sm:w-1/2">
        <div className="px-14">
          <h1 className=" text-5xl lg:text-8xl font-bold mb-4">
            404 <br />
            Error Page
          </h1>
          <p className="text-xl mb-8 lg:text-4xl">
            Oops, the page you're looking for can't be found!
          </p>
          <Link
            to="/"
            className="bg-cyan-600 hover:bg-cyan-900 text-white font-semibold py-4 px-8 rounded transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404Page;
