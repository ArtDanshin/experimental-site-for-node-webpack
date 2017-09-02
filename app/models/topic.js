const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const topicSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  published_at: {
    type: Date,
    default: Date.now()
  },
  category: String,
  slug: {
    type: String,
    unique: true
  },
  url: String,
  tags: {
    type: Array,
    default: []
  },
  read_more: {
    type: Array,
    default: []
  },
  body: {
    type: Array,
    default: []
  }
});

topicSchema.plugin(beautifyUnique);

module.exports = mongoose.model('Topic', topicSchema);
