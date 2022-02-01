module.exports = {
  entry: "./src/index.js",
  output: {
    libraryTarget: "module",
    filename: "index.js",
    environment: {
      module: true,
      dynamicImport: true, // Note you need to enable `dynamicImport ` here
    },
  },
  externalsType: "import",
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
            options: {
              injectType: "lazyStyleTag",
              insert: function insertIntoTarget(element, options) {
                var parent = options.target || document.head;

                parent.appendChild(element);
              },
            },
          },
          "css-loader",
        ],
      },
    ],
  },
};
