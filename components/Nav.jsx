import Link from 'next/link';
import Image from 'next/image';
import Logo from 'public/img/logo.png';
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
    <header className='sticky top-0 z-50 flex-grow-0 bg-indigo-200 dark:bg-indigo-900 flex flex-col'>
      <div className='flex flex-col md:flex-row justify-between items-center layout'>
        {/* Logo */}

        <Link href='/'>
          <a className='flex md:flex-row flex-col items-center flex-shrink-0 h-20 w-20'>
            {/* <Image src={Logo} width='100%' height='100%' objectFit='contain' /> */}
            <SvgLogo className='dark:fill-red fill-green' />
          </a>
        </Link>

        <div className='dark:bg-indigo-400 rounded-full shadow-lg absolute right-8 top-6 md:right-auto md:top-auto md:relative h-10 w-10'>
          {loaded && colorTheme === 'light' ? (
            <SvgBulb
              className='stroke-yellow rounded-full p-1'
              onClick={() => setTheme('light')}
            />
          ) : (
            <SvgMoon
              className='stroke-blue bg-yellow-200 rounded-full p-1'
              onClick={() => setTheme('dark')}
            />
          )}
        </div>

        {/* Nav Links */}
        <nav className='flex flex-col mt-2'>
          <ul className='flex md:justify-end gap-2'>
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
      </div>
    </header>
  );
}
