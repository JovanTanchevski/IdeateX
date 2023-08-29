import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import { AuthContext } from '../../context/AuthContext';
import LogoImage from '../../images/IdeateXLogo.png';
import { NavLink } from 'react-router-dom';
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isLogged } = React.useContext(AuthContext);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-slate-100 text-black">
      <div className="flex items-center space-x-4">
        <NavLink to="/">
          <img src={LogoImage} alt="Logo" className="w-10 h-10" />
        </NavLink>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <NavLink
          to="/about"
          className="hover:scale-110 transition duration-150 ease-in-out"
        >
          About Us
        </NavLink>
        <NavLink
          to="/our-partners"
          className="hover:scale-110 transition duration-150 ease-in-out"
        >
          Our Partners
        </NavLink>
        <NavLink
          to="/blog"
          className="hover:scale-110 transition duration-150 ease-in-out"
        >
          Blog
        </NavLink>
        <NavLink
          to="/hackatons"
          className="hover:scale-110 transition duration-150 ease-in-out"
        >
          Hackatons
        </NavLink>
        <button className="px-4 py-2 bg-white text-blue-500 font-semibold rounded-full hover:bg-blue-100">
          <NavLink to="/login">{isLogged ? 'Log out' : 'Log in'}</NavLink>
        </button>
      </div>
      {/* Mobile Sidebar Trigger */}
      <div
        className="text-black absolute top-4 right-4 md:hidden"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
        <Sidebar isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
      </div>
    </nav>
  );
};

export default Header;