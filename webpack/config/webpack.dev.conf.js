/* Development config:
   ========================================================================== */

const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 8082,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: 'sourcemaps/[file].map[query]',
      exclude: ['vendor.js'],
    }),
  ],
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
