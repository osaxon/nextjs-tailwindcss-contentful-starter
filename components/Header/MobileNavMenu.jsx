import NavLinks from './NavLinks';
import { useState } from 'react';
import SvgCoil from '../SvgComps/SvgCoil';
import useWindowSize from '../hooks/useWindowSize';
import { useEffect } from 'react/cjs/react.development';
import { CgMenuRound } from 'react-icons/cg';

const MobileNavMenu = () => {
  const [open, setOpen] = useState(false);
  const breakpoint = 640;

  const size = useWindowSize();
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    size.width > breakpoint ? closeMenu() : '';
  }, [size]);

  return (
    <div className='flex md:hidden items-center'>
      {open && <NavLinks />}
      <CgMenuRound
        className='cursor-pointer'
        size='40px'
        onClick={() => setOpen(!open)}
      />
    </div>
  );
};

export default MobileNavMenu;
