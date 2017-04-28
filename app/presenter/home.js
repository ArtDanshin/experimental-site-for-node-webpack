const listModel = require('../models/list');

module.exports = () => {
  let lastMaterials = listModel('home_last_materials');

  return {
    lastMaterials
  };
};
