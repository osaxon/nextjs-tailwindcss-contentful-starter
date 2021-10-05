import React from 'react';
import CustomLink from 'components/Utils/CustomLink.jsx';
import NavLinks from './NavLinks';

const links = [
  { href: '/about', label: 'About' },
  { href: '/Services', label: 'Services' },
  { href: '/Contact', label: 'Contact' },
];

const NavMenu = (props) => {
  return (
    <div className='hidden md:flex h-20 items-center'>
      <NavLinks />
    </div>
  );
};

export default NavMenu;
