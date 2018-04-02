// module.exports = {
//     "mode":"development",
//     "entry": './src/index.js'
// }

// //等同于, 默认是main
// module.exports = {
//     "mode":"development",
//     entry: {
//         main: './src/index.js'
//     }
// }

// //多入口， 会分开打包
// module.exports = {
//     mode:"development",
//     entry: {
//         foo: './src/foo.js',
//         bar: './src/bar.js'
//     }
// }

// // 使用数组打包 , 会打包到一个main.js 中
module.exports = {
    mode:"development",
    entry: {
        main: [
            './src/foo.js',
            './src/bar.js'
        ]
    }
}

