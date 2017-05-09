const topicModel = require('../models/topic');

exports.show = (req, res) => {
  res.render('topics', topicModel(req.params.id));
};
