const fs = require('fs');


fs.readFile('./files/成绩.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('文件读取失败！' + err.message);
    }
    // console.log('文件读取成功！' + dataStr);

    const arrOld = dataStr.split(' ');
    const arrNew = [];
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ':'));
    });
    const newStr = arrNew.join('\r\n');

    fs.writeFile('./files/成绩-ok.txt', newStr, function (err) {
        if (err) {
            return console.log('写入文件失败！' + err.message);
        }
        console.log('成绩写入成功！');
    });
});