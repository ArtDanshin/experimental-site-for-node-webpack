'use strict';

// Initial webpack-svg-store plugin
const __svg__ = {
  path: './assets/svg/**/*.svg',
  name: 'static/svg/[hash].sprite.svg'
};
require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);

// Stylesheet entrypoint
require('_stylesheets/application.styl');

// Client JavaScript Modules
require('_js/editor')();
