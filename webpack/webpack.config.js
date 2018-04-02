const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'development',  
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash:7].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: 'babel-loader',
      },
      {
        test:/\.less$/,
        include: [
          path.resolve(__dirname,'src')
        ],
        use: ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:['css-loader','less-loader']
        })
      },
      {
        test:/\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ],
  },

  // 代码模块路径解析的配置
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),// 指定当前目录下的node_modules 优先查找
      "node_modules",
      path.resolve(__dirname, 'src')
    ],
    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"],
    alias:{
      utils: path.resolve(__dirname, 'src/utils')
    },
    mainFields: ['browser','module', 'main'],
    mainFiles:['index'], // 项目目录下没有package.json, 默认使用目录下的index.js
    // resolveLoader: { // 用于配置解析 loader 时的 resolve 配置
    //   extensions: ['.js','.json'],
    //   mainFields: ['loader','main']
    // }
  },

  plugins: [
    new UglifyPlugin(),
    new HtmlPlugin({
      filename:'index.html',
      template:'assets/index.html'
    }), 
    // 引入插件。配置文件名，同样可以使用hash
    new ExtractTextPlugin('index.[hash:7].css')
  ],
}
