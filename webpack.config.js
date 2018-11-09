const webpack = require('webpack');

module.exports = [{
  mode: 'none',
  context: `${__dirname}/src`,
  entry: {
    'GridView': './GridView.js'
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
    library: 'YiiReactGridView',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react'
    }),
  ],
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
        umd: 'react',
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
        umd: 'react-dom',
      },
    }
  ],
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        include: /src/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/react', '@babel/flow'],
          plugins: [
            ["@babel/plugin-proposal-decorators", { "legacy": true }],
            "@babel/plugin-proposal-function-sent",
            "@babel/plugin-proposal-export-namespace-from",
            "@babel/plugin-proposal-numeric-separator",
            "@babel/plugin-proposal-throw-expressions",
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-syntax-import-meta",
            ["@babel/plugin-proposal-class-properties", { "loose": false }],
            "@babel/plugin-proposal-json-strings"

          ]
        }
      }
    ]
  }
}];