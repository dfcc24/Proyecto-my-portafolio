const express = require('express');
const router = express.Router();
const Social = require('../models/Social');

router.get('/', async (req, res) => {
  const socials = await Social.find();
  res.json(socials);
});

module.exports = router;
