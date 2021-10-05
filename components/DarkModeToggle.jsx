import React from 'react';
import useDarkMode from './hooks/useDarkMode';
import { useLoaded } from './hooks/useLoaded';
import SvgBulb from './SvgComps/SvgBulb';
import SvgMoon from './SvgComps/SvgMoon';

const DarkModeToggle = () => {
  const loaded = useLoaded();
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className='flex items-center justify-end pt-2 layout'>
      <div className='rounded-full h-10 w-10'>
        {loaded && colorTheme === 'light' ? (
          <SvgBulb
            className='stroke-red rounded-full p-1'
            onClick={() => setTheme('light')}
          />
        ) : (
          <SvgMoon
            className='stroke-leaf rounded-full p-1'
            onClick={() => setTheme('dark')}
          />
        )}
      </div>
    </div>
  );
};

export default DarkModeToggle;
