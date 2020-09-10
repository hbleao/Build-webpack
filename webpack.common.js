// const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// module.exports = {
//   entry: path.resolve(__dirname, 'src'),
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle-[hash].js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         use: [
//           {
//             loader: 'file-loader',
//           },
//         ],
//       },
//       {
//         test: /\.svg$/,
//         loader: 'svg-inline-loader',
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.ts', '.tsx', '.js'],
//     alias: {
//       '@': path.join(__dirname, 'src'),
//     },
//     modules: ['src', 'node_modules'],
//   },
//   plugins: [new CleanWebpackPlugin()],
//   devtool: 'eval-source-map',
// };

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src'),
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'main-bundle-[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.join(__dirname, 'src'),
    },
    modules: ['src', 'node_modules'],
  },
  plugins: [new CleanWebpackPlugin()],
  devtool: 'eval-source-map',
};
