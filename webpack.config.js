const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const css = require('./webpack.css');
const performance = require('./webpack.performance');

const PATHS = {
  build: path.resolve(__dirname, 'src/client/public'),
  app: path.resolve(__dirname, 'src/client/app') 
};

const common = {
  entry: PATHS.app + '/index.jsx',
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        include: PATHS.app,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};

module.exports = function(env) {
  return merge([common, performance(), css(PATHS.app)]);
};
