const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");

const entryPoint = path.join(__dirname, "src", "index.js");

module.exports = {
  entry: entryPoint,
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      filename: "./index.html",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
  },
  devtool: "source-map",
  stats: {
    errorDetails: true,
  },
};
