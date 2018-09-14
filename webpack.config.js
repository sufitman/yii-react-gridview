var webpack = require('webpack');

module.exports = [{
  context: `${__dirname}/src`,
  entry: {
    javascript: './GridView.js'
  },
  output: {
    filename: 'yii-react-gridview.js',
    path: `${__dirname}/dist`,
    library: 'YiiReactGridView',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true
    // })
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
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
        umd: 'react-dom',
      },
      'prop-types': {
        root: 'PropTypes',
        commonjs2: 'prop-types',
        commonjs: 'prop-types',
        amd: 'prop-types',
        umd: 'prop-types',
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
          presets: ['es2017', 'stage-2', 'react']
        }
      }
    ]
  }
}];