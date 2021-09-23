import CustomLink from '@/components/CustomLink';

const Footer = () => {
  return (
    <footer className='flex-grow-0 border-t layout py-2 md:py-4'>
      <div className='flex flex-col items-center justify-center text-white layout'>
        <div className='text-gray-500'>
          © {new Date().getFullYear()} By{' '}
          <CustomLink href='/'>Oliver Saxon</CustomLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
