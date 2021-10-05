import Header from '../Header/Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <div className='bg-azure-800 dark:bg-opacity-90 bg-opacity-10'>
      <section className='flex min-h-screen flex-col justify-between'>
        <Header />
        {children}
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
