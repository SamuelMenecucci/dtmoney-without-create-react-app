const path = require("path");

const isDevelopment = process.env.NODE_ENV !== "production";

const HtmlWebpackPlugins = require("html-webpack-plugin");

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

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
    hot: true,
  },

  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),

    new HtmlWebpackPlugins({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ].filter(Boolean),

  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              isDevelopment && require.resolve("react-refresh/babel"),
            ].filter(Boolean),
          },
        },
      },

      {
        //para conseguir utilizar svg (ou outras imagens), iremos precisar configurar o webpack. com o file-loader
        //yarn add file-loader -D
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
    ],
  },
};
