const webpack = require('webpack');
const rules = require('./webpack.rules');

rules.push({
  test: /\.s[ac]ss$/i,
  use: [
    { loader: "style-loader" },
    { loader: "css-loader" },
    { loader: "sass-loader" },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: function () {
            return [require("autoprefixer")];
          },
        },
      },
    },
  ],
},
{
  test: /\.(png|jpe?g|gif|ico|svg)$/, // We will handle of these file extensions
  use: [
    {
      loader: "file-loader",
      options: {
        publicPath: "./../",
        name: "./assets/[hash].[ext]"
        //outputPath: ''
      }
    },
  ],
},
{
  test: /\.(woff|woff2|ttf|otf|eot)$/,
  use: [
    {
      loader: "file-loader",
      options: {
        publicPath: "./../",
        name: "./assets/fonts/[hash].[ext]",
        //outputPath: ''
      },
    },
  ],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".scss"],
  },
};
