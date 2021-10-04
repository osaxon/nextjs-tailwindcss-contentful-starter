import CustomLink from './CustomLink';
import SvgBulb from './SvgBulb.jsx';
import SvgMoon from './SvgMoon';

import useDarkMode from './hooks/useDarkMode';
import { useLoaded } from './hooks/useLoaded';
import SvgLogo from './SvgLogo';

const links = [
  { href: '/about', label: 'About' },
  { href: '/Services', label: 'Services' },
  { href: '/Contact', label: 'Contact' },
];

export default function Nav() {
  const [colorTheme, setTheme] = useDarkMode();
  const loaded = useLoaded();

  return (
    <header className='sticky top-0 z-50 flex-grow-0 bg-indigo-200 dark:bg-indigo-900 transition-colors'>
      <div className='flex flex-col layout'>
        {/* Nav Links & Logo */}

        <nav className='flex flex-col md:flex-row z-50 w-full'>
          <div className='flex items-center w-full'>
            {/* Logo */}
            <CustomLink
              className='flex md:flex-row flex-col items-center flex-shrink-0 h-20 w-20'
              href='/'
            >
              <SvgLogo className='dark:fill-red fill-green transition-colors' />
            </CustomLink>
            <h4>Website Heading</h4>
          </div>

          {/* Nav links */}
          <ul className='flex justify-center items-center'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <CustomLink
                  href={href}
                  className='text-xl px-2 animated-underline hover:bg-opacity-50 rounded-t-md'
                >
                  <h4>{label}</h4>
                </CustomLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Ligh / Dark toggle */}
      </div>
    </header>
  );
}
