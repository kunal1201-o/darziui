import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import {BsFillGrid3X3GapFill} from 'react-icons/bs'
import { RiStackshareLine } from 'react-icons/ri';

export const SidebarData = [

  {
    title: 'Your Order',
    path: '/YourOrder',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Buy Again',
    path: '/Categories',
    icon: < BsFillGrid3X3GapFill   />,
    cName: 'nav-text'
  },
  
  {
    title: 'settings',
    path: '/Readymade',
    icon: <FaIcons.FaShoppingBag />,
    cName: 'nav-text'
  },
  {
    title: 'Contact Us',
    path: '/Contact',
    icon: <FaIcons.FaPhoneAlt />,
    cName: 'nav-text'
  },
  {
    title: 'About US',
    path: '/About',
    icon: <FaIcons.FaInfoCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Refferal',
    path: '/',
    icon: <RiStackshareLine />,
    cName: 'nav-text'
  },
  {
    title: 'Seller',
    path: '/',
    icon: <FaIcons.FaUserFriends/>,
    cName: 'nav-text'
  },
 
 
  {
    title: 'Contact Detail',
    path: '',
    icon: "",
    cName: 'nav-text'
  },


 
]