const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const categorySchema = new mongoose.Schema({
  title: String,
  slug: {
    type: String,
    unique: true
  },
  topics: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topic'
  }]
});

categorySchema.plugin(beautifyUnique);

module.exports = mongoose.model('Category', categorySchema);
