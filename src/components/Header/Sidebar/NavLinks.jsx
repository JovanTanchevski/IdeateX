import React from 'react';

const NavLinks = ({ isLogged, onLogOutHandleClick, onLoginHandleClick }) => {
  return (
    <>
      <a href="/" className="block my-2">
        About Us
      </a>
      <a href="/" className="block my-2">
        Our Partners
      </a>
      <a href="/" className="block my-2">
        Blog
      </a>
      <a href="/" className="block my-2">
        Hackatons
      </a>
      <button
        className="px-4 py-2 bg-white text-blue-500 font-semibold rounded-full hover:bg-gray-100 w-full"
        onClick={
          isLogged
            ? onLogOutHandleClick
            : () => onLoginHandleClick('user', 'password')
        }
      >
        {isLogged ? 'Log out' : 'Log in'}
      </button>
    </>
  );
};

export default NavLinks;
