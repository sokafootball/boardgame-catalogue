import CssBaseline from '@mui/material/CssBaseline';
import '../styles/globals.scss';
import Head from 'next/head';
import ScreenSizeProvider from '../providers/ScreenSizeProvider';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <ScreenSizeProvider>
        <Component {...pageProps} />
      </ScreenSizeProvider>
    </>
  );
};

export default MyApp;
