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
      <div className='flex flex-col md:flex-row items-center justify-between py-4 px-6 layout'>
        <div>
          <Link href='/'>
            <a className='flex md:flex-row hover:text-primary-600 flex-col flex-shrink-0 items-center'>
              <Image src={Logo} width='80%' height='80%' objectFit='contain' />
            </a>
          </Link>
        </div>
        <h1 className='text-textDark'>The Holistic Spa Room</h1>
      </div>
      <nav>
        <ul className='flex items-center justify-around md:mx-10'>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <CustomLink
                href={href}
                className='text-textLight bg-primary-900 text-xl animated-underline px-2 hover:bg-opacity-50 rounded-t-md'
              >
                {label}
              </CustomLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
