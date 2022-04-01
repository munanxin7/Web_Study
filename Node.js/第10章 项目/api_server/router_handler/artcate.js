// 导入数据库操作模块
const db = require('../db/index');

// 获取文章分类列表数据的处理函数
exports.getArtCates = (req, res) => {
    // 根据分类的状态查询所有未被删除的分类列表数据
    const sql = `select * from ev_article_cate where is_delete=0 order by id asc`;
    db.query(sql, (err, results) => {
        if (err) {
            return res.cc(err);
        }
        res.send({
            status: 0,
            message: '获取文章分类成功',
            data: results
        })
    })
    // res.send('ok');
}

// 新增文章分类的处理函数
exports.addArtCates = (req, res) => {
    // 判断 name 或 alias 是否被占用
    const sql = `select * from ev_article_cate where name=? or alias =?`;
    db.query(sql, [req.body.name, req.body.alias], (err, results) => {
        if (err) {
            return res.cc(err);
        }

        if (results.length === 2) {
            return res.cc('分类名称和分类别名同时被占用，请更换后重试！');
        } else if (results.length === 1) {
            if (results[0].name === req.body.name && results[0].alias === req.body.alias) {
                return res.cc('分类名称和分类别名同时被占用，请更换后重试！');
            } else if (results[0].name === req.body.name) {
                return res.cc('分类名称被占用，请更换后重试！');
            } else if (results[0].alias === req.body.alias) {
                return res.cc('分类别名被占用，请更换后重试！');
            }
        }
        // TODO：保存至数据库
        const sql = `insert into ev_article_cate set ?`;
        db.query(sql, req.body, (err, results) => {
            if (err) {
                return res.cc(err);
            }
            if (results.affectedRows !== 1) {
                return res.cc('新增文章分类失败！');
            }
            res.cc('新增文章分类成功！', 0);
        })
    })
}

//  删除文章分类的处理函数
exports.deleteCateByID = (req, res) => {
    // 定义标记删除的 SQL 语句
    const sql = `update ev_article_cate set is_delete=1 where id=?`;
    db.query(sql, req.params.id, (err, results) => {
        if (err) {
            return res.cc(err);
        }
        if (results.affectedRows !== 1) {
            return res.cc('删除文章分类失败！');
        }
        res.cc('删除文章分类成功！', 0);
    })
    // res.send('ok');
}

// 通过 id 获取文章分类数据
exports.getArtCateById = (req, res) => {
    // 定义根据 id 获取文章分类数据的 SQL 语句
    const sql = `select * from ev_article_cate where id=?`;
    db.query(sql, req.params.id, (err, results) => {
        if (err) {
            return res.cc(err);
        }
        if (results.length !== 1) {
            return res.cc('获取文章分类数据失败！');
        }
        res.send({
            status: 0,
            message: '获取文章分类数据成功！',
            data: results[0]
        })
    })
}

// 通过 id 更新文章分类数据
exports.updateCateByID = (req, res) => {
    // 定义查询 分类名称 与 分类别名 是否被占用
    const sql = `select * from ev_article_cate where id<>? and (name=? or alias=?)`;
    db.query(sql, [req.body.Id, req.body.name, req.body.alias], (err, results) => {
        if (err) {
            return res.cc(err);
        }
        if (results.length === 2) {
            return res.cc('分类名称和分类别名同时被占用，请更换后重试！');
        } else if (results.length === 1) {
            if (results[0].name === req.body.name && results[0].alias === req.body.alias) {
                return res.cc('分类名称和分类别名同时被占用，请更换后重试！');
            } else if (results[0].name === req.body.name) {
                return res.cc('分类名称被占用，请更换后重试！');
            } else if (results[0].alias === req.body.alias) {
                return res.cc('分类别名被占用，请更换后重试！');
            }
        }
        // TODO: 根据 id 更新文章分类数据
        const sql = `update ev_article_cate set ? where id=?`;
        db.query(sql, [req.body, req.body.Id], (err, results) => {
            if (err) {
                return res.cc(err);
            }
            if (results.affectedRows !== 1) {
                return res.cc('更新文章分类数据失败！');
            }
            res.cc('更新文章分类数据成功！', 0);
        })
    })
}