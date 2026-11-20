var express = require('express');
var router = express.Router();
var Item = require('../models/Item')

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const items = await Item.find().sort({createdAt: -1});
    res.render('index', { title: 'CampusFind', items});
  } catch (err) {
    next(err);
  }
});

module.exports = router;
