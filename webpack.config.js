const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const {
    optimize: { CommonsChunkPlugin }
} = require('webpack');

const { dependencies } = require('./package.json');

module.exports = {
    entry: {
        app: './',
        vendors: Object.keys(dependencies)
    },

    context: resolve(__dirname, 'src'),

    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: resolve(__dirname, 'src'),
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['env', {modules: false}],
                        'react'
                    ]
                }
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },

    plugins: [
        new HtmlPlugin({
            title: 'Webpack Workshop'
        }),

        new CommonsChunkPlugin({
            name: 'vendors',
            minChunks: Infinity
        })
    ]
};