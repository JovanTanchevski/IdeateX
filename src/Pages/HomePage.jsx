import React, { useEffect, useState } from 'react';
import BannerSection from '../components/HomePage/BannerSection';
import '../components/HomePage/Styles/HomePage.css';
import TeamGeneratorSection from '../components/HomePage/TeamGeneratorSection';
import { HackatonsSection } from '../components/HomePage/Hackathons-Section/HackatonsSection';

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
      <HackatonsSection hackathonsDB={hackathons} />
    </React.Fragment>
  );
};

export default HomePage;
