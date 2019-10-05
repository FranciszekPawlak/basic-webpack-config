const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js'
    },
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    //bundle on change
    watch: true,
    //server
    devServer: {
        //open browser 
        open: true,
        //static files
        contentBase: path.resolve(__dirname, './public/assets'),
    },
    module: {
        rules: [{
                test: /\.txt$/,
                use: 'raw-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpg|png|svg|gif"jepg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name]-[contenthash].[ext]',
                    outputPath: 'images',
                }
            },
        ],
    },
    plugins: [
        //html generator
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/templates/template.html'
        }),
        //dir cleaner
        new CleanWebpackPlugin(),
    ],

}