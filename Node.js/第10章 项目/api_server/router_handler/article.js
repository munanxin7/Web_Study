// 文章相关的处理函数
// 导入数据库操作模块
const db = require('../db/index');

// 发布新文章的处理函数
exports.addArticle = (req, res) => {
    // 判断是否上传文章封面
    if (!req.file || req.file.fieldname !== 'cover_img') {
        return res.cc('文章封面为必选参数！')
    }
    // 发布文章
    const path = require('path');
    const articleInfo = {
        // 标题 内容 状态 所属类别
        ...req.body,
        // 文章封面在服务端的存放路径
        cover_img: path.join('/uploads', req.file.fieldname),
        // 文章的发布时间
        pub_date: new Date(),
        // 文章作者的 id
        author_id: req.user.id
    }

    // 定义发布文章的 SQL 语句
    const sql = `insert into ev_articles set ?`;
    db.query(sql, articleInfo, (err, results) => {
        if (err) {
            return res.cc(err);
        }
        if (results.affectedRows !== 1) {
            return res.cc('新增文章失败！');
        }
        res.cc('新增文章成功！', 0);
    })
}