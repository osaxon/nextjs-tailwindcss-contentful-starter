import DarkModeToggle from '../DarkModeToggle';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

const NavBar = () => {
  return (
    <div className='flex  layout items-center'>
      <MobileNavigation />
      <Navigation />
      <div className='flex flex-grow h-full items-center justify-center'>
        <h1 className='px-2 lg:text-center flex-grow'>Oli Saxon</h1>
        <div className=' flex flex-grow justify-end'>
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
