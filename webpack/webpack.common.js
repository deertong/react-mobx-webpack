const path = require('path')
const WebpackBar = require('webpackbar');
const webpack = require('webpack')
const resolve = dir => path.resolve(__dirname, '..', dir);
const config = {
    entry: {
        app: './src/index.jsx',
    },
    output: {
        filename: 'js/[name]-[hash].js',
        chunkFilename: 'js/[name].[hash:8].js',
        path: path.resolve(__dirname, '..', 'build'),// __dirname 相对于当前文件位置
        publicPath: '/'
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        alias: {
            '~': resolve('src')
        }
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
        new WebpackBar({
            name: '🐲',
            color: '#19ce00'
        }),
        new webpack.DefinePlugin({
            "ENV": JSON.stringify(process.env.NODE_ENV),
        })
    ]
}

module.exports = config