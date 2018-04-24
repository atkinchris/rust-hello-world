const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
      test: /\.rs$/,
      use: [{
        loader: 'babel-loader',
      }, {
        loader: 'wasm-loader',
      }, {
        loader: 'rust-native-wasm-loader',
        options: {
          release: true,
          wasmBindgen: {
            ignoreVersion: true,
          },
        },
      }],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    inline: true,
    stats: 'errors-only',
  },
}

module.exports = config
