import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
export const AboutUsFooterData = [
  {
    name: 'Team',
    linkTo: '/',
  },
  {
    name: 'FAQ',
    linkTo: '/',
  },
  {
    name: 'Terms and Conditions',
    linkTo: '/',
  },
  {
    name: 'Privacy Policy',
    linkTo: '/',
  },
];
export const ContactUsFooterData = [
  {
    name: '+389555555',
    linkTo: 'tel:+389555555',
  },
  {
    name: 'info@ideatex.com',
    linkTo: 'mailto:info@ideatex.com',
  },
];
export const SocialMediaIconsListData = [
  {
    socialMediaLink: 'https://www.instagram.com',
    socialMediaIcon: FaInstagram,
  },
  {
    socialMediaLink: 'https://www.youtube.com',
    socialMediaIcon: FaYoutube,
  },
  {
    socialMediaLink: 'https://www.x.com',
    socialMediaIcon: FaTwitter,
  },
  {
    socialMediaLink: 'https://www.linkedin.com/in/jovantanchevski/',
    socialMediaIcon: FaLinkedin,
  },
  {
    socialMediaLink: 'https://www.facebook.com',
    socialMediaIcon: FaFacebook,
  },
];
export const RenderFooterDiv = ({ title, arr }) => {
  return (
    <div className="grid w-3/4 grid-cols-1 gap-4 sm:w-full">
      <div className="col-span-1">
        <h2 className="text-4xl sm:text-2xl font-bold mb-4">{title}</h2>
        <ul>
          {arr &&
            arr.length > 0 &&
            arr.map((item) => {
              return (
                <li key={item.name}>
                  <Link
                    to={item.linkTo}
                    className="hover:border-b-2  transition font-semibold"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export const RenderSocialLinks = ({ arr, title }) => {
  return (
    <div className="grid w-3/4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:w-full">
      <div className="col-span-1">
        <h2 className="text-4xl sm:text-2xl font-bold mb-4">{title}</h2>
        <div className="flex space-x-2">
          {arr &&
            arr.length > 0 &&
            arr.map((item) => {
              return (
                <Link
                  key={item.socialMediaIcon}
                  target="_blank"
                  to={item.socialMediaLink}
                  className="hover:scale-150 transition"
                >
                  <item.socialMediaIcon className="mr-2" size={20} />
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};
