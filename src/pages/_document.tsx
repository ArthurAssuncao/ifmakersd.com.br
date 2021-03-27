import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  linkRef: React.RefObject<HTMLLinkElement>;

  constructor(props: any) {
    super(props);
    this.linkRef = React.createRef<HTMLLinkElement>();
  }

  componentDidMount() {
    if (this.linkRef.current) {
      this.linkRef.current.removeAttribute("media");
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://images.weserv.nl" />

          <link
            rel="stylesheet"
            media="print"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
            ref={this.linkRef}
          />
          <noscript>
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
              rel="stylesheet"
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
