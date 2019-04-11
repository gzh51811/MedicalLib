const express = require('express');
const router = express.Router();

let ClassifyRouter = require('./classify');
let HomeRouter = require('./home');
let DetailRouter = require('./detail');

router.use('/classify', ClassifyRouter);
router.use('/home', HomeRouter);
router.use('/detail', DetailRouter);

module.exports = router;
