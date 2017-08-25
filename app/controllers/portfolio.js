const listModel = require('../models/list');

exports.show = async ctx => {
  await ctx.render('portfolio', listModel('portfolio_items'));
};

exports.item = async ctx => {
  await ctx.render('project');
};
