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

// 导入自动清理dist的构造函数
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

// 导出 webpack 配置对象
module.exports = {
  // 开发调试阶段
  // devtool: 'eval-source-map',
  // 正式发布阶段
  devtool: 'nosources-source-map',
  // 调试发布阶段
  // devtool: 'source-map',
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
    filename: 'js/bundle.js',
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
    htmlPlugin,
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      // 定义了不同模块对应的loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }, {
        test: /\.jpg|png|gif|jpeg$/,
        // 限定小于 limit 字节的图片被转换成base64存储
        use: 'url-loader?limit=22229&outputPath=images'
      }, {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}