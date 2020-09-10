const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: './public',
    writeToDisk: true,
    historyApiFallback: true,
    port: 3000,
  },
  plugins: [
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify('http://localhost:3000/dev'),
    }),
    new HtmlWebpackPlugin({ template: './src/templates/template.dev.html' }),
  ],
  devtool: 'eval-source-map',
});
