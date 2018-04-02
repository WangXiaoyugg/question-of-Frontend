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

### entry 入口
- 请看webpack.config.js, 必须配置模式才能运行, 运行命令 npm run webpack
```
npm run webpack
``