const topicModel = require('../models/topic');

exports.show = async ctx => {
  await ctx.render('topics', topicModel(ctx.params.id));
};
