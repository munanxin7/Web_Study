// 导入自定义格式化时间的模块
const TIME = require('./10-dateFormat');

// 调用方法进行时间格式化
const dt = new Date();
// console.log(dt);
const newDT = TIME.dateFormat(dt);
console.log(newDT);