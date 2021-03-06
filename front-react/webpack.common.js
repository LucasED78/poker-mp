const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      favicon: './public/favicon.ico',
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /src/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }]
      },
      {
        test: /\.(png|jpg|ttf)$/,
        use: 'url-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts']
  }
}