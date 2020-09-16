const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");

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
    new CompressionWebpackPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new BrotliPlugin({
      asset: "[path].br[query]",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new HtmlWebpackPlugin({ template: "./templates/template.prod.html" }),
  ],
  devtool: "eval-source-map",
});
