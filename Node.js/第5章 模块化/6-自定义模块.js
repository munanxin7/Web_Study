// 在一个自定义模块中，默认情况下，module.exports = {}
// 向 module.exports 对象上挂载 username 属性
const age = 18;

module.exports.username = 'privet';

// 向 module.exports 对象上挂载 sayHello() 方法
module.exports.sayHello = function () {
    console.log('Hello!');
}
module.exports.age = age;

// 让module.exports指向一个全新的对象
module.exports = {
    ninkname: 'mumu',
    sayHi() {
        console.log('hi~');
    }
}