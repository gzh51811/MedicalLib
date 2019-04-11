const express = require('express');
const router = express.Router();

let ClassifyRouter = require('./classify');
let HomeRouter = require('./home');
let DetailRouter = require('./detail');
let CartRouter = require('./cart');

router.use('/classify', ClassifyRouter);
router.use('/home', HomeRouter);
router.use('/detail', DetailRouter);
router.use('/cart', CartRouter);

module.exports = router;
