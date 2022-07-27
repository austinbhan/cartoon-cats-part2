const { Router } = require('express');
const cats = require('../models/cats');

module.exports = Router()
  .get('/:id', async (req, res) => {
    console.log('id param:', req.params.id);

  });

module.exports = { cats };
