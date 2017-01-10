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
    rules: [
      {
        test: /\.jsx$/,
        include: PATHS.app,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react']
            }
          }
        ]
      }
    ]
  },
};

module.exports = function(env) {
  const combined = merge([common, performance(), css(PATHS.app)]);
  console.log(JSON.stringify(combined, null, 2));
  return combined;
};
