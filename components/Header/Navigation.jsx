import React, { useState, useEffect } from 'react';
import SvgLogo from '../SvgComps/SvgLogo';
import CustomLink from '../Utils/CustomLink';
import NavLinks from './NavLinks';

const Navigation = () => {
  return (
    <nav className='hidden h-full items-center md:flex'>
      <div className='flex'>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navigation;
