module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: './build/bundle.js'
    },
    module: {
        rules:[
            {
                test:/\.js?$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/
            }
        ]
    }
}