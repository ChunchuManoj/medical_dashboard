const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      if (env === "development") {
        webpackConfig.plugins.push(
          new ReactRefreshWebpackPlugin({
            overlay: false,
          })
        );

        const babelLoader = webpackConfig.module.rules
          .find((rule) => rule.oneOf)
          .oneOf.find(
            (rule) => rule.loader && rule.loader.includes("babel-loader")
          );

        if (babelLoader) {
          babelLoader.options = {
            ...babelLoader.options,
            plugins: [
              ...(babelLoader.options.plugins || []),
              require.resolve("react-refresh/babel"),
            ].filter(Boolean),
          };
        }
      }

      webpackConfig.ignoreWarnings = [
        {          module: /node_modules\/@mediapipe\/tasks-vision/,
        },
      ];

      return webpackConfig;
    },
  },
};
