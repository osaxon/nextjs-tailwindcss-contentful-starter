import Header from '../Header/Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='flex flex-col min-h-screen'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
