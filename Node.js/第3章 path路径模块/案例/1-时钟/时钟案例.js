const fs = require('fs');
const path = require('path');

// 定义正则表达式，分别匹配 <style></style> 和 <script></script> 标签
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

// 读取文件
fs.readFile(path.join(__dirname, './index.html'), 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('读取HTML文件失败！' + err.message);
    }
    // 拆解文件内容
    resolveCSS(dataStr);
    resolveJS(dataStr);
    resolveHTML(dataStr)
});

// 处理 css 样式的方法
function resolveCSS(htmlStr) {
    // 提取页面中的 <style></style> 标签
    const r1 = regStyle.exec(htmlStr);
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '');
    // 写入文件
    fs.writeFile(path.join(__dirname, './index.css'), newCSS, function (err) {
        if (err) {
            return console.log('写入css文件失败！' + err.message);
        }
        console.log('写入css文件成功！');
    });
}

// 处理 js 脚本的方法
function resolveJS(htmlStr) {
    // 提取页面中的 <script></script> 标签
    const r1 = regScript.exec(htmlStr);
    const newJS = r1[0].replace('<script>', '').replace('</script>', '');
    // 写入文件
    fs.writeFile(path.join(__dirname, './index.js'), newJS, function (err) {
        if (err) {
            return console.log('写入js文件失败！' + err.message);
        }
        console.log('写入js文件成功！');
    });
}

// 处理html文件
function resolveHTML(htmlStr) {
    const newHTML = htmlStr
        .replace(regStyle, '<link rel="stylesheet" href="./index.css">')
        .replace(regScript, '<script src="./index.js"></script>');

    fs.writeFile(path.join(__dirname, './clock.html'), newHTML, function (err) {
        if (err) {
            return console.log('写入html文件失败！' + err.message);
        }
        console.log('写入html文件成功！');
    });
}