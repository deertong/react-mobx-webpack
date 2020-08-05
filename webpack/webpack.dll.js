const path = require('path')
const WebpackBar = require('webpackbar');
const webpack = require('webpack')
const config = {
    entry: {
        app: './index.js',
    },
    output: {
        filename: 'js/[name]-[hash].js',
        chunkFilename: 'js/[name].[hash:8].js',
        path: path.resolve(__dirname, '..', 'dist'),// __dirname 相对于当前文件位置
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            { //字体文件
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    name: "[name].[ext]",
                    outputPath: './fonts'
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[name][hash].[ext]',
                            outputPath: 'image/'
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new WebpackBar(),
        new webpack.DefinePlugin({
            "ENV": JSON.stringify(process.env.NODE_ENV),
            "REPLACEURL": process.env.ISBUILD == 1
        })
    ]
}

module.exports = config