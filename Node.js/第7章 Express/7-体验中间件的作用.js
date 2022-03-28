const express = require('express');

const app = express();

// 定义中间件函数
const mw = function (req, res, next) {
    // 获取请求到达服务的时间
    const time = Date.now();
    // 把流转关系转交给下一个中间件或路由
    // 为 req 挂载自定义属性，从而把时间共享给后面所有路由
    req.startTime = time;
    next();
}

// 全局生效的中间件
app.use(mw);

app.get('/', (req, res) => {
    res.send('Home' + req.startTime);
});
app.get('/user', (req, res) => {
    res.send('User' + req.startTime);
});

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
});