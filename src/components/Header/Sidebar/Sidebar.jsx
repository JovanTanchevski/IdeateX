import React from 'react';

const Sidebar = ({ isOpen, onToggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-indigo-500 p-4 text-white transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
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
