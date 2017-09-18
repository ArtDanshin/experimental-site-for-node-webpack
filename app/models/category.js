const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true
  },
  slug: {
    type: String,
    unique: true
  }
});

categorySchema.plugin(beautifyUnique);

module.exports = mongoose.model('Category', categorySchema);
