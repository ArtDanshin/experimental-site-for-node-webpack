const projectModel = require('../models/project');

exports.show = async ctx => {
  const projects = await projectModel.find().sort({ _id: 1 });

  await ctx.render('portfolio', { projects });
};

exports.item = async ctx => {
  const project = await projectModel.findOne({ slug: ctx.params.slug });

  await ctx.render('project', project);
};
