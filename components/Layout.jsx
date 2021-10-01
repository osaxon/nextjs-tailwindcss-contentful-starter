import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='dark:bg-gray-800 bg-purple-50'>
      <section className='flex min-h-screen flex-col justify-between'>
        <Nav />
        {children}
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
