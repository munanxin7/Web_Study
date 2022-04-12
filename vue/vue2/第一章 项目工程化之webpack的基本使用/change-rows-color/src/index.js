// 使用 ES6 导入语法，导入 jQuery
import $ from 'jquery';
// 导入样式(在webpack中，一切皆模块，都可以通过ES6导入语法进行导入和使用)
import './css/index.css';
import './css/index.less';

// 导入图片
import snow from './images/snow.jpeg';
// 给 img 标签的 src 动态赋值
$(".box").attr("src", snow);

// 定义 jQuery 的入口函数
$(function () {
  // 实现奇偶行变色
  // 奇数行为 粉红色
  $("li:odd").css("background-color", "cyan");
  // 偶数行为 天蓝色
  $("li:even").css("background-color", "pink");
})

// 定义装饰器函数
function info(target) {
  target.info = 'Person info.';
}

// 定义一个普通的类
@info
class Person {}

consle.log(Person.info);