import Document, { Head, Html, Main, NextScript } from "next/document";
import { PWATags } from "../parts/PWATags";
export default class SiteDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta
            name="description"
            content="Laboratório IFMaker do IFSudesteMG campus Santos Dumont"
          />
          <meta name="keywords" content="indústria 4.0" />
          <title>Laboratório IFMaker do IFSudesteMG campus Santos Dumont</title>

          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="favicon.png" type="image/png" />

          <PWATags />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
