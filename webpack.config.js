const MinifyJsPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = env => {
  return {
    mode: process.env.NODE_ENV || 'production',
    devtool: 'source-map',
    entry: {
      "@andrwj-fp": "./index.js",
      "@andrwj-fp.min": "./index.js"
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|loader\.js)/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    optimization: {
      minimize: true,
      minimizer: [new MinifyJsPlugin({
        include: /\.min\.js$/
      })]
    }
  }
};
