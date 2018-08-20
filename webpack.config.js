const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
   entry: './app',
  // Output our app to the dist/ directory
  output: {
    filename: 'app.js',   
    path: 'C:\\Users\\patri\\Documents\\code\\rockpaper\\rockpaper\\dist'
  }, 
  devtool: 'source-map', 
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query:
      {
        presets:['react']
      }
    }]
  },
 
  plugins: [    
    new HtmlPlugin({
      template: 'app/index.html'
    }),
    new CopyWebpackPlugin([
          { from: 'app/css', to: 'css' },
          { from: 'app/js', to: 'js' },         
          { from: 'app/img', to: 'img' }]),     
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
    }),  
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    }),
    
  ]
}