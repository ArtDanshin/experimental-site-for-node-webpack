'use strict';

/**
 * Webpack Development Boilerplate
 * Include:
 *  - stylus
 *  - pug
 *  - modular components
 *  - chunkhashing
 *  - autoprefixier
 *  - separated ENV
 *  - SVG store && SVG min
 *  - build system
 *  - etc...
 *  @author Mike Chernobrov
 *  @see    http://rambler-co.ru
 */

// Depends
const merge = require('webpack-merge');

/**
 * Exported evnironments object
 * @type {Object}
 */
const _configs = {

  // global section
  global: require(__dirname + '/config/webpack/global'),

  // config by enviroments
  production: require(__dirname + '/config/webpack/environments/production'),
  development: require(__dirname + '/config/webpack/environments/development')
};

/**
 * Load webpack config via enviroments
 * @param  {[type]} enviroment [description]
 * @return {[type]}            [description]
 */
const _load = function() {
  const ENV = process.env.NODE_ENV
    ? process.env.NODE_ENV
    : 'production';

  return merge(
    _configs[ENV](__dirname),
    _configs.global(__dirname)
  );
};

/**
 * Export WebPack config
 * @type {[type]}
 */
module.exports = _load();