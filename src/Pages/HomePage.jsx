import React from 'react';
import BannerSection from '../components/HomePage/BannerSection';
import '../components/HomePage/Styles/HomePage.css';
import TeamGeneratorSection from '../components/HomePage/TeamGeneratorSection';
const HomePage = () => {
  return (
    <React.Fragment>
      <BannerSection />
      <TeamGeneratorSection />
    </React.Fragment>
  );
};

export default HomePage;
