const express = require('express');
const app = express();
const router = require('./api/routers');
// var proxy = require('http-proxy-middleware');
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
// 
//     // 跨域请求CORS中的预请求
//     if(req.method=="OPTIONS") {
//       res.sendStatus(200);/*让options请求快速返回*/
//     } else{
//       next();
//     }
// });
// app.use('/', proxy({
//     "target": "http://router.111yao.com//sltRouter", //目标服务器
//     "changeOrigin": true,
//     "pathRewrite": {
//         // "^/sltRouter" : "/"
//     }
// }));

// 跨域
let allowOrigin = [
    'http://localhost:3000'
];

app.use((req, res, next)=>{
    let origin = req.get('Origin');
    let index = allowOrigin.indexOf(origin);
	// console.log(index)
    if(index > -1) {
        res.setHeader('Access-Control-Allow-Origin', allowOrigin[index]);
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    }
	// console.log(req.method)
    // 跨域请求CORS中的预请求
    if(req.method == "OPTIONS"){
        res.sendStatus(200);/*让options请求快速返回*/
    } else{
        next();
    }
});

app.use(express.static('./'));
app.use('/', router);

app.listen(8000, () => {
    console.log('server is running in port 8000');
});