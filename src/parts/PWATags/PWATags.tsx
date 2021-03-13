const PWATags = () => {
  return (
    <>
      {/* <!-- Must --> */}
      <meta name="format-detection" content="telephone=no" />

      {/* <!-- Android  --> */}
      <meta name="theme-color" content="#7B7FF6" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* <!-- iOS --> */}
      <meta name="apple-mobile-web-app-title" content="Application Title" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="IFMakerSD" />

      {/* <!-- Windows  --> */}
      <meta name="msapplication-navbutton-color" content="#7B7FF6" />
      <meta name="msapplication-TileColor" content="#7B7FF6" />
      <meta
        name="msapplication-TileImage"
        content="/ms-icons/mstile-144x144.png"
      />
      <meta name="msapplication-config" content="browserconfig.xml" />

      {/* <!-- Pinned Sites  --> */}
      <meta name="application-name" content="Application Name" />
      <meta name="msapplication-tooltip" content="Tooltip Text" />
      <meta name="msapplication-starturl" content="/" />

      {/* <!-- Tap highlighting  --> */}
      <meta name="msapplication-tap-highlight" content="no" />

      {/* <!-- UC Mobile Browser  --> */}
      <meta name="full-screen" content="yes" />
      <meta name="browsermode" content="application" />

      {/* <!-- Disable night mode for this page  --> */}
      <meta name="nightmode" content="enable/disable" />

      {/* <!-- Fitscreen  --> */}
      <meta name="viewport" content="uc-fitscreen=yes" />

      {/* <!-- Layout mode --> */}
      <meta name="layoutmode" content="fitscreen/standard" />

      {/* <!-- imagemode - show image even in text only mode  --> */}
      <meta name="imagemode" content="force" />

      {/* <!-- Orientation  --> */}
      <meta name="screen-orientation" content="portrait" />

      {/* <!-- Main Link Tags  --> */}
      <link
        href="favicon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="favicon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link
        href="favicon-48x48.png"
        rel="icon"
        type="image/png"
        sizes="48x48"
      />
      <link
        href="favicon-96x96.png"
        rel="icon"
        type="image/png"
        sizes="96x96"
      />

      {/* <!-- iOS  --> */}
      <link href="apple-touch-icon.png" rel="apple-touch-icon" />
      <link href="apple-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
      <link
        href="apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="120x120"
      />
      <link
        href="apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="152x152"
      />

      {/* <!-- Startup Image  --> */}
      <link
        href="touch-icon-start-up-320x480.png"
        rel="apple-touch-startup-image"
      />

      {/* <!-- Pinned Tab  --> */}
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

      {/* <!-- Android  --> */}
      <link href="android-icon-192x192.png" rel="icon" sizes="192x192" />
      <link href="android-icon-128x128.png" rel="icon" sizes="128x128" />

      {/* <!-- Others --> */}
      <link href="favicon.icon" rel="shortcut icon" type="image/x-icon" />

      {/* <!-- UC Browser  --> */}
      <link
        href="icon-52x52.png"
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
      />
      <link href="icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />

      {/* <!-- Manifest.json  --> */}
      <link href="/manifest.json" rel="manifest" />
    </>
  );
};

export { PWATags };
