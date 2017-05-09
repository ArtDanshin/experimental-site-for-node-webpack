const listModel = require('../models/list');

exports.show = (req, res) => {
  res.render('blog', listModel('blog_items'));
};
