import webpack from 'webpack';
import { watchConfig } from './webpack.config'
import WebpackDevServer from 'webpack-dev-server'

async function start() {
  return new Promise(resolve => {
    watchConfig.module.loaders
      .filter(x => x.loader === 'babel')
      .forEach(x => x.query = {
        presets: ['es2015', 'react'],
        plugins: [
          ['transform-async-to-generator'],
          ['transform-class-properties'],
          ['transform-decorators-legacy']
        ]
      });

    const server = new WebpackDevServer(webpack(watchConfig), {
      hot: true,
      stats: watchConfig.stats,
      publicPath: watchConfig.publicPath,
      contentBase: watchConfig.output.path
    });

    server.listen(3000, 'localhost');
  })
}

export default start;
