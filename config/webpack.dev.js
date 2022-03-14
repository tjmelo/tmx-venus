const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const tmxVenus = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'tmx-venus.js',
    path: path.resolve(__dirname, '../dist')
  },

  devServer: { 
    port: 9000 ,
    static: {
      directory: path.join(__dirname, '../dist'),
    },
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],

}

module.exports = tmxVenus;