const express = require('express');
const router = express.Router();

let ClassifyRouter = require('./classify');
let HomeRouter = require('./home');

router.use('/classify', ClassifyRouter);
router.use('/home', HomeRouter);

module.exports = router;
