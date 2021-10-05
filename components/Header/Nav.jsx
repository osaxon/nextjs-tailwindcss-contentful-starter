import React, { useState } from 'react';
import MobileNavMenu from './MobileNavMenu';
import NavMenu from './NavMenu';

const Nav = () => {
  return (
    <nav className='flex layout items-center border justify-end'>
      <NavMenu />
      <MobileNavMenu />
    </nav>
  );
};

export default Nav;
