const listModel = require('../models/list');

module.exports = () => {
  let last_materials = listModel('home_last_materials');

  return {
    last_materials
  }
}