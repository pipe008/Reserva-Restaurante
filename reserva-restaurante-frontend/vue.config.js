const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    resolve: {
      fallback: {
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        stream: require.resolve('stream-browserify'),
        zlib: require.resolve('browserify-zlib'),
        os: require.resolve('os-browserify/browser'),
        url: require.resolve('url/'),
        buffer: require.resolve('buffer/'),
        process: require.resolve('process/browser'),
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      })
    ]
  }
}
