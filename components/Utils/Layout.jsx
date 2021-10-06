import Header from '../Header/Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <div className='dark:bg-azure-900 dark:bg-opacity-90 bg-leaf-100 bg-opacity-25'>
      <section className='flex flex-col min-h-screen justify-between'>
        <Header />
        {children}
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
