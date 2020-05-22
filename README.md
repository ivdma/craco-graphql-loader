# GraphQL Loader plugin for CRACO

Plugin for [craco](https://www.npmjs.com/package/@craco/craco) which allows configuring the [graphql-tag/loader](https://github.com/apollographql/graphql-tag#webpack-loading-and-preprocessing) inside of [react-scripts](https://www.npmjs.com/package/react-scripts) applications.

## Usage

Install

```bash
npm i craco-graphql-loader

# or

yarn add craco-graphql-loader
```

Add this plugin to your `craco.config.js`:

```js
const cracoGraphqlLoader = require("craco-graphql-loader");

module.exports = {
  plugins: [{ plugin: cracoGraphqlLoader }],
};
```

Then import any query:

```jsx
import GreatQuery from './MyAwesomeQuery.graphl`
```

For full usage instructions visit: https://github.com/apollographql/graphql-tag
