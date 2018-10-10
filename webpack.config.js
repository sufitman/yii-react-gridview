const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = [{
  mode: 'none',
  context: `${__dirname}/src`,
  entry: {
    'yii-react-gridview': './GridView.js',
    'yii-react-gridview.min': './GridView.js'
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
    library: 'YiiReactGridView',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      test: /\.min\.js$/
    })]
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
          presets: ['es2015', 'es2017', 'stage-2', 'react', 'flow']
        }
      }
    ]
  }
}];