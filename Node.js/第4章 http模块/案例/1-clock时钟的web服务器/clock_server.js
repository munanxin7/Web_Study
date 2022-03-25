const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();
server.on('request', (req, res) => {
    const url = req.url;

    // const fpath = path.join(__dirname, url);
    let fpath = '';
    if (url === '/') {
        fpath = path.join(__dirname, './clock/index.html');
    } else {
        fpath = path.join(__dirname, './clock', url);
    }

    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if (err) {
            return res.end('404 Not Found!');
        }
        res.end(dataStr);
    })
})

server.listen(80, () => {
    console.log('服务器运行在 http://127.0.0.1');
});