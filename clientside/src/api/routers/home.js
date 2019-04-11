const express = require('express');
const router = express.Router();

const db = require('../db');

router.get('/hot', async (req, res)=>{
	let data = await db.find('hotgoodslist');
	res.send(data);
});
router.get('/care', async (req, res)=>{
	let data = await db.find('careplan');
	res.send(data);
});

module.exports = router;
