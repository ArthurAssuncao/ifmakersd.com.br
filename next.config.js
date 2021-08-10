const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const path = require('path');

const prod = process.env.NODE_ENV === 'production';

const nextConfig = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|mp3|svg)$/,
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
    includePaths: [path.join(__dirname, 'src/assets/styles')],
  },
};

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
          disable: prod ? false : true,
        },
      },
    ],
  ],
  nextConfig
);
