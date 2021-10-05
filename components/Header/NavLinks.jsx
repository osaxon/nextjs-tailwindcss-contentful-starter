import CustomLink from 'components/Utils/CustomLink.jsx';

const links = [
  { href: '/about', label: 'About' },
  { href: '/Services', label: 'Services' },
  { href: '/Contact', label: 'Contact' },
];

const NavLinks = () => {
  return (
    <ul className='flex flex-col md:flex-row absolute md:relative'>
      {links.map(({ href, label }) => (
        <li key={href} className='pr-2'>
          <CustomLink href={href}>{label}</CustomLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
