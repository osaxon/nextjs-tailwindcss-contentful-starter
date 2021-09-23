import Link from 'next/link';
import Image from 'next/image';
import Logo from 'public/img/spa-logo.png';

const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/book', label: 'Book' },
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
                  <Image
                    src={Logo}
                    width='100%'
                    height='100%'
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
                  <a className='text-white hover:text-primary-400'>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </ul>
      </nav>
    </header>
  );
}
