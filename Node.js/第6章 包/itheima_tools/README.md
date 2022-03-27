# **itheima-tools**

## 安装

```
npm install itheima-tools
```

## 导入

```javascript
const itheima=require('itheima');
```

## 格式化时间

```javascript
// 调用 dataFormat 对时间进行格式化
const dtStr = itheima.dateFormat(new Date());
// 结果 2022-03-27 17:48:35
console.log(dtStr);
```

## 转义 HTML 中的特殊字符

```javascript
// 待转化的 HTML 字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>';
// 调用 HTMLEscape 方法进行转换
const str = itheima.htmlEscape(htmlStr);
// 转换的结果 &lt;h1 title=%quot;abc%quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(str);
```

## 还原 HTML 中的特殊字符

```javascript
// 待还原的 HTML 字符串
const str2 = itheima.htmlUnEscape(str);
// 输出的结果 <h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
console.log(str2);
```

## 开源协议

ISC