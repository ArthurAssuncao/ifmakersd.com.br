const withPlugins = require ('next-compose-plugins');
const withImages = require ('next-images');
const withPWA = require ('next-pwa');
const withTranspileModules = require ('next-transpile-modules');
const path = require ('path');
const withReactSvg = require ('next-react-svg');

const nextConfig = {
  webpack: function (config) {
    config.module.rules.push ({
      test: /\.(eot|woff|woff2|ttf|mp3)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
  sassOptions: {
    includePaths: [path.join (__dirname, 'src/assets/styles')],
  },
  experimental: {scss: true},
};

module.exports = withPlugins (
  [
    [withImages],
    [
      withPWA ({
        pwa: {
          dest: 'public',
        },
      }),
    ],
    [
      withReactSvg ({
        include: path.resolve (__dirname, 'src/assets/images/'),
        webpack (config, options) {
          return config;
        },
      }),
    ],
  ],
  nextConfig
);
