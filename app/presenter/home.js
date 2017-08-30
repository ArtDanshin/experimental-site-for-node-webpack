const topicModel = require('../models/topic');

module.exports = async () => {
  const lastMaterials = await topicModel.find().sort({_id: 1}).limit(4);

  return {
    lastMaterials
  };
};