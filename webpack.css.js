module.exports = function loadCss(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    }
  };
};
