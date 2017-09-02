const fs         = require('fs-extra');
const path       = require('path');
const projectModel = require('../models/project');

exports.show = async ctx => {
  const projects = await projectModel.find().sort({ _id: 1 });

  await ctx.render('portfolio', { projects });
};

exports.item = async ctx => {
  const project = await projectModel.findOne({ slug: ctx.params.slug });

  await ctx.render('project', project);
};

exports.create = async ctx => {
  const projectFiles = await fs.readdir(path.join(appRoot, 'db', 'projects'));

  await projectFiles.map(file => {
    return projectModel.create(JSON.parse(fs.readFileSync(path.join(appRoot, 'db', 'projects', file), 'utf8')));
  });

  await ctx.redirect('/');
};

exports.destroy = async ctx => {
  await projectModel.collection.drop();

  await ctx.redirect('/');
};
