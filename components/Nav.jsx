import Link from 'next/link';
import Image from 'next/image';
import Logo from 'public/img/logo.png';
import CustomLink from './CustomLink';
import SvgBulb from './SvgBulb.jsx';
import SvgMoon from './SvgMoon';

import useDarkMode from './hooks/useDarkMode';

const links = [
  { href: '/about', label: 'About' },
  { href: '/Services', label: 'Services' },
  { href: '/Contact', label: 'Contact' },
];

export default function Nav() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <header className='sticky top-0 z-50 flex-grow-0 bg-gray-200 dark:bg-gray-800 flex flex-col'>
      <div className='flex flex-col md:flex-row justify-between layout'>
        {/* Logo */}

        <Link href='/'>
          <a className='flex md:flex-row hover:text-yellow-400 flex-col items-center flex-shrink-0'>
            <Image src={Logo} width='100%' height='100%' objectFit='contain' />
          </a>
        </Link>

        {/* Title and Navigation */}
        <div className='flex flex-col justify-end'>
          <span
            onClick={() => setTheme(colorTheme)}
            className='w-10 h-10 bg-indigo-500 rounded-full shadow-lg cursor-pointer text-white flex items-center justify-center'
          >
            {colorTheme === 'light' ? (
              <SvgMoon width='80' />
            ) : (
              <SvgBulb width='80' />
            )}
          </span>

          {/* Nav Links */}
          <nav className='flex flex-col mt-2'>
            <ul className='flex items-center justify-center md:justify-end gap-2'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <CustomLink
                    href={href}
                    className='bg-gray-800 text-xl px-2 animated-underline text-gray-100 hover:bg-opacity-50 rounded-t-md'
                  >
                    {label}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
