'use strict';

// Depends
const path         = require('path');
const webpack      = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const TextPlugin   = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const SvgStore     = require('webpack-svgstore-plugin');
const BrowserSync  = require('browser-sync-webpack-plugin');

/**
 * Global webpack config
 * @param  {[type]} _path [description]
 * @return {[type]}       [description]
 */
module.exports = function(_path) {
  const rootAssetPath = _path + 'app';

  // return objecy
  return {
    // entry points
    entry: {
      application: path.join(_path, 'app', 'app.js')
    },

    // output system
    output: {
      path: path.join(_path, 'public', 'assets'),
      filename: '[hash].[name].js',
      chunkFilename: '[chunkhash].[id].js',
      publicPath: '/assets/'
    },

    // resolves modules
    resolve: {
      extensions: ['.js'],
      modules: ['node_modules'],
      alias: {
        _svg: path.join(_path, 'app', 'assets', 'svg'),
        _fonts: path.join(_path, 'app', 'assets', 'fonts'),
        _js: path.join(_path, 'app', 'assets', 'javascript'),
        _images: path.join(_path, 'app', 'assets', 'images'),
        _stylesheets: path.join(_path, 'app', 'assets', 'stylesheets')
      }
    },

    // modules resolvers
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: { presets: ['es2015'] }
          },
          exclude: /(node_modules|bower_components)/
        },
        {
          test: /\.pug$/,
          use: {
            loader: 'pug-loader',
            options: {
              root: path.join(_path, 'app', 'views'),
              pretty: true
            }
          }
        },
        {
          test: /\.styl$/,
          use: TextPlugin.extract([
            {
              loader: 'css-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'postcss-loader',
              options: {
                context: rootAssetPath,
                sourceMap: true,
                plugins: loader => [
                  autoprefixer({
                    remove: false,
                    browsers: ['last 5 versions', 'ie 10']
                  })
                ]
              }
            },
            'stylus-loader'
          ])
        },
        {
          test: /\.(png|ico|jpg|jpeg|gif|svg|ttf|eot|woff|woff2|swf|st)$/i,
          use: {
            loader: 'file-loader',
            options: {
              context: rootAssetPath,
              name: '[path][hash].[name].[ext]'
            }
          }
        }
      ]
    },

    // load plugins
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
        filename: '[hash].[name].js',
        minChunks: module => /node_modules/.test(module.resource) && !/.css/.test(module.resource)
      }),

      new TextPlugin('[chunkhash].[name].css'),

      new SvgStore({
        prefix: '',
        svg: {
          style: '',
          xmlns: 'http://www.w3.org/2000/svg',
          class: 'g-svg-sprite'
        }
      }),

      new AssetsPlugin({
        path: path.join(_path, 'config'),
        filename: 'manifest.json',
        prettyPrint: true
      }),

      new BrowserSync({
        host: 'localhost',
        port: 8090,
        proxy: 'http://localhost:8080/'
      })
    ]
  };
};
