const { DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var DashboardPlugin = require("webpack-dashboard/plugin");

const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: "./dist",
    writeToDisk: true,
    historyApiFallback: true,
    port: 3000,
  },
  plugins: [
    new DashboardPlugin(),
    new HtmlWebpackPlugin({ template: "./templates/template.dev.html" }),
  ],
  devtool: "eval-source-map",
});
