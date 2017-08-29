const merge = require('webpack-merge');
const {
  optimize: { CommonsChunkPlugin }
} = require('webpack');
const ExtractText = require('extract-text-webpack-plugin');

const { dependencies } = require('./package.json');
const config = require('./webpack.config');

module.exports = merge(config, {
  entry: {
    vendors: Object.keys(dependencies)
  },

  output: {
    filename: '[name].[hash].js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractText.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
    ]
  },

  plugins: [
    new ExtractText('styles.[hash].css'),

    new CommonsChunkPlugin({
      name: 'vendors',
      minChunks: Infinity
    })
  ]
});
