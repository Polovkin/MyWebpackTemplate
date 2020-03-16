/* Base config:
   ========================================================================== */
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const ImageMinPlugin = require('imagemin-webpack-plugin').default;
const imageMinMozjpeg = require('imagemin-mozjpeg');
const imageMinPngquant = require('imagemin-pngquant');
// Main const. Feel free to change it
const PATHS = {
  src: path.join(__dirname, '../../src'),
  dist: path.join(__dirname, (process.env.NODE_ENV === 'production' ?
    '../../public' :
    '../../dist'),
  ),
  webpack: path.join(__dirname, '../../webpack'),
  assets: 'assets/',
};

// Pages const for HtmlWebpackPlugin
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#html-dir-folder
const PAGES_DIR = `${PATHS.src}/pug/pages`;
const PAGES = fs
    .readdirSync(PAGES_DIR)
    .filter((fileName) => fileName.endsWith('.pug'));
const PAGES_PHP = fs
    .readdirSync(PATHS.src)
    .filter((fileName) => fileName.endsWith('.php'));
module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    app: PATHS.webpack,
    // module: `${PATHS.src}/your-module.js`,
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '/',
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
      {
        // JavaScript
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        // JavaScript
        test: /\.pug$/,
        loader: 'pug-loader',
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
          name: '[name].[ext]',
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
          // {
          //   loader: 'image-webpack-loader',
          //   options: {
          //     mozjpeg: {
          //       progressive: false,
          //       quality: 65,
          //     },
          //     // optipng.enabled: false will disable optipng
          //     optipng: {
          //       enabled: false,
          //     },
          //     pngquant: {
          //       quality: [0.65, 0.90],
          //       speed: 4,
          //     },
          //     gifsicle: {
          //       interlaced: false,
          //     },
          //   },
          // },
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
            options: {sourceMap: true},
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
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`,
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
      {from: `${PATHS.src}/static`, to: ''},
    ]),
    new ImageMinPlugin({
      disable: (process.env.NODE_ENV || '').trim() !== 'production',
      test: /\.(jpe?g|png|gif|svg)$/i,
      plugins: [
        imageMinMozjpeg({
          progressive: false,
          quality: 65,
        }),
        imageMinPngquant({
          quality: [0.65, 0.90],
          speed: 4,
        }),
      ],
    }),

    ...PAGES.map(
        (page) =>
          new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: (page === 'index.pug' || page === '404.pug' ?
            page.replace(/\.pug/, '.html') :
            `${page.split('.')[0]}/${page.replace(/\.pug/, '.html')}`),
          }),
    ),
    ...PAGES_PHP.map(
        (page) =>
          new HtmlWebpackPlugin({
            template: `${PATHS.src}/${page}`,
            filename: `${page}`,
            inject: false,
          }),
    ),
  ],
};
