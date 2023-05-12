import CssBaseline from '@mui/material/CssBaseline';
import '../styles/globals.scss';
import Head from 'next/head';
import ScreenSizeProvider from '../providers/ScreenSizeProvider';
import { store } from '../store';
import { Provider } from 'react-redux';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <CssBaseline />
        <ScreenSizeProvider>
          <Component {...pageProps} />
        </ScreenSizeProvider>
      </Provider>
      ,
    </>
  );
};

export default MyApp;
