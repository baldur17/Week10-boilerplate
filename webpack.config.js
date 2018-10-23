const path = require('path');
const CleanwebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    //new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new HtmlWebpackPlugin({
      template: "./src/client/index.html"
      })
  ],
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:5000"
    }
  }
}
