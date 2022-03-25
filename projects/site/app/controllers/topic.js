const topicModel = require('../models/topic');
const tagModel = require('../models/tag');
const categoryModel = require('../models/category');

exports.show = async ctx => {
  const topic = await topicModel.findOne({ slug: ctx.params.slug })
    .populate('tags')
    .populate('category');

  if (!topic) ctx.throw(404);

  await ctx.render('topics', topic);
};

exports.new = async ctx => {
  const categories = await categoryModel.find();

  await ctx.render('editor/topics/new', { categories });
};

exports.create = async ctx => {
  let topic = ctx.request.body;

  if (topic.tags.length) {
    topic.tags = await Promise.all(topic.tags.map(tag => {
      return tagModel.findOne({ title: tag });
    }));
  }
  if (topic.category) {
    topic.category = await categoryModel.findOne({ title: topic.category });
  }

  await topicModel.create(topic);
  await ctx.redirect(`/topic/${topic.slug}`);
};

exports.edit = async ctx => {
  const topic = await topicModel.findOne({ slug: ctx.params.slug })
    .populate('tags')
    .populate('category');
  const categories = await categoryModel.find();

  if (!topic) ctx.throw(404);

  await ctx.render('editor/topics/edit', { topic, categories });
};

exports.delete = async ctx => {
  await topicModel.deleteOne({ slug: ctx.params.slug });

  ctx.body = {
    status: 200,
    removed: true
  };
};

exports.update = async ctx => {
  const topic = ctx.request.body;

  if (topic.tags.length) {
    topic.tags = await Promise.all(topic.tags.map(tag => {
      return tagModel.findOne({ title: tag });
    }));
  }
  if (topic.category) {
    topic.category = await categoryModel.findOne({ title: topic.category });
  }

  await topicModel.update({ slug: topic.slug }, topic);

  ctx.body = {
    status: 200,
    topic
  };
};
