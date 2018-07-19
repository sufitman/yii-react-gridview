var webpack = require('webpack')

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
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react'
        })
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
        loaders: [
            {
                test: /\.js(x?)$/,
                include: /src/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}];