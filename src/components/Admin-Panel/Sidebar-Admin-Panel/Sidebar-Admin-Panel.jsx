import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import {
  FiHome,
  FiEdit,
  FiBell,
  FiUser,
  FiBarChart2,
  FiSettings,
} from 'react-icons/fi'; // You can import other icons as needed
import LogoImage from '../../../images/IdeateXLogo.png';
import { AuthContext } from '../../../context/AuthContext';
const sidebarLinks = [
  {
    url: '/admin-panel/dashboard',
    title: 'Dashboard',
    icon: <FiHome />,
  },
  {
    url: '/admin-panel/create-event',
    title: 'Create Event',
    icon: <FiEdit />,
  },
  {
    url: '/admin-panel/notifications',
    title: 'Notifications',
    icon: <FiBell />,
  },
  {
    url: '/admin-panel/analysis',
    title: 'Analysis',
    icon: <FiBarChart2 />,
  },
  {
    url: '/admin-panel/profile',
    title: 'Profile',
    icon: <FiUser />,
  },
  {
    url: '/admin-panel/customization',
    title: 'Customization',
    icon: <FiSettings />,
  },
];
const SidebarAdminPanel = () => {
  const { onLogOutHandleClick } = useContext(AuthContext);
  const LogOutButton = () => {
    return (
      <div className="p-4 w-full my-12">
        <button
          onClick={onLogOutHandleClick}
          className="bg-transparent w-full hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded"
        >
          Log Out
        </button>
      </div>
    );
  };
  const AdminPanelHeader = () => {
    return (
      <div className="p-4 flex items-center">
        <img
          src={LogoImage}
          alt="Admin Logo"
          className="w-8 h-8 rounded-full"
        />
        <span className=" ml-2 text-lg">Admin Panel</span>
      </div>
    );
  };
  return (
    <div className="border w-64 h-full flex flex-col min-h-screen">
      <AdminPanelHeader />
      {/* Navigation links */}
      <ul className="flex-grow">
        {sidebarLinks.map((item) => {
          return (
            <li key={item.url} className="p-4">
              <Link to={item.url} className=" flex items-center">
                <span className="mr-2">{item.icon}</span> {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <LogOutButton />
    </div>
  );
};

export default SidebarAdminPanel;
