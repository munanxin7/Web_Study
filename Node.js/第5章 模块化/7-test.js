// 在外界使用 require() 方法导入自定义模块时，得到的就是 module.exports 所指向的对象
// 注：导入的结果永远以 module.exports 指向的对象为准
const m = require('./6-自定义模块');

console.log(m);