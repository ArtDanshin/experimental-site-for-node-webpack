const path = require('path');
const fs = require('fs-extra');
const mongoose = require('mongoose');
const categoryModel = require('../app/models/category');
const tagModel = require('../app/models/tag');
const topicModel = require('../app/models/topic');
const projectModel = require('../app/models/project');

mongoose.Promise = Promise;
mongoose.set('debug', true);

mongoose.connect('mongodb://localhost/test', {
  keepAlive: 1,
  poolSize: 5
});

(async() => {
  const categoryFiles = await fs.readdir(path.join('db', 'categories'));
  const tagFiles = await fs.readdir(path.join('db', 'tags'));
  const topicFiles = await fs.readdir(path.join('db', 'topics'));
  const projectFiles = await fs.readdir(path.join('db', 'projects'));

  await mongoose.connection.db.dropDatabase();

  await Promise.all(categoryFiles.map(file => {
    return categoryModel.create(JSON.parse(fs.readFileSync(path.join('db', 'categories', file), 'utf8')));
  }));

  await Promise.all(tagFiles.map(file => {
    return tagModel.create(JSON.parse(fs.readFileSync(path.join('db', 'tags', file), 'utf8')));
  }));

  await Promise.all(topicFiles.map(async file => {
    let innerFile = JSON.parse(fs.readFileSync(path.join('db', 'topics', file), 'utf8'));

    if (innerFile.tags.length) {
      innerFile.tags = await Promise.all(innerFile.tags.map(tag => {
        return tagModel.findOne({ title: tag });
      }));
    }
    if (innerFile.category) {
      innerFile.category = await categoryModel.findOne({ title: innerFile.category })
    }

    return topicModel.create(innerFile);
  }));

  await Promise.all(projectFiles.map(file => {
    return projectModel.create(JSON.parse(fs.readFileSync(path.join('db', 'projects', file), 'utf8')));
  }));
})().catch(console.error).then(() => {
  mongoose.disconnect();
});
