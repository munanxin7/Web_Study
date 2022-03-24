// 导入fs模块
const fs = require('fs');

// 调用 fs.readFile() 方法读取文件
fs.readFile('./files/11.txt', 'utf8', function (err, dataStr) {
    // 打印失败的结果
    // 注：如果成功则 err 的值为 null
    console.log(err);
    console.log('--------------');
    // 打印成功的结果
    // 注：如果读取失败则 dataStr 的值为 undefined
    console.log(dataStr);
})