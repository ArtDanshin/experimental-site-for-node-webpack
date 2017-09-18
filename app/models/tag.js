const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const tagSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true
  },
  slug: {
    type: String,
    unique: true
  }
});

tagSchema.plugin(beautifyUnique);

module.exports = mongoose.model('Tag', tagSchema);
