/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import merge from 'lodash.merge'
import path from 'path'
import webpack from 'webpack'

const DEBUG = !process.argv.includes('--release')
const VERBOSE = process.argv.includes('--verbose')
const GLOBALS = {
  'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
  __DEV__: DEBUG
}

//
// Common configuration chunk to be used for both
// client-side (client.js) and server-side (server.js) bundles
// -----------------------------------------------------------------------------

const config = {
  cache: DEBUG,
  debug: DEBUG,

  stats: {
    colors: true,
    hash: VERBOSE,
    timings: true,
    reasons: DEBUG,
    chunks: VERBOSE,
    cached: VERBOSE,
    version: VERBOSE,
    chunkModules: VERBOSE,
    cachedAssets: VERBOSE
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ],

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json'],
    root: [path.join(__dirname, '../lib')]
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$|\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }, {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader'
      }
    ]
  },

  postcss: function plugins (webpack) {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('precss'),
      require('postcss-cssnext')
    ]
  }
}

//
// Configuration for the client-side bundle (client.js)
// -----------------------------------------------------------------------------

export const buildConfig = merge({}, config, {
  entry: path.join(__dirname, '../lib/index.jsx'),
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '../dist')
  },
  externals: {
    React: 'react',
    cn: 'classnames'
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: VERBOSE
      }
    })
  ]
})

export const watchConfig = merge({}, config, {
  entry: path.join(__dirname, '../build/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../build')
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
})
