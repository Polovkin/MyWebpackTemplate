/* Development config:
   ========================================================================== */

const webpack = require('webpack');
const {merge} = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config');
const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',

  devServer: {
    historyApiFallback: true,
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 8080,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      https: true
    }
  },
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
