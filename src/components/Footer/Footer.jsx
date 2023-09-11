import React from 'react';
import {
  AboutUsFooterData,
  ContactUsFooterData,
  RenderFooterDiv,
  RenderSocialLinks,
  SocialMediaIconsListData,
} from './FooterLinks';
import footerLogoImage from '../../images/IdeateXLogo.png';
const Footer = () => {
  const ImageFooterSection = () => {
    return (
      <div className="grid w-3/4 grid-cols-1  gap-4 sm:w-full">
        <h2 className="text-4xl sm:text-2xl font-bold mb-4">Powered by</h2>
        <div>
          <img src={footerLogoImage} alt="img" className="w-12 h-12 mr-2" />
        </div>
      </div>
    );
  };
  return (
    <footer className="py-12 text-indigo-800 border-t-4">
      <div className="place-items-center sm:place-items-start container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:justify-between ">
        <RenderFooterDiv title="About Us" arr={AboutUsFooterData} />
        <RenderSocialLinks title="Join Us" arr={SocialMediaIconsListData} />
        <RenderFooterDiv title="Contact" arr={ContactUsFooterData} />
        <ImageFooterSection />
      </div>
    </footer>
  );
};

export default Footer;
