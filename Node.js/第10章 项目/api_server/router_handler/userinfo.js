// 导入数据库操作模块
const db = require('../db/index');
// 导入加密模块
const bcrypt = require('bcryptjs');

// 获取用户基本信息的处理函数
exports.getUserInfo = (req, res) => {
    // 定义查询用户信息的 SQL 语句
    const sql = 'select id ,username,nickname,email,user_pic from ev_users where id=?';
    // 执行 SQL 语句
    db.query(sql, req.user.id, (err, results) => {
        // 执行 SQL 语句失败
        if (err) {
            return res.cc(err);
        }
        // 成功，但是结果可能为空
        if (results.length !== 1) {
            return res.cc('获取用户信息失败！');
        }
        // 用户信息获成功
        res.send({
            status: 0,
            message: '获取用户信息成功!',
            data: results[0]
        });
    })
}

// 更新用户基本信息的处理函数
exports.updateUserInfo = (req, res) => {
    // 定义更新用户信息的 SQL 语句
    const sql = 'update ev_users set ? where id=?';
    // 执行 SQL 语句并传递参数
    db.query(sql, [req.body, req.body.id], (err, results) => {
        // 执行 SQL 语句失败
        if (err) {
            return res.cc(err);
        }
        // 成功，但是未更新数据
        if (results.affectedRows !== 1) {
            return res.cc('更新用户信息失败！');
        }
        res.cc('更新用户信息成功！', 0);
    })
}

// 更新用户登录密码的处理函数
exports.updatePassword = (req, res) => {
    // 根据 id 查询用户的信息
    const sql = 'select * from ev_users where id=?';
    db.query(sql, req.user.id, (err, results) => {
        if (err) {
            return res.cc(err);
        }
        if (results.length !== 1) {
            return res.cc('用户不存在！');
        }

        // TODO: 判断用户输入的旧密码是否正确
        const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password);
        if (!compareResult) {
            return res.cc('旧密码输入错误！');
        }
        // TODO: 更新数据库中的密码
        const sql = 'update ev_users set password=? where id=?';
        // 对新密码加密
        const newPwd = bcrypt.hashSync(req.body.newPwd, 10);
        db.query(sql, [newPwd, req.user.id], (err, results) => {
            // 执行 SQL 语句失败
            if (err) {
                return res.cc(err);
            }
            // 成功，但是未更新数据
            if (results.affectedRows !== 1) {
                return res.cc('更新密码失败！');
            }
            res.cc('更新密码成功！', 0);
        });
    });
}

// 更新用户头像的处理函数
exports.updateAvatar = (req, res) => {
    // 更新用户头像
    const sql = `update ev_users set user_pic=? where id=?`;
    db.query(sql, [req.body.avatar, req.user.id], (err, results) => {
        // 执行 SQL 语句失败
        if (err) {
            return res.cc(err);
        }
        // 成功，但是未更新数据
        if (results.affectedRows !== 1) {
            return res.cc('更新头像失败！');
        }
        res.cc('更新头像成功！', 0);
    });
}