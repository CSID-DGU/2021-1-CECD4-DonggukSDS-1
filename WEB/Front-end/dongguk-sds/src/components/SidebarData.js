import React from 'react';
import { AiFillHome, AiFillNotification, AiFillControl, AiFillSetting } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md';
import { IoAnalyticsSharp } from 'react-icons/io5';

export const SidebarData = [
  {
    title: 'Home',
    path: '/Home',
    icon: <AiFillHome />,
  },
  {
    title: 'Notification',
    path: '/Notification',
    icon: <AiFillNotification />,
  },
  {
    title: 'Dashboard',
    path: '/Dashboard',
    icon: <MdDashboard />,
  },
  {
    title: 'Control',
    path: '/Control',
    icon: <AiFillControl />,
  },
  {
    title: 'Analysis',
    path: '/Analysis',
    icon: <IoAnalyticsSharp />,
  },
  {
    title: 'Settings',
    path: '/Settings',
    icon: <AiFillSetting />,
  }
];