const topicModel = require('../models/topic');
const tagModel   = require('../models/tag');

exports.show = async ctx => {
  const tag = await tagModel.findOne({ slug: ctx.params.slug });

  if (!tag) ctx.throw(404);

  const topics = await topicModel.find({ tags: tag })
    .sort({ _id: 1 })
    .limit(6)
    .populate('category');

  await ctx.render('blog', { title: tag.title, topics });
};
