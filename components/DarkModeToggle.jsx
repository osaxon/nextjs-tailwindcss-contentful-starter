import React from 'react';
import useDarkMode from './hooks/useDarkMode';
import { useLoaded } from './hooks/useLoaded';

const DarkModeToggle = () => {
  const loaded = useLoaded();
  const [colorTheme, setTheme] = useDarkMode();

  return (
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
  );
};

export default DarkModeToggle;
