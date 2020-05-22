// object-path-immutable
const { addBeforeLoader, loaderByName } = require("@craco/craco");

/**
 * {
 *   webpackConfig: "The webpack config object already customized by craco",
 *   cracoConfig: "The configuration object read from the craco.config.js file provided by the consumer",
 *   pluginOptions: "The plugin options provided by the consumer",
 *   context: {
 *     env: "The current NODE_ENV (development, production, etc..)",
 *     paths: "An object that contains all the paths used by CRA"
 *   }
 * }
 */
const overrideWebpackConfig = ({ webpackConfig, pluginOptions }) => {
  const loader = "graphql-tag/loader";
  const test = (pluginOptions && pluginOptions.test) || /\.(graphql|gql)$/;
  const exclude = (pluginOptions && pluginOptions.exclude) || /node_modules/;

  const graphqTagLoaderRule = { test, exclude, loader };

  console.log(webpackConfig, graphqTagLoaderRule);

  addBeforeLoader(
    webpackConfig,
    loaderByName("file-loader"),
    graphqTagLoaderRule
  );

  return webpackConfig;
};

module.exports = { overrideWebpackConfig };
