/* global __dirname */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: "[local]"
            }
          },
        ]
      }
    ]
  },

  resolve: {
    extensions: [ ".mjs", ".js", ".json", ".ts" ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/app.css"
    }),
  ],

  devtool: "source-map"

};
