import { useState, useEffect } from 'react';

/**
 * useWindowSize - Pencere boyutunu takip eder
 * Responsive tasarım kontrolleri için idealdir
 * 
 * @returns {{ width: number, height: number, isMobile: boolean, isTablet: boolean, isDesktop: boolean }}
 * 
 * @example
 * const { width, isMobile, isDesktop } = useWindowSize();
 * 
 * if (isMobile) {
 *   // Mobile görünüm
 * }
 */
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // İlk render'da boyutu al
    handleResize();

    // Resize event'ini dinle
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width: windowSize.width,
    height: windowSize.height,
    isMobile: windowSize.width < 768,
    isTablet: windowSize.width >= 768 && windowSize.width < 1024,
    isDesktop: windowSize.width >= 1024,
  };
};

export default useWindowSize;
