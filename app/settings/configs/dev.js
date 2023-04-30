/**
 * webpack.dev.js
 */
// Get the dev plugins
const devPlugins = require("../plugins/dev");

module.exports = function createDevConfig(answer) {
  let devConf = {
    mode: "'development'",
    optimization: {
      usedExports: true,
    },
    devtool: "'inline-source-map'",
    devServer: {
      hot: true,
      compress: false,
    },
    // Insert all plugins is existst in devPlugins()
    plugins: devPlugins(),
    module: {
      rules: [
        {
          test: "/\\.(tsx?|jsx?)$/",
          loader: "'babel-loader'",
          exclude: "/node_modules/",
          options: {
            presets: [
              "'@babel/typescript'",
              [
                "'@babel/preset-env'",
                {
                  "'targets'": {
                    "'browsers'": ["'last 2 versions'"],
                  },
                },
              ],
            ],
            plugins: [
              "'@babel/plugin-proposal-object-rest-spread'",
              "'@babel/plugin-proposal-class-properties'",
              ["'@babel/plugin-transform-react-jsx'", { "'pragma'": "'h'" }],
            ],
          },
        },
        {
          test: "/\\.(tsx?|jsx?)$/",
          loader: "'ts-loader'",
          // include: 'path.resolve(__dirname, "src")',
          exclude: "/node_modules/"
        },
      ],
    },
  };

  return devConf;
};
