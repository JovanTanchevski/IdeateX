import React from 'react';

export const HackatonCard = ({
  cardImage,
  hackathonTitle,
  hackathonDesc,
  hackathonOrganization,
  hackathonLocation,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
      <img
        className="w-full max-h-40"
        src={'https://picsum.photos/200'}
        alt="Hackathon Card"
      />
      <div className="px-6 py-4">
        <div className="mb-6">
          <h3 className="text-gray-700">{hackathonLocation}</h3>
          <h1 className="font-bold text-xl mb-2">{hackathonTitle}</h1>
          <p className="text-gray-700 text-base">{hackathonDesc}</p>
        </div>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={cardImage ? cardImage : 'https://picsum.photos/200'}
            alt="Hackathon Card"
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">
              {hackathonOrganization}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
