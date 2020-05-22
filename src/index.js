const { addBeforeLoader, loaderByName } = require("@craco/craco");

const overrideWebpackConfig = ({ webpackConfig, pluginOptions }) => {
  const loader = "graphql-tag/loader";
  const test = (pluginOptions && pluginOptions.test) || /\.(graphql|gql)$/;
  const exclude = (pluginOptions && pluginOptions.exclude) || /node_modules/;

  const graphqTagLoaderRule = { test, exclude, loader };

  addBeforeLoader(webpackConfig, loaderByName("file-loader"), graphqTagLoaderRule);

  return webpackConfig;
};

module.exports = { overrideWebpackConfig };
