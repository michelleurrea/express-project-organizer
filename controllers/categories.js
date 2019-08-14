var express = require('express');
var db = require('../models');
var router = express.Router();

router.get('/', (req, res) => {
  db.category.findAll()
  .then((categories) => {
    res.send(categories);
    // TODO: Make an index page for all cats
    // res.render('categories/index', { categories });
  })
  .catch((error) => {
    res.status(400).render('main/404');
  });
});

// TODO: Categories post route (make new category)

// TODO: Categories show route (show a single category)

module.exports = router;
