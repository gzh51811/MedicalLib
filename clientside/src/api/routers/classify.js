const express = require('express');
const router = express.Router();

const db = require('../db');

router.get('/', async (req, res)=>{
	let data = await db.find('classify');
	res.send(data);
});

module.exports = router;

