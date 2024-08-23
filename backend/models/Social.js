const mongoose = require('mongoose');

const SocialSchema = new mongoose.Schema({
  name: String,
  link: String,
  icon: String,
});

module.exports = mongoose.model('Social', SocialSchema);
