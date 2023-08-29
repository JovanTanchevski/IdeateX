import React from 'react';
import { HackatonCard } from '../../Cards/Hackaton-Card/HackatonCard';

export const HackatonsSection = ({ hackathonsDB }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-24 border-b md:w-11/12 mx-auto">
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
          />
        ))}
    </div>
  );
};
