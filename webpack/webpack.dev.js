const { merge } = require('webpack-merge');
const path = require('path')
const webpackCommon = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const proxyDev = require('./proxy.dev')
const port = process.env.PORT
module.exports = merge(webpackCommon, {
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
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ //生成html文件
            title: 'react-webpack',
            template: './public/index.html',
            chunks: ['app', 'vendor']
        })
    ],
    devServer: { //测试服务启动
        port: port,
        static: path.resolve(__dirname, 'dist'),
        // contentBase: path.resolve(__dirname, 'dist'), // 告诉服务器从哪个目录中提供内容。只有在你想要提供静态文件时才需要
        compress: true,
        client: {
            overlay: true, // 当出现编译器错误或警告时，在浏览器中显示全屏覆盖层。默认禁用
            // progress: true, // 浏览器控制台出现编译进度
        },
        // open: true, // 启动时打开浏览器
        historyApiFallback: true,
        proxy: proxyDev
    }
})