const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const paths = {
  SRC: path.resolve(__dirname, 'src'),
  DEST: path.resolve(__dirname, 'dist'),
}

const config = {
  entry: paths.SRC,
  output: {
    path: paths.DEST,
    filename: '[name].[hash:8].js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
    }, {
      test: /\.rs$/,
      use: [{
        loader: 'babel-loader',
      }, {
        loader: 'rust-native-wasm-loader',
        options: {
          release: true,
          wasmBindgen: {
            wasm2es6js: true,
          },
        },
      }],
    }],
  },
  plugins: [
    new CleanWebpackPlugin([paths.DEST]),
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    inline: true,
    stats: 'errors-only',
  },
  stats: 'errors-only',
}

module.exports = config
