// 导入 Node.js 内置的 queryString 模块
const qs = require('querystring');

const bodyParser = (req, res, next) => {
    // 定义中间件具体的业务逻辑
    let str = '';
    req.on('data', (chunk) => {
        str += chunk;
    });
    req.on('end', () => {
        // TODO: 把字符串格式的请求体数据，解析成对象格式
        str = qs.parse(str);
        req.body = str;
        next();
    });
}

module.exports = bodyParser;