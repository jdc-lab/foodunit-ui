import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  output: {
    publicPath: '/',
    path: path.resolve('dist'),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  mode: process.env.NODE_ENV || 'development',

  entry: {
    client: './src/index.tsx',
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  module: {
    rules: [
      { 
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [ "style-loader", "css-loader", "sass-loader" ] 
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            fix: true,
          }
        }
      },
      { 
        enforce: "pre", 
        test: /\.js$/, 
        loader: "source-map-loader" 
      }
    ],
  },

  plugins: [
    new CopyWebpackPlugin([path.resolve('./static/index.html'), path.resolve('./static/config.json')]),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './static/index.html',
    }),
  ],

  devServer: {
    contentBase: './',
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },

  devtool: 'cheap-module-source-map',
}