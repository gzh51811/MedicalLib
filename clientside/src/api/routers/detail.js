const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser')
const bodyParserUrlEncoded = bodyparser.urlencoded()
const db = require('../db');

router.post('/',bodyParserUrlEncoded,async (req, res) =>{
    let {cartgoods} = req.body
    let id = cartgoods.id;
   console.log(cartgoods)
    let res1 = await db.find('cart',{id:5});
    console.log(res1)
    if(res1.length>0){
        let qty = res1[0].qty*1+1;
        console.log(qty)
        let data = await db.update('cart',{id},{$set:{qty}});
    }else{
        let data = await db.insert('cart',cartgoods)
    }
    res.status(200).send('ok');
});


module.exports = router;
