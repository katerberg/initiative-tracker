const webpack = require('webpack');

module.exports = function loadPerformance() {
  return {
    performance: {
      hints: false
    },
    plugins: [
      new webpack.NamedModulesPlugin()
    ]
  };
};
