import React from 'react';
import { AuthContext } from '../../../context/AuthContext';
import NavLinks from './NavLinks';

const Sidebar = ({ isOpen, onToggleSidebar }) => {
  const { isLogged, onLoginHandleClick, onLogOutHandleClick } =
    React.useContext(AuthContext);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-indigo-500 p-4 text-white transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <NavLinks
        isLogged={isLogged}
        onLogOutHandleClick={onLogOutHandleClick}
        onLoginHandleClick={onLoginHandleClick}
      />
      <button
        className="text-white absolute top-4 right-4 md:hidden"
        onClick={onToggleSidebar}
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
      </button>
    </div>
  );
};

export default Sidebar;
