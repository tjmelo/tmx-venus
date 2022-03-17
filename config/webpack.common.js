const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'tmx-venus.js',
        path: path.resolve(__dirname, '../dist'),
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    })],
};