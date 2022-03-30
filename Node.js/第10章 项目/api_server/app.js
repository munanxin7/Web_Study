// 导入 express 模块
const express = require('express');

// 创建 express 实例
const app = express();

// 导入并配置 cors 中间件
const cors = require('cors');
app.use(cors());

// 导入验证规则的包
const joi = require('joi');

// 配置解析表单数据的中间件
// 注：只能解析 application/x-www-form-urlencoded 格式的表单数据
app.use(express.urlencoded({
    extended: false
}));

// 在路由之前封装
app.use((req, res, next) => {
    // status 默认值为1，表示失败的情况
    // err 的值可能是一个错误对象，也可能是一个错误的描述字符串
    res.cc = function (err, status = 1) {
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    next();
})

// 导入并使用用户路由模块
const userRouter = require('./router/user');
app.use('/api', userRouter);

// 定义错误级别的中间件
app.use((err, req, res, next) => {
    // 验证失败导致的错误
    if (err instanceof joi.ValidationError) {
        return res.cc(err);
    }
    // 未知的错误
    res.cc(err);
})

// 调用 app.listen 方法，指定端口号并启动 web 服务器
app.listen(3007, () => {
    console.log('express server running at http://127.0.0.1:3007');
});