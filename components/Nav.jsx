import Link from 'next/link';
import Image from 'next/image';
import LogoSVG from 'public/img/logo.svg';

const links = [
  { href: '/about', label: 'About' },
  { href: '/', label: 'Contact' },
  { href: '/', label: 'Book' },
];

export default function Nav() {
  return (
    <header className='sticky top-0 z-50 bg-dark flex-grow-0'>
      <nav className=''>
        <ul className='flex flex-col md:flex-row items-center justify-between py-4 px-6 layout text-white'>
          <li>
            <div>
              <Link href='/'>
                <a className='flex md:flex-row hover:text-primary-400 flex-col flex-shrink-0 items-center'>
                  <LogoSVG width={100} className='stroke-current ' />
                  <h2 className='uppercase font-serif hover:cursor-pointer'>
                    Company
                  </h2>
                </a>
              </Link>
            </div>
          </li>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href}>
                  <a className='text-white hover:text-green-400'>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </ul>
      </nav>
    </header>
  );
}
