/* global __dirname */
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

  context: path.resolve(__dirname, "../src"), 

  entry: {
    index: "../src/index.ts",
  },

  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].js"
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          { loader: "ts-loader" }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
    ]
  },

  resolve: {
    extensions: [ ".mjs", ".js", ".json", ".ts" ]
  },

  plugins: [
    new ExtractTextPlugin("css/app.css"),
  ],

  devtool: "source-map"

};
