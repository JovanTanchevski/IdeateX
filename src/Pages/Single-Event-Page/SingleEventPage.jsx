import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SingleEventPage = () => {
  const [singleEvent, setSingleEvent] = useState({});
  const location = useLocation();
  const eventID = location.pathname.replace('/event/', '');

  useEffect(() => {
    if (eventID) {
      fetch(`http://localhost:4000/hackathons?id=${eventID}`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.length > 0) {
            setSingleEvent(data[0]);
          }
        });
    }
    return;
  }, [eventID]);

  return (
    <div>
      {singleEvent ? (
        <h1>{singleEvent.title}</h1>
      ) : (
        <div>
          {' '}
          <h1>
            The single event page you're currently looking for is broken
          </h1>{' '}
        </div>
      )}
    </div>
  );
};

export default SingleEventPage;
