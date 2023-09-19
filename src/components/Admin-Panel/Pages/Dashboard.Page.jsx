import React, { useEffect, useState } from 'react';
import { HackatonCard } from '../../Cards/Hackaton-Card/HackatonCard';
const DashboardPage = () => {
  const [hackathons, setHackathons] = useState([]);
  const [eventPageState, setEventPageState] = useState('active');
  const DashboardPageNavbar = () => {
    const buttonLinks = [
      {
        setState: 'active',
        state: 'active',
        title: 'Active Events',
      },
      {
        setState: 'create',
        state: 'create',
        title: 'Create Event',
      },
      {
        setState: 'past',
        state: 'past',
        title: 'Past Events',
      },
    ];
    return (
      <div className="flex justify-between">
        {buttonLinks.map((btn) => {
          return (
            <button
              key={btn.title}
              className={`${
                eventPageState === btn.state
                  ? 'bg-blue-500 scale-125'
                  : 'bg-indigo-500'
              } hover:bg-indigo-700 text-white font-bold py-2 px-4  rounded`}
              onClick={() => setEventPageState(btn.setState)}
            >
              {btn.title}
            </button>
          );
        })}
      </div>
    );
  };
  useEffect(() => {
    fetch('http://localhost:4000/hackathons')
      .then((res) => res.json())
      .then((data) => setHackathons(data));
  }, []);

  const currentDateInMilliseconds = new Date().getTime();

  // Filter active events (events with dateOfEvent greater than the current date)
  const activeEvents = hackathons.filter(
    (event) => event.dateOfEvent >= currentDateInMilliseconds
  );

  // Filter past events (events with dateOfEvent less than or equal to the current date)
  const pastEvents = hackathons.filter(
    (event) => event.dateOfEvent <= currentDateInMilliseconds
  );
  const renderEvents = (arr) => {
    return arr.map((item, index) => (
      <HackatonCard
        key={item.id || index}
        cardImage={item.image}
        hackathonTitle={item.title}
        hackathonDesc={item.shortDesc}
        hackathonOrganization={item.createdBy}
        hackathonLocation={item.location}
        cardId={item.id}
      />
    ));
  };
  return (
    <div className="w-3/4 mx-auto mt-4 my-24">
      <nav className="mb-12">
        <DashboardPageNavbar />
      </nav>
      {eventPageState === 'active' && (
        <div className="grid sm:grid-cols-3 gap-12">
          {renderEvents(activeEvents)}
        </div>
      )}
      {eventPageState === 'create' && <p>This is Create</p>}
      {eventPageState === 'past' && (
        <div className="grid sm:grid-cols-3 gap-12">
          {renderEvents(pastEvents)}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
