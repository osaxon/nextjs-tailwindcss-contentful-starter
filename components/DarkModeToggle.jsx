import React from 'react';
import useDarkMode from './hooks/useDarkMode';
import { useLoaded } from './hooks/useLoaded';
import SvgBulb from './SvgComps/SvgBulb';
import SvgMoon from './SvgComps/SvgMoon';

const DarkModeToggle = () => {
  const loaded = useLoaded();
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className='flex items-center justify-end h-full'>
      <button className='rounded-full h-10 w-10'>
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
    </div>
  );
};

export default DarkModeToggle;
