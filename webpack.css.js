module.exports = function loadCss(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    }
  };
};
