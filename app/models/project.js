const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const portfolioSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  slug: String,
  image: String,
  period: String
});

portfolioSchema.plugin(beautifyUnique);

module.exports = mongoose.model('Project', portfolioSchema);
