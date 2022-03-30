// 导入 mysql 模块
const mysql = require('mysql');
// 建立与 MySql 数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1', // 数据库的 IP 地址
    user: 'root', // 登录数据库的账号
    password: '123321@yyD', // 登录数据库的密码
    database: 'my_db_01' // 指定要操作哪个数据库
});

// 测试 mysql 模块能否正常工作
/* db.query('select 1', (err, results) => {
    // 如果报错
    if (err) {
        return console.log(err.message);
    }
    // 成功
    console.log(result);
}) */

// 查询 users 表中所有的数据
/* const sqlStr = 'select * from users';
db.query(sqlStr, (err, results) => {
    // 查询数据失败
    if (err) {
        return console.log(err.message);
    }
    // 查询数据成功
    // 注：如果执行 select 查询语句，则执行的结果是数组
    console.log(results);
}) */

// 向 users 表中新增一条数据，其中 username 的值为 Spider-Man，password 的值为 pcc123
/* const user = {
    username: 'Spider-Man',
    password: 'pcc123'
};
// 定义待执行的 SQL 语句
const sqlStr = 'insert into users (username, password) values (?, ?)';
// 执行 SQL 语句
db.query(sqlStr, [user.username, user.password], (err, results) => {
    // 插入失败
    if (err) {
        return console.log(err.message);
    }
    // 插入成功
    // 注；如果执行插入语句，则 results 是一个对象
    // 可以通过 affectedRows 属性来判断是否插入数据库成功
    if (results.affectedRows === 1) {
        console.log('插入数据成功');
    }
}); */

// 快速插入
/* const user = {
    username: 'Spider-Man2',
    password: 'pcc321'
};
// 定义待执行的 SQL 语句
const sqlStr = 'insert into users set ?';
// 执行 SQL 语句
db.query(sqlStr, user, (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    if (results.affectedRows === 1) {
        console.log('插入数据成功');
    }
}); */

// 更新用户的信息
/* const user = {
    id: 7,
    username: 'aaa',
    password: '000'
};
// 定义 SQL 语句
const sqlStr = 'update users set username=?, password=? where id=?';
// 执行 SQL 语句
db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    if (results.affectedRows === 1) {
        console.log('更新数据成功');
    }
}); */

// 快速更新数据
/* const user = {
    id: 7,
    username: 'aaaa',
    password: '0000'
};
// 定义 SQL 语句
const sqlStr = 'update users set ? where id=?';
db.query(sqlStr, [user, user.id], (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    if (results.affectedRows === 1) {
        console.log('更新数据成功！');
    }
}); */

// 删除 id 为 4 的用户
/* const sqlStr = 'delete from users where id=?';
db.query(sqlStr, 4, (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    if (results.affectedRows === 1) {
        console.log('删除成功');
    }
}); */

// delete 危险 推荐使用 标记删除 的形式
const sqlStr = 'update users set status=? where id=?';
db.query(sqlStr, [1, 7], (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    if (results.affectedRows === 1) {
        console.log('标记删除成功');
    }
});