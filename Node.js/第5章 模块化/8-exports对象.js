/* console.log(exports);
console.log(module.exports);

// 默认情况下，exports 和 module.exports 指向同一个对象
console.log(exports === module.exports); */

const username = 'privet';

exports.username = username;
exports.age = 18;
exports.sayHello = function () {
    console.log('Hello~');
}