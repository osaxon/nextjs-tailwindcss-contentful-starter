import React, { useState, useEffect } from 'react';
import SvgLogo from '../SvgComps/SvgLogo';
import NavLinks from './NavLinks';

const Navigation = () => {
  return (
    <nav className='hidden items-center md:flex'>
      <div className='w-16 fill-leaf dark:fill-red'>
        <SvgLogo />
      </div>
      <div className='flex'>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navigation;
