'use strict';

// Depends
const merge = require('webpack-merge');

/**
 * [config description]
 * @type {Object}
 */
const _configs = {
  global: {
    common: require(__dirname + '/config/webpack/global/common'),
    production: require(__dirname + '/config/webpack/global/env/production'),
    development: require(__dirname + '/config/webpack/global/env/development'),
  }
};

/**
 * Load webpack config via enviroments
 * @param  {[type]} enviroment [description]
 * @return {[type]}            [description]
 */
const _load = function(enviroment) {
  if (enviroment) {
    // parse environment variable
    const envParams = enviroment.split(':');
    const commonConfig = envParams[0];
    const modifyConfig = envParams[1];

    // check environments
    if (!_configs[commonConfig] || (modifyConfig && !_configs[commonConfig][modifyConfig])) throw 'Can\'t find enviroments see _congigs object';

    if (modifyConfig) {
      return merge(
        _configs[commonConfig][modifyConfig](__dirname),
        _configs[commonConfig]['common'](__dirname))
    }

    return _configs[commonConfig]['common'](__dirname)
  } else {
    throw 'Can\'t find local enviroment variable via process.env.NODE_ENV';
  }
};

/**
 * Export WebPack config
 * @type {[type]}
 */
module.exports = _load(process.env.NODE_ENV);