import { createContext } from 'react';
export const ScreenSizeContext = createContext({});
import useScreenType from '../hooks/UseScreenType';

const ScreenSizeProvider = ({ children }) => {
  return (
    <ScreenSizeContext.Provider value={useScreenType()}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export default ScreenSizeProvider;
