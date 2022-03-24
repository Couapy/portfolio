/**
 * Webpack configuration, compiles and bundles application scripts and styles.
 *
 * Documentation: https://webpack.js.org/
 */

const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devMode = process.env.NODE_ENV === 'development'

module.exports = {
  mode: devMode ? 'development' : 'production',
  devtool: devMode ? 'source-map' : undefined,
  entry: {
    style: path.resolve(__dirname, 'src', 'assets', 'styles', 'index.sass'),
    app: path.resolve(__dirname, 'src', 'assets', 'scripts', 'app.js'),
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [ { loader: "html-loader" } ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: { outputStyle: 'compressed' },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  devServer: {
    static: { directory: path.resolve(__dirname, 'build') },
    compress: true,
    port: 8000,
  },
}
