const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    // 唯一入口
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // webpack-dev-server
    devServer: {
        contentBase: './dist', //本地服务器所加载的页面所在的目录
        port: '8081',
        host: 'localhost',
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/react'],
                            plugins: [
                                [require("@babel/plugin-proposal-decorators"), { "legacy": true }]
                            ]
                        }
                    }
                ],
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: [{ loader: MiniCssExtractPlugin.loader}, 'css-loader'],
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.less/,
                use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'less-loader'],
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.scss/,
                use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'sass-loader'],
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.(gif|jpg|png|bmp|eot|woff|woff2|ttf|svg)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            outputPath: 'images'
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyWebpackPlugin({
                parallel: 4
            }),
            new OptimizeCssAssetsWebpackPlugin()
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new CleanWebpackPlugin()
    ]
}