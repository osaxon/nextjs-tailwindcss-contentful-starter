import Nav from './Nav';
import Footer from './Footer';
import SvgBulb from './SvgBulb';
import SvgMoon from './SvgMoon';
import useDarkMode from './hooks/useDarkMode';
import { useLoaded } from './hooks/useLoaded';

const Layout = ({ children }) => {
  const [colorTheme, setTheme] = useDarkMode();
  const loaded = useLoaded();
  return (
    <div className='dark:bg-gray-800 bg-purple-50'>
      <section className='flex min-h-screen flex-col justify-between'>
        <Nav />
        <div className='flex items-center justify-end pt-2 layout'>
          <div className='rounded-fullh-8 w-8'>
            {loaded && colorTheme === 'light' ? (
              <SvgBulb
                className='stroke-yellow rounded-full p-1'
                onClick={() => setTheme('light')}
              />
            ) : (
              <SvgMoon
                className='stroke-yellow rounded-full p-1'
                onClick={() => setTheme('dark')}
              />
            )}
          </div>
        </div>
        {children}
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
