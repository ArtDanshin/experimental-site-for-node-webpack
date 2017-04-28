const listModel = require('../models/list');

exports.show = (req, res) => {
  res.render('portfolio', listModel('portfolio_items'));
};

exports.item = (req, res) => {
  res.render('project');
};
