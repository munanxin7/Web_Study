// 导入 http 模块
const http = require('http');
// 创建 web 服务器实例
const server = http.createServer();
// 为服务器实例绑定 request 事件，监听客户端请求
server.on('request', function (req, res) {
    console.log('某人访问了服务器。');
});
// 启动服务器
server.listen(80, function () {
    console.log('服务器在本地启动。');
});