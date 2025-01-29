const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './dist/favicon.png',
      publicPath: './',
    }),
    new ModuleFederationPlugin({
      name: 'TmxVenus',
      filename: 'remoteEntry.js',
      exposes: {
        './TmxVenus': './src/bootstrap',
      },
    }),
  ],
};
