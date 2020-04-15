/* Base config:
   ========================================================================== */
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// Main const. Feel free to change it
const PATHS = {
  src: path.join(__dirname, '../../src'),
  dist: path.join(__dirname, (process.env.NODE_ENV === 'production' ? '../../public' : '../../dist')),
  webpack: path.join(__dirname, '../../webpack'),
  assets: 'assets/',
};

// PUG
const PAGES_DIR = `${PATHS.src}/pug/pages`;
const PAGES = fs
    .readdirSync(PAGES_DIR)
    .filter((fileName) => fileName.endsWith('.pug'));
// HTML
// const PAGES_DIR = `${PATHS.src}/pages`;
// const PAGES = fs
//     .readdirSync(PAGES_DIR)
//     .filter((fileName) => fileName.endsWith('.html'));
// PHP
// const PAGES_PHP = fs
//     .readdirSync(PATHS.src)
//     .filter((fileName) => fileName.endsWith('.php'));
module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    app: PATHS.webpack,
    // module: `${PATHS.src}/your-module.js`,
  },
  output: {
    filename: `${PATHS.assets}js/[name].[contenthash].js`,
    path: PATHS.dist,
    publicPath: '',

  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      // TypeScript
      {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      // {
      //   // JavaScript
      //   test: /\.js$/,
      //   loader: 'babel-loader',
      //   exclude: '/node_modules/',
      // },
      {
        test: /\.pug$/,
        oneOf: [{
          resourceQuery: /^\?vue/,
          use: ['pug-plain-loader'],
        }, {
          use: [
            'pug-loader',
          ],
        }],
      },
      {
        // Vue
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loader: {
            scss: 'vue-style-loader!css-loader!sass-loader',
          },
          postcss: {
            config: {
              path: PATHS.webpack,
            },
          },
        },
      },
      {
        // Fonts
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: `${PATHS.assets}/fonts/[name].[ext]`,
        },
      },
      // {
      //   test: /\.(html)$/,
      //   use: [
      //     {
      //       loader: 'html-loader',
      //       // options: {
      //       //   minimize: {
      //       //     removeComments: true,
      //       //     collapseWhitespace: false,
      //       //   },
      //       // },
      //     },
      //   ],
      // },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: '[name].[ext]',
              outputPath: `${PATHS.assets}/img`,
              publicPath: `/${PATHS.assets}img`,
            },
          },
        ],

      },
      {
        // scss
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: true},
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {path: `${PATHS.webpack}/postcss.config.js`},
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/assets/scss/vars.scss',
              ],
            },
          },
        ],
      },
      {
        // css
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: true},
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {path: `${PATHS.webpack}/postcss.config.js`},
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '~': PATHS.src,
      'vue$': 'vue/dist/vue.js',
    },
    extensions: ['.tsx', '.ts', '.js'],
  },

  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[contenthash].css`,
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
    }),
    new CopyWebpackPlugin([
      {from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img`},
      {from: `${PATHS.src}/${PATHS.assets}icons`, to: `${PATHS.assets}icons`},
      {from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts`},
      {from: `${PATHS.src}/php`, to: ``},
      {from: `${PATHS.src}/static`, to: ''},
    ]),
    new CleanWebpackPlugin(),
    ...PAGES.map(
        (page) =>
          new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: (page === 'index.pug' || page === '404.pug' ?
            page.replace(/\.pug/, '.html') :
            `${page.split('.')[0]}/${page.replace(/\.pug/, '.html')}`),
          }),
    ),
    // PHP
    // ...PAGES_PHP.map(
    //     (page) =>
    //       new HtmlWebpackPlugin({
    //         template: `${PATHS.src}/${page}`,
    //         filename: `${page}`,
    //         inject: false,
    //       }),
    // ),
    // HTML
    // ...PAGES.map(
    //     (page) =>
    //       new HtmlWebpackPlugin({
    //         template: `${PAGES_DIR}/${page}`,
    //         filename: page,
    //       }),
    // ),
  ],
};
