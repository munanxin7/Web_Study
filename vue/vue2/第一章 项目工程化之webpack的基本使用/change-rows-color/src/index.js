// 使用 ES6 导入语法，导入 jQuery
import $ from 'jquery';


// 定义 jQuery 的入口函数
$(function () {
  // 实现奇偶行变色
  // 奇数行为 粉红色
  $("li:odd").css("background-color", "cyan");
  // 偶数行为 天蓝色
  $("li:even").css("background-color", "pink");
})