const express = require('express');
const app = express();
const router = require('./api/router');

app.use(express.static('./'));
app.use('/', router);

// 跨域
let allowOrigin = [
    'http://localhost:3000'
];

app.use((req, res, next) => {
    let origin = req.get('Origin');
    let index = allowOrigin.indexOf(origin);

    if(index > -1) {
        req.setHeader('Access-Control-Allow-Origin', allowOrigin[index]);
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    }

    // 跨域请求CORS中的预请求
    if(req.method == "OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else{
        next();
    }
});

app.listen('8080', () => {
    console.log('server is running in port 8080');
});
