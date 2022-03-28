const express = require('express');
// 导入路由模块
const router = require('./5-router');

const app = express();

// 注册路由模块
app.use('/api', router);

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
});