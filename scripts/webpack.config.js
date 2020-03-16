/* global __dirname */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseDir = process.cwd();

module.exports = {
  context: path.resolve(__dirname, '../src'),

  entry: {
    index: '../src/index.ts',
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: 'ts-loader' }],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: '[local]',
            },
          },
          'css-loader',
        ],
      },
    ],
  },

  resolve: {
    // Make sure that libs are included only once
    alias: {
      'mithril/stream': path.resolve(
        baseDir,
        'node_modules/mithril/stream/stream.js',
      ),
      mithril: path.resolve(baseDir, 'node_modules/mithril/mithril.js'),
    },
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/app.css',
    }),
  ],

  devtool: 'source-map',
};
