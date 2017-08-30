const fs         = require('fs-extra');
const path       = require('path');
const topicModel = require('../models/topic');

exports.show = async ctx => {
  const topic = await topicModel.findOne({slug: ctx.params.slug});

  await ctx.render('topics', topic);
};

exports.create = async ctx => {
  const topicFiles = await fs.readdir(path.join(appRoot, 'db', 'topics'));

  await topicFiles.map(file => {
    return topicModel.create(JSON.parse(fs.readFileSync(path.join(appRoot, 'db', 'topics', file), 'utf8')));
  });

  await ctx.redirect('/');
};

exports.destroy = async ctx => {
  await topicModel.collection.drop();

  await ctx.redirect('/');
};
