import SvgLogo from '../SvgComps/SvgLogo';
import NavBar from './NavBar';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-azure-500 bg-opacity-10'>
      <NavBar />
    </header>
  );
}
