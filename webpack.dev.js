const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  //devtool: 'source-map', //source-map最详细，但是构建性能最差 ，eval构建性能最快，但是没有细节提示！
  devtool: 'cheap-module-eval-source-map', // 在大多数情况下，cheap-module-eval-source-map 是最好的选择。
  devServer: {
    contentBase: './dist'
  }
});