import DarkModeToggle from '../DarkModeToggle';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

const NavBar = () => {
  return (
    <div className='flex layout items-center'>
      <MobileNavigation />
      <Navigation />
      <DarkModeToggle />
    </div>
  );
};

export default NavBar;
