/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */

// 导入数据库操作模块
const db = require('../db/index');
// 导入加密包
const bcrypt = require('bcryptjs');
// 导入生成 token 的包
const jwt = require('jsonwebtoken');
// 导入全局的配置文件
const config = require('../config');

// 注册用户的处理函数
exports.regUser = (req, res) => {
    // 获取客户端提交到服务器的用户信息
    const userinfo = req.body;
    // 对表单中的数据进行合法性的校验
    /* if (!userinfo.username || !userinfo.password) {
        return res.send({
            status: 1,
            message: '用户名或密码不能为空'
        });
    } */
    // 定义 SQL 语句，查询用户名是否被占用
    const sqlStr = 'select * from ev_users where username=?';
    // 执行 SQL 语句
    db.query(sqlStr, userinfo.username, (err, results) => {
        if (err) {
            // return res.send({
            //     status: 1,
            //     message: err.message
            // });
            return res.cc(err);
        }
        // 判断用户名是否被占用
        if (results.length > 0) {
            // return res.send({
            //     status: 1,
            //     message: '用户名被占用，请更换其他用户名！'
            // });
            return res.cc('用户名被占用，请更换其他用户名！');
        }

        // TODO：用户名可以使用
        // 对用户的密码进行加密
        userinfo.password = bcrypt.hashSync(userinfo.password, 10);

        // 向数据库中插入新用户
        const sql = 'insert into ev_users set ?';
        db.query(sql, {
            username: userinfo.username,
            password: userinfo.password
        }, (err, results) => {
            if (err) {
                // return res.send({
                //     status: 1,
                //     message: err.message
                // });
                return res.cc(err);
            }
            if (results.affectedRows !== 1) {
                // return res.send({
                //     status: 1,
                //     message: '注册新用户失败，请稍后再试！'
                // });
                return res.cc('注册新用户失败，请稍后再试！');
            }
            // res.send({
            //     status: 0,
            //     message: '注册成功！'
            // });
            res.cc('注册成功！', 0);
        })

    })
}

// 登录的处理函数
exports.login = (req, res) => {
    // 接收表单的数据
    const userinfo = req.body;
    // 定义 SQL 语句
    const sql = 'select * from ev_users where username=?';
    // 执行 SQL 语句，根据用户名查询用户的信息
    db.query(sql, userinfo.username, (err, results) => {
        // 执行 SQL 语句失败
        if (err) {
            return res.cc(err);
        }
        // 执行 SQL 语句成功，但是获取到的数据条数不等于1
        if (results.length != 1) {
            return res.cc('该用户不存在，请先注册！');
        }
        // TODO: 判断密码是否正确
        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password);
        if (!compareResult) {
            return res.cc('密码错误，请重新输入');
        }

        // TODO: 在服务器端生成 Token 字符串
        const user = {
            ...results[0],
            password: '',
            user_pic: ''
        };
        // 对用户的信息进行加密，生成 token 字符串
        const tokenStr = jwt.sign(user, config.jwtSecretKey, {
            expiresIn: config.expiresIn
        });
        // 调用 res.send() 将 Token 响应给客户端
        res.send({
            status: 0,
            message: '登录成功',
            token: 'Brarer ' + tokenStr
        })
    })
}