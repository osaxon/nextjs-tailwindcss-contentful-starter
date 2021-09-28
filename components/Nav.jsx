import Link from 'next/link';
import Image from 'next/image';
import Logo from 'public/img/spa-logo.png';
import CustomLink from './CustomLink';

const links = [
  { href: '/about', label: 'About' },
  { href: '/Services', label: 'Services' },
  { href: '/Contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className='sticky top-0 z-50 flex-grow-0 bg-primary-50 flex flex-col'>
      <div className='flex flex-col md:flex-row justify-between mt-4 layout'>
        {/* Logo */}
        <Link href='/'>
          <a className='flex md:flex-row hover:text-primary-600 flex-col flex-shrink-0 items-center'>
            <Image src={Logo} width='100%' height='100%' objectFit='contain' />
          </a>
        </Link>

        {/* Title and Navigation */}
        <div className='flex flex-col justify-between'>
          <div className=''>
            <h1 className='text-textDark text-center'>The Holistic Spa Room</h1>
          </div>

          {/* Nav Links */}
          <nav className='flex flex-col mt-2'>
            <ul className='flex items-center justify-center md:justify-end gap-2'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <CustomLink
                    href={href}
                    className='text-textLight bg-primary-900 text-xl px-2 animated-underline hover:bg-opacity-50 rounded-t-md'
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
