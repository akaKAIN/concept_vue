const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')


module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'my-patterns.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({})
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']                  // Настройка для того, чтобы в импортах не дописывать расширение файла
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ]
  }
}
