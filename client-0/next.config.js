// next.config.js
const withSvgr = require('@svgr/webpack');

module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false, // Optional: disable SVGO optimization
          },
        },
      ],
    });

    return config;
  },
};
