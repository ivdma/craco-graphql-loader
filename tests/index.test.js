const path = require("path");
const { loadCracoConfig } = require("@craco/craco/lib/config");
const { craPaths, loadWebpackDevConfig } = require("@craco/craco/lib/cra");
const { overrideWebpackConfig } = require("craco-graphql-loader");

const context = {
  env: process.env.NODE_ENV,
  paths: craPaths,
};
let webpackConfig;

describe("#overrideWebpackConfig", () => {
  beforeEach(() => {
    process.env.NODE_ENV = "development";
    const cracoConfig = loadCracoConfig(context);
    webpackConfig = loadWebpackDevConfig(cracoConfig);
    process.env.NODE_ENV = "test";
  });

  describe("without pluginOptions provided", () => {
    it("returns correct configuration object", () => {
      const result = overrideWebpackConfig({ webpackConfig });
      const loaders = result.module.rules[result.module.rules.length - 1].oneOf;

      expect(loaders).toContainEqual({
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader",
      });
    });
  });

  describe("when plugin options are passed", () => {
    it("uses provided options", () => {
      const pluginOptions = {
        test: /\.graphql$/,
        exclude: /foo/,
      };

      const result = overrideWebpackConfig({ webpackConfig, pluginOptions });
      const loaders = result.module.rules[result.module.rules.length - 1].oneOf;

      expect(loaders).toContainEqual({ test: /\.graphql$/, exclude: /foo/, loader: "graphql-tag/loader" });
    });
  });
});
