// 导入 express 模块
const express = require('express');
// 导入路由模块
const router = require('./15-apiRouter');
// 导入中间件
const cors = require('cors');

// 创建 express 实例
const app = express();

// 配置解析表单数据的中间件
app.use(express.urlencoded({
    extended: false
}));

// 必须在配置 cors 中间件之前配置 JSONP 接口
app.get('/api/jsonp', (req, res) => {
    // TODO: 定义 JSONP 接口具体的实现过程
    // 获取客户端发送过来的回调函数的名字
    const funcName = req.query.callback;
    // 定义要发送到客户端的数据对象
    const data = {
        name: 'privet',
        age: 18
    };
    // 拼接出一个函数的调用
    const scriptStr = `${funcName}(${JSON.stringify(data)})`;
    // 把拼接的字符串，响应给客户端
    res.send(scriptStr);
})
// 解决接口跨域的问题
app.use(cors());

// 挂载路由
app.use('/api', router);

// 调用 app.listen 方法，指定端口号并启动 web 服务器
app.listen(80, () => {
    console.log('express server running at http: //127.0.0.1');
});