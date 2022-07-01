import db from '../db/index.js'

export async function getAllUser(req, res) {
  try {
    const [rows] = await db.query(
      'select id, username, nickname,xxx from ev_users'
    )
    res.send({
      status: 0,
      message: '获取用户列表数据成功！',
      data: rows
    })
  } catch (error) {
    res.send({
      status: 1,
      message: '获取用户列表数据失败！',
      desc: error.message
    })
  }
}
