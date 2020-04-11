const common = require('./webpack.common');
const merge = require('webpack-merge');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(
  common, {
    optimization: {
      minimizer: [
        new UglifyWebpackPlugin()
      ]
    }
  }
)