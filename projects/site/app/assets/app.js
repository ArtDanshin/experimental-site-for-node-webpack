'use strict';

// Initial webpack-svg-store plugin
const __svg__ = {
  path: './svg/**/*.svg',
  name: 'static/svg/sprite.[hash].svg'
};
require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);

// Stylesheet entrypoint
require('_stylesheets/application.styl');

// Client JavaScript Modules
require('_js/editor')();
