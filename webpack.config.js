const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: {
        main: './src/app.js'
    },
    output: {
        filename: 'js/main-[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    //do bundle on change
    watch: true,
    //server
    devServer: {
        //open browser 
        open: true,
        //static files
        contentBase: path.resolve(__dirname, './public/assets'),
    },
    module: {
        rules: [
            //txt
            {
                test: /\.txt$/,
                use: 'raw-loader',
            },
            //css
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            //sass
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        //html generator
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/templates/template.html'
        }),
        //style to one file
        new MiniCssExtractPlugin({
            filename: 'styles/[name]-[contenthash].css',

        }),
        //dir cleaner
        new CleanWebpackPlugin(),
    ],

}