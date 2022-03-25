const topicModel    = require('../models/topic');
const categoryModel = require('../models/category');

exports.show = async ctx => {
  const category = await categoryModel.findOne({ slug: ctx.params.slug });

  if (!category) ctx.throw(404);

  const topics = await topicModel.find({ category })
    .sort({ _id: 1 })
    .limit(6)
    .populate('category');

  await ctx.render('blog', { title: category.title, topics });
};
