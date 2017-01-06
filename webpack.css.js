module.exports = function loadCss(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.css$/,
          include: paths,
          loader: ['style-loader', 'css-loader']
        }
      ]
    }
  };
};
