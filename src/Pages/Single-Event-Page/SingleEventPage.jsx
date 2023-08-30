import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Error404Page from '../../components/404Page/Error404Page';

const SingleEventPage = () => {
  const [singleEvent, setSingleEvent] = useState({});
  const location = useLocation();
  const eventID = location.pathname.replace('/event/', '');

  useEffect(() => {
    if (eventID) {
      fetch(`http://localhost:4000/hackathons?id=${eventID}`)
        .then((res) => {
          if (res.status === 404) {
            throw new Error('Event not found'); // Throw an error for 404 response
          }
          return res.json();
        })
        .then((data) => {
          if (data && data.length > 0) {
            setSingleEvent(data[0]);
          }
        })
        .catch((error) => {
          setSingleEvent(null);
        });
    }
  }, [eventID]);

  return (
    <div>
      {singleEvent ? (
        singleEvent !== null ? (
          <div>
            <h1>{singleEvent.title}</h1>
          </div>
        ) : (
          <Error404Page />
        )
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default SingleEventPage;
