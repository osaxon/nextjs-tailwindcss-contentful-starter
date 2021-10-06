import CustomLink from 'components/Utils/CustomLink.jsx';

const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

const NavLinks = (props) => {
  return (
    <ul className='flex flex-col md:flex-row w-full m-2 justify-between'>
      {links.map(({ href, label }) => (
        <li onClick={props.closeMenu} key={href} className='px-2 text-azure-50'>
          <CustomLink href={href}>
            <h4>{label}</h4>
          </CustomLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
