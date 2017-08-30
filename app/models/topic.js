const mongoose = require('mongoose');

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
  tags: Array,
  read_more: Array,
  body: Array
});

module.exports = mongoose.model('Topic', topicSchema);