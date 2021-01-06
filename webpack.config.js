const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.resolve(__dirname, '.babelrc.client.js'),
          }
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./template/index.html",
      publicPath: '/dist/',
    })
  ],
  mode: "production",
  devServer: {
    historyApiFallback: true,
  }
}