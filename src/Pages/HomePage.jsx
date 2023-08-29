import React, { useEffect, useState } from 'react';
import BannerSection from '../components/HomePage/BannerSection';
import '../components/HomePage/Styles/HomePage.css';
import TeamGeneratorSection from '../components/HomePage/TeamGeneratorSection';
const HackathonsSection = React.lazy(() =>
  import('../components/HomePage/Hackathons-Section/HackatonsSection')
);

const HomePage = () => {
  const [hackathons, setHackathons] = useState([]);
  console.log(hackathons);
  useEffect(() => {
    fetch('http://localhost:4000/hackathons?_limit=4')
      .then((res) => res.json())
      .then((data) => setHackathons(data));
  }, []);
  return (
    <React.Fragment>
      <BannerSection />
      <TeamGeneratorSection />
      <React.Suspense
        fallback={
          <div className="text-center mt-8">
            <h1 className="text-4xl font-bold">Loading...</h1>
          </div>
        }
      >
        <HackathonsSection hackathonsDB={hackathons} />
      </React.Suspense>
    </React.Fragment>
  );
};

export default HomePage;
