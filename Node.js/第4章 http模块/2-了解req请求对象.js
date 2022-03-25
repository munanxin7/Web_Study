const http = require('http');
const server = http.createServer();
// req 是请求对象，包含了与客户端相关的数据和属性
server.on('request', (req, res) => {
    // 客户端请求的 url 地址
    const url = req.url;
    // 客户端请求的 method 类型
    const method = req.method;
    const str = `你请求的地址是${url}，请求的方法为 ${method}`;
    console.log(str);
    // 调用res.end()方法，向客户端响应内容
    // 解决中文乱码问题
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(str);
});
server.listen(80, () => {
    console.log('服务器在 http://127.0.0.1 运行。');
});