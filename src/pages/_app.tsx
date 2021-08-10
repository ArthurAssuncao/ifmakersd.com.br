import { NextComponentType } from 'next';
import { DefaultSeo } from 'next-seo';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import ReactGA from 'react-ga';
// import your default seo configuration
import SEO from '../../next-seo.config';
import '../assets/styles/globals.scss';
import { PWATags } from '../parts/PWATags';

interface ReactGAProps {
  debug: boolean;
}

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  const reactGAOptions: ReactGAProps = {
    debug: process.env.NODE_ENV === 'production' ? false : true,
  };

  useEffect(() => {
    ReactGA.initialize('G-7ZXTBVBQEE', reactGAOptions);
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"
        />
        <meta
          name="description"
          content="Laboratório IFMaker do IFSudesteMG campus Santos Dumont"
        />
        <meta name="keywords" content="indústria 4.0" />
        <title>Laboratório IFMaker do IFSudesteMG campus Santos Dumont</title>

        <PWATags />

        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <script
        src="/path/to/bower_components/react-ga/dist/react-ga.min.js"
        async
      ></script>
    </>
  );
};

export default MyApp;
