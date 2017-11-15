const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index',
  output: {
    filename: '[name].js',
    path: __dirname,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ],
    noParse: [
      /benchmark/
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devServer: {
    inline: true,
    historyApiFallback: true,
    port: 3000,
    stats: {
      colors: true
    }
  }
}
