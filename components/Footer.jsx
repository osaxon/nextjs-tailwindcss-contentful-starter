import CustomLink from '@/components/CustomLink';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className='flex-grow-0 border-t layout py-2'>
      <div className='flex flex-col items-center justify-center text-white layout'>
        <div className='flex gap-2 mb-2'>
          <SocialIcon url='https://twitter.com/' />
          <SocialIcon url='https://github.com/' />
          <SocialIcon url='https://facebook.com/' />
        </div>
        <div className='text-gray-500'>
          © {new Date().getFullYear()} Website by{' '}
          <CustomLink href='/'>Oliver Saxon</CustomLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
