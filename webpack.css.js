module.exports = function loadCss(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.s?css$/,
          use: ['style-loader', 'css-loader?modules=true', 'sass-loader']
        }
      ]
    }
  };
};
