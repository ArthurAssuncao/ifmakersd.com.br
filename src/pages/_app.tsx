import { NextComponentType } from "next";
import { DefaultSeo } from "next-seo";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import Head from "next/head";
// import your default seo configuration
import SEO from "../../next-seo.config";
import "../assets/styles/globals.scss";
import { PWATags } from "../parts/PWATags";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
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
    </>
  );
};

export default MyApp;
