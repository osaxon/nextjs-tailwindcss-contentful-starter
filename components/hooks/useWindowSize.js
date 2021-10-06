import { useState, useEffect } from 'react';

function handleResize(fn) {
  fn({
    width: window.innerWidth,
    height: window.innerHeight,
  });
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  handleResize(setWindowSize);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return windowSize;
}

export default useWindowSize;
