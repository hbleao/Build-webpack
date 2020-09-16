const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CompressionPlugin = require("compression-webpack-plugin");
// const BrotliPlugin = require("brotli-webpack-plugin");

const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  externals: {
    react: "React",
    axios: "axios",
    "react-dom": "ReactDOM",
    "react-router-dom": "ReactRouterDOM",
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./templates/template.prod.html" }),
    // new CompressionPlugin({
    //   algorithm: "gzip",
    // }),
    // new BrotliPlugin(),
  ],
  devtool: "eval-source-map",
});
