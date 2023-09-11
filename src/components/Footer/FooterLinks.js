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
    name: 'Terms and Contidions',
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
    <div className="flex-1">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ul>
        {arr &&
          arr.length > 0 &&
          arr.map((item) => {
            return (
              <li key={item.name}>
                <Link to={item.linkTo} className="hover:text-xl transition">
                  {item.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export const RenderSocialLinks = ({ arr, title }) => {
  return (
    <div className="flex-1">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
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
  );
};
