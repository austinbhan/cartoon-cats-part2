const { Router } = require('express');
const Cat = require('../models/Dog');
const router = Router();

router 
  .get('/:id', async (req, res) => {
    console.log('id param:', req.params.id);
    console.log(req.params.id);
    const cat = await Cat.getById(req.params.id);
    res.json(cat);
  })
  .get('/', async (req, res) => {
    const cats = await Cat.getAll();
    const ids = cats.map((cat) => ({ id: cat.id, name: cat.name }));
    console.log(ids);
    res.json(ids);
  });

module.exports = router;
