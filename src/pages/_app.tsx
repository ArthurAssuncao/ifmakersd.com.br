import { NextComponentType } from "next";
import { DefaultSeo } from "next-seo";
import { AppContext, AppInitialProps, AppProps } from "next/app";
// import your default seo configuration
import SEO from "../../next-seo.config";
import "../assets/styles/globals.scss";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
