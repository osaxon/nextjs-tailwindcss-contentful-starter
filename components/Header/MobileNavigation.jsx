import NavLinks from './NavLinks';
import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import { useEffect } from 'react';
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
    <nav className='md:hidden flex layout items-center h-20'>
      <CgMenuRound
        className='cursor-pointer md:hidden'
        size='48px'
        color='white'
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className='absolute w-2/5 top-20 h-48 border-t-leaf-400 dark:border-t-cerise-500 border-t-2 bg-azure-900 dark:bg-opacity-50 bg-opacity-10 transition-all'>
          <NavLinks closeMenu={closeMenu} />
        </div>
      )}
    </nav>
  );
};

export default MobileNavigation;
