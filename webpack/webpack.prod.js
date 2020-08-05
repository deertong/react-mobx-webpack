const { merge } = require('webpack-merge');
const webpackDll = require('./webpack.dll');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(webpackDll, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
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
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }

                    },
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }

                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ //生成html文件
            title: 'deertong',
            template: './public/index.html',
            chunks: ['app', 'vendor']
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name][hash].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
        })
    ]
})