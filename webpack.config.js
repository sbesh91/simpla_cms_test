const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PolymerWebpackLoader = require('polymer-webpack-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  entry: {
    index: './src/index.js'    
  },  
  output: {
    path: path.resolve(__dirname, 'out'),
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'polymer-webpack-loader'
      },
    ]
  },
  devtool: 'source-map',
  watch: false,
  plugins: [
    new UglifyJSPlugin({ 
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
      template: './src/index.htm'
    }),
    new CopyWebpackPlugin([
      {from: 'bower_components', to: 'out/bower_components'},
      {from: 'server', to: 'out'}, 
    ]), 
    new webpack.IgnorePlugin(/vertx/)
  ]
};