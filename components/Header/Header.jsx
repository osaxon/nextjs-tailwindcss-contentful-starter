import SvgLogo from '../SvgComps/SvgLogo';
import Nav from './Nav';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 h-20 flex-grow-0 flex bg-indigo-200 dark:bg-indigo-900 transition-colors'>
      <Nav />
    </header>
  );
}
