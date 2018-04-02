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
      "node_modules",
      path.resolve(__dirname, 'src')
    ],

    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"],
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
