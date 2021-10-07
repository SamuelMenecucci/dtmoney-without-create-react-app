const path = require("path");

const isDevelopment = process.env.NODE_ENV !== "production";

const HtmlWebpackPlugins = require("html-webpack-plugin");

module.exports = {
  //yarn add cross-env -D com as configurações no package.json
  mode: isDevelopment ? "development" : "production",

  devtool: isDevelopment ? "eval-source-map" : "source-map",

  entry: path.resolve(__dirname, "src", "index.tsx"),

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  // yarn add webpack-dev-server -D
  devServer: {
    static: path.resolve(__dirname, "public"),
  },

  plugins: [
    new HtmlWebpackPlugins({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
