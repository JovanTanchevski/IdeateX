import React from 'react';
import SidebarAdminPanel from '../Sidebar-Admin-Panel/Sidebar-Admin-Panel';
import { Outlet } from 'react-router-dom';

const AdminHomePage = () => {
  return (
    <div className="flex">
      <SidebarAdminPanel />
      <Outlet />
    </div>
  );
};

export default AdminHomePage;
