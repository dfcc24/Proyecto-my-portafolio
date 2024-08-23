const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

router.get('/', async (req, res) => {
  const experiences = await Experience.find();
  res.json(experiences);
});

router.post('/', async (req, res) => {
  const experience = new Experience(req.body);
  await experience.save();
  res.json(experience);
});

module.exports = router;
