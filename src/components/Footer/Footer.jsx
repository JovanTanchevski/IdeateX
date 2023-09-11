import React from 'react';

import {
  AboutUsFooterData,
  ContactUsFooterData,
  RenderFooterDiv,
  RenderSocialLinks,
  SocialMediaIconsListData,
} from './FooterLinks';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between">
        <RenderFooterDiv title="About Us" arr={AboutUsFooterData} />
        <RenderSocialLinks title="Join Us" arr={SocialMediaIconsListData} />
        <RenderFooterDiv title="Contact" arr={ContactUsFooterData} />
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Images</h2>
          <div className="flex">
            <img src="image1.jpg" alt="Image 1" className="w-12 h-12 mr-2" />
            <img src="image2.jpg" alt="Image 2" className="w-12 h-12" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
