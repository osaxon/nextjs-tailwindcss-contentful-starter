import CustomLink from 'components/Utils/CustomLink.jsx';

const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

const NavLinks = (props) => {
  return (
    <ul className='flex flex-col md:flex-row h-full justify-around mt-2'>
      {links.map(({ href, label }) => (
        <li onClick={props.closeMenu} key={href} className='px-2 h-full'>
          <CustomLink href={href}>
            <h4>{label}</h4>
          </CustomLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
