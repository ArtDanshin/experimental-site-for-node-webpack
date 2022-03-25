const topicModel = require('../models/topic');

exports.show = async ctx => {
  const topics = await topicModel.find()
    .sort({ _id: 1 })
    .limit(6)
    .populate('category');

  await ctx.render('blog', { title: 'Блог', topics });
};
