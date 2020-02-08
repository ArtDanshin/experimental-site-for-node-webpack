const SvgStore = require('webpack-svgstore-plugin');

module.exports = () => new SvgStore({
  svg: {
    style: '',
    xmlns: 'http://www.w3.org/2000/svg',
    class: 'g-svg-sprite'
  },
  prefix: ''
});
