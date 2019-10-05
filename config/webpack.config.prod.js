const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'js/main-[contenthash].js',
        path: path.resolve(__dirname, "../", 'dist')
    },
    module: {
        rules: [{
                test: /\.txt$/,
                use: 'raw-loader',
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpg|png|svg|gif"jepg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name]-[contenthash].[ext]',
                        outputPath: 'images',
                    }
                }, {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            quality: 80,
                            progressiver: true,
                        }
                    }
                }],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["@babel/preset-env", {
                                useBuiltIns: "usage",
                                corejs: 3
                            }],
                            ['@babel/preset-react']
                        ],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-transform-arrow-functions",
                        ],
                    },
                },
            },
        ],
    },
    plugins: [
        //html generator
        new HtmlWebpackPlugin({
            template: 'src/templates/template.html',

        }),
        //style to one file
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash].css',
        }),
        //dir cleaner
        new CleanWebpackPlugin(),
        new CopyPlugin([{
            from: 'public',
            to: 'images'
        }, ]),
    ],

}