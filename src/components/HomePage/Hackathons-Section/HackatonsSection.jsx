import React from 'react';
import { HackatonCard } from '../../Cards/Hackaton-Card/HackatonCard';

export const HackatonsSection = ({ hackathonsDB }) => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-10 pb-24 border-b md:w-11/12 mx-auto">
        {hackathonsDB &&
          hackathonsDB.length > 0 &&
          hackathonsDB.map((item) => (
            <HackatonCard
              key={item.id}
              cardImage={item.image}
              hackathonTitle={item.title}
              hackathonDesc={item.shortDesc}
              hackathonOrganization={item.createdBy}
              hackathonLocation={item.location}
              cardId={item.id}
            />
          ))}
      </div>
      <div className="flex justify-center py-12">
        <button class="bg-indigo-900 hover:bg-indigo-700 text-white font-bold py-2 px-20 border border-blue-700 rounded  ">
          See All
        </button>
      </div>
    </React.Fragment>
  );
};
