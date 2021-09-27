import Link from 'next/link';
import Image from 'next/image';
import Logo from 'public/img/spa-logo.png';

const links = [
  { href: '/about', label: 'About' },
  { href: '/Services', label: 'Services' },
  { href: '/Contact', label: 'Contact' },
  { href: '/Book', label: 'Book' },
];

export default function Nav() {
  return (
    <header className='sticky top-0 z-50 bg-primary-50 flex-grow-0'>
      <nav className=''>
        <ul className='flex flex-col md:flex-row items-center justify-between py-4 px-6 layout text-white'>
          <li>
            <div>
              <Link href='/'>
                <a className='flex md:flex-row hover:text-primary-600 flex-col flex-shrink-0 items-center'>
                  <Image
                    src={Logo}
                    width='80%'
                    height='80%'
                    objectFit='contain'
                  />
                </a>
              </Link>
            </div>
          </li>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href}>
                  <a className='text-primary-600 hover:text-primary-300'>
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </ul>
      </nav>
    </header>
  );
}
