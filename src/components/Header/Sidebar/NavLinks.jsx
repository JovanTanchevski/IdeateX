import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ isLogged, onLogOutHandleClick, onLoginHandleClick }) => {
  return (
    <>
      <NavLink to="/about" className="block my-2">
        About Us
      </NavLink>
      <NavLink to="/our-partners" className="block my-2">
        Our Partners
      </NavLink>
      <NavLink to="/blog" className="block my-2">
        Blog
      </NavLink>
      <NavLink to="/hackatons" className="block my-2">
        Hackatons
      </NavLink>
      <button className="px-4 py-2 bg-white text-blue-500 font-semibold rounded-full hover:bg-gray-100 w-full">
        <NavLink to="/login">{isLogged ? 'Log out' : 'Log in'}</NavLink>
      </button>
    </>
  );
};

export default NavLinks;
