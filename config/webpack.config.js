const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require("./config.main");
const merge = require('webpack-merge');

module.exports = merge({
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        exclude: [
        ],
        enforce: "pre",
        enforce: "post",
        loader: "babel-loader",
        options: {
          presets: ["es2015"]
        },
      },
      {
        test: /\.html$/,
        use: [
          "htmllint-loader",
          {
            loader: "html-loader",
            options: {
            }
          }
        ]
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    extensions: [".js", ".json", ".jsx", ".css"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
},
  config.webpack || {}
);