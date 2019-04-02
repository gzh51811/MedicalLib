const express = require('express');
const router = express.Router();

let ClassifyRouter = require('./classify');

router.use('/classify', ClassifyRouter);

module.exports = router;