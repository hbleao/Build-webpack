const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  externals: {
    react: 'React',
    axios: 'axios',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/templates/template.prod.html' }),
  ],
  devtool: 'eval-source-map',
});
