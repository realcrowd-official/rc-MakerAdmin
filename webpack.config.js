const path = require("path");
const AntdScssThemePlugin = require("antd-scss-theme-plugin");

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
      "@containers": path.resolve(__dirname, "src/containers/"),
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
  },
  rules: [
    {
      loader: "babel-loader",
      test: /\.jsx?$/,
      // Other settings, like include or exclude
      options: {
        presets: [
          //...
        ],
        plugins: [
          // ...
          // Importing Ant here is not needed if you are using a .babelrc file
          [
            "import",
            {
              libraryName: "antd",
              libraryDirectory: "es" // or "lib" for default
              // No "style" setting
            }
          ]
        ]
      }
    },
    // ...
    // Include less-loader (exact settings may deviate depending on your building/bundling procedure)
    {
      test: /\.less$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" },
        {
          loader: "less-loader",
          options: {
            javascriptEnabled: true //This is important!
          }
        }
      ]
    },
    // Tell the DEFAULT sass-rule to ignore being used for sass imports in less files (sounds weird)
    {
      test: /\.scss$/,
      issuer: {
        exclude: /\.less$/
      }
      // ... other settings
    },
    // Define a second rule for only being used from less files
    // This rule will only be used for converting our sass-variables to less-variables
    {
      test: /\.scss$/,
      issuer: /\.less$/,
      use: {
        loader: "./src/sassVarsToLess.js" // Change path if necessary
      }
    }

    // ...
  ],
  plugins: [new AntdScssThemePlugin("./src/style/modules/color.scss")]
};
