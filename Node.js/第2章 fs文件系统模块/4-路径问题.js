const fs = require('fs');

/* fs.readFile('./files/1.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败！' + err.message);
    }
    console.log('读取文件成功！' + dataStr);
}); */

// 代码在运行的时候，会以执行node命令时所处的目录，动态拼接出被操作文件的完整路径
// __dirname 表示当前文件所处目录
fs.readFile(__dirname + '/files/1.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败！' + err.message);
    }
    console.log('读取文件成功！' + dataStr);
});