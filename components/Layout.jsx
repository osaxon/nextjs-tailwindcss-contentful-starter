import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='bg-[#E4F1FE]'>
      <section className='border border-red-500 flex min-h-screen flex-col justify-between'>
        <Nav />
        {children}
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
