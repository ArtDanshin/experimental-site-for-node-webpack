const fs         = require('fs');
const path       = require('path');
const topicModel = require('../models/topic');

exports.show = async ctx => {
  const topic = await topicModel.findOne({slug: ctx.params.slug});

  await ctx.render('topics', topic);
};

exports.add = async () => {
  topicModel.create(JSON.parse(fs.readFileSync(path.join(appRoot, 'db', 'topics', '1.json'), 'utf8')))
    .then(message => {
      console.log("done", message);
    })
    .catch(error => {
      console.log("error", message);
    })
};
