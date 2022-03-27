const express = require('express');

const app = express();

// 对外提供静态资源
app.use(express.static('./clock'));
app.use('/files', express.static('./files'));

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})