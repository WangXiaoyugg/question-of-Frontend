## webpack 学习

#### 安装
- 在项目文件夹下执行命令
```
npm install webpack webpack-cli -D

```
- 在 package.json 中写入命令
```
"scripts": {
    "build": "webpack --mode production"
}
```
- 在 ./src/index.js 写入js代码
```
[1,2,3].map(item => item + 1);
```
- 在命令行切到项目根路径，执行命令
```
npm run build
```
- 最后看到打包的文件放在 ./dist/main.js 下面
 
### 一个基本的webpack 配置
- 五个部分组成
```
1. entry
2. output
3. module
4. resolve
5. plugins
```

### entry 入口
- 请看webpack.config.js, 必须配置模式才能运行, 运行命令 npm run webpack
```
npm run webpack
```

### 前端开发的构建需求
- 构建html,css, js 文件
- 支持 less,sass等css预处理器
- 压缩图片
- babel 支持 es6 语法
- 提供本地静态开发调试方便开发

- 关联html
```
npm install html-webpack-plugin -D
```