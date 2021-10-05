import SvgLogo from '../SvgComps/SvgLogo';
import NavBar from './NavBar';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 h-20 flex-grow-0 flex  bg-azure-900 dark:bg-opacity-90 bg-opacity-10 transition-colors'>
      <NavBar />
    </header>
  );
}
