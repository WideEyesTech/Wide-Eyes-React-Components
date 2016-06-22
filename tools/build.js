/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import webpack from 'webpack';

import { buildConfig } from './webpack.config';

/**
 * Launches a development web server with "live reload" functionality -
 * synchronizing URLs, interactions and code changes across multiple devices.
 */
async function build() {
  return new Promise(resolve => {
    buildConfig.module.loaders
      .filter(x => x.loader === 'babel')
      .forEach(x => x.query = {
        presets: ['es2015', 'react'],
        plugins: [
          ['transform-async-to-generator'],
          ['transform-class-properties'],
          ['transform-decorators-legacy']
        ]
      });

    const bundler = webpack(buildConfig);
    bundler.run(resolve);
  });
}

export default build;
