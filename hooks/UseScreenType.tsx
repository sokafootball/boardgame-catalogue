import { useState, useEffect } from 'react';
export interface IScreenSizeType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
}
const useScreenType = () => {
  const defaultScreenSize: IScreenSizeType = {
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLargeDesktop: false,
  };
  const [screenType, setScreenType] =
    useState<IScreenSizeType>(defaultScreenSize);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        let newScreenType = { ...defaultScreenSize };
        if (width < 576) {
          newScreenType.isMobile = true;
        } else if (width < 992) {
          newScreenType.isTablet = true;
        } else if (width < 1441) {
          newScreenType.isDesktop = true;
        } else {
          newScreenType.isLargeDesktop = true;
        }

        setScreenType(newScreenType);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenType;
};

export default useScreenType;
