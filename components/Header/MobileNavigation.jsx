import NavLinks from './NavLinks';
import { useState } from 'react';
import SvgCoil from '../SvgComps/SvgCoil';
import useWindowSize from '../hooks/useWindowSize';
import { useEffect } from 'react/cjs/react.development';
import { CgMenuRound } from 'react-icons/cg';

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  // prevent mobile menu staying open after window is resixed
  const breakpoint = 640;
  const size = useWindowSize();
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    size.width > breakpoint ? closeMenu() : '';
  }, [size]);

  return (
    <nav className='flex items-center h-20'>
      <CgMenuRound
        className='cursor-pointer md:hidden'
        size='40px'
        color='white'
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className='absolute w-60 top-20 border-t-leaf-400 dark:border-t-cerise-500 border-t-2 bg-azure-900 dark:bg-opacity-90 bg-opacity-10 transition-all'>
          <NavLinks closeMenu={closeMenu} />
        </div>
      )}
    </nav>
  );
};

export default MobileNavigation;
