import path from "node:path"
import { fileURLToPath } from "node:url"
import HtmlWebpackPlugin from "html-webpack-plugin"
import CopyPlugin from "copy-webpack-plugin"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  mode: "development",

  entry: path.resolve(__dirname, "src", "main.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "dist", "src", "assets"),
        },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            targets: "defaults",
            presets: [["@babel/preset-env"]],
          },
        },
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true,
  },
}
