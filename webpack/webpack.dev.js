const { merge } = require('webpack-merge');
const path = require('path')
const webpackDll = require('./webpack.dll');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const configProxy = require('./config.proxy.dev')
const port = process.env.PORT
module.exports = merge(webpackDll, {
    mode: 'development',
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            cacheGroups: {
                vendor: {
                    test: /node_modules/, // 用于规定缓存组匹配的文件位置
                    name: 'vendor',
                    minSize: 30000,
                    priority: -10 // 优先级
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ //生成html文件
            title: 'deertong',
            template: './public/index.html',
            chunks: ['app', 'vendor']
        })
    ],
    devServer: { //测试服务启动
        port,
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        overlay: true,
        quiet: true,
        historyApiFallback: true,
        proxy: configProxy
    }
})