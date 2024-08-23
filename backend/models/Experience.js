const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  company: String,
  description: String,
  startDate: Date,
  endDate: Date,
});

module.exports = mongoose.model('Experience', ExperienceSchema);
