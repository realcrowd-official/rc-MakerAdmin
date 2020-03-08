const path = require("path");

const entries = {};

module.exports = {
  entry: entries,
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    alias: {
      "@src": path.resolve(__dirname, "src/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@layout": path.resolve(__dirname, "src/layout/"),
      "@components": path.resolve(__dirname, "src/components/")
    }
  },
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js"
  },
  target: "node",
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  optimization: {
    minimize: false
  }
};
