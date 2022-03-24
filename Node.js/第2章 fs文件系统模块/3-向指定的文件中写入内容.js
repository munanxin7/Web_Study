const fs = require('fs');

fs.writeFile('./files/3.txt', 'test', function (err) {
    // 注：如果文件写入成功，则err的值为 null
    if (err) {
        return console.log('文件写入失败！' + err.message);
    }
    console.log('文件写入成功！');
});