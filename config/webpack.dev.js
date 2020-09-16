const HtmlWebpackPlugin = require("html-webpack-plugin");
var DashboardPlugin = require("webpack-dashboard/plugin");

const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: "../dist",
    writeToDisk: true,
    historyApiFallback: true,
    port: 3000,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  plugins: [
    new DashboardPlugin(),
    new HtmlWebpackPlugin({ template: "./templates/template.dev.html" }),
  ],
  devtool: "eval-source-map",
});
