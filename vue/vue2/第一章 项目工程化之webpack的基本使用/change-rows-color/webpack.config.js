const path = require('path');
// 导入 HTML 插件
const HtmlPlugin = require('html-webpack-plugin');

// 创建 HTML 插件的实例对象
const htmlPlugin = new HtmlPlugin({
  // 指定要复制哪个页面
  template: './src/index.html',
  // 指定复制文件的存放地址和文件名
  filename: './index.html'
});

// 导出 webpack 配置对象
module.exports = {
  // mode 代表 webpack 运行的模式，可选值有 development 和 production
  // 注：开发时用 development ，发布上线时用 production
  mode: 'development',
  // entry：指定要处理的文件
  entry: path.join(__dirname, './src/index.js'),
  // output：指定要生成的文件
  output: {
    // 存放到目录
    path: path.join(__dirname, './dist'),
    // 生成的文件名
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    // 首次打包成功后，自动打开浏览器
    open: true,
    // 修改端口号为 80
    port: 80,
    // 指定运行的主机地址
    host: '127.0.0.1'
  },
  // 插件的数组，将来在 webpack 运行时，会加载并调用这些插件
  plugins: [
    htmlPlugin
  ]
}