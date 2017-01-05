const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');

const PATHS = {
  build: path.resolve(__dirname, 'src/client/public'),
  app: path.resolve(__dirname, 'src/client/app') 
};

const common = merge(
  {
    entry: PATHS.app + '/index.jsx',
    output: {
      path: PATHS.build,
      filename: 'bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Initiative Tracker'
      })
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?/,
          include: PATHS.app,
          loader: 'babel-loader'
        }
      ]
    }
  }
);

module.exports = function(env) {
  return merge(common);
};
