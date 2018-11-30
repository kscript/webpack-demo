const path = require('path');
module.exports = {
  webpack: {
    mode: "none",
    entry: path.resolve(__dirname, '../src/main'),
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: "app.js",
      publicPath: "/"
    }
  }
}