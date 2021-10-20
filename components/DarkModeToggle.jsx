import React from 'react';
import useDarkMode from './hooks/useDarkMode';
import { useLoaded } from './hooks/useLoaded';
import SvgBulb from './SvgComps/SvgBulb';
import SvgMoon from './SvgComps/SvgMoon';

const DarkModeToggle = () => {
  const loaded = useLoaded();
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <button className='border rounded-lg h-12 w-12'>
      {loaded && colorTheme === 'light' ? (
        <SvgBulb
          className='stroke-leaf rounded-full p-1'
          onClick={() => setTheme('light')}
        />
      ) : (
        <SvgMoon
          className='stroke-red rounded-full p-1'
          onClick={() => setTheme('dark')}
        />
      )}
    </button>
  );
};

export default DarkModeToggle;
