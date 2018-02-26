const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  entry: {
    index: './src/index.js'    
  },  
  output: {
    path: path.resolve(__dirname, 'out'),
    filename: './bundle.js'
  },
  devtool: 'source-map',
  watch: false,
  plugins: [
    new UglifyJSPlugin({ 
      sourceMap: true
    }),
    new webpack.IgnorePlugin(/vertx/)
  ]
};