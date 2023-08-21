import React from 'react';
import { GoSmiley, GoPeople } from 'react-icons/go';
import { AiOutlineFile } from 'react-icons/ai';
import { BiSolidPizza } from 'react-icons/bi';
const TeamGeneratorData = [
  {
    Icon: GoSmiley,
    number: 250,
    title: 'Hackatons',
  },
  {
    Icon: AiOutlineFile,
    number: 600,
    title: 'Contracts Signed',
  },
  {
    Icon: BiSolidPizza,
    number: 1800,
    title: 'Pizzas Eaten',
  },
  {
    Icon: GoPeople,
    number: 11200,
    title: 'Participants',
  },
];
const TeamGeneratorSection = () => {
  const TeamCard = ({ Icon, number, title }) => {
    return (
      <div className="border-2 py-6 px-10 rounded-md">
        <div className="flex flex-col items-center hover:scale-75 transition duration-300">
          <Icon className="text-6xl mb-3 text-indigo-500" />
          <h2 className="text-2xl font-bold">
            {number > 1000 ? (number / 1000).toFixed(1) + 'K' : number}+
          </h2>
          <p className="text-xl">{title}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center p-24 text-center">
      <h1 className="text-2xl font-bold lg:text-4xl">Team Generator</h1>
      <p className="text-lg my-12">
        Countless hackathons conquered, contracts signed for dreams realized,
        pizzas devoured during creative storms, and a team united in
        innovation—our story, written by each participant's brilliance.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-24 border-b">
        {TeamGeneratorData.map((item) => (
          <TeamCard
            key={item.title}
            Icon={item.Icon}
            number={item.number}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamGeneratorSection;
