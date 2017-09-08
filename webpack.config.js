
module.exports = {

  entry: './index.js',

  output: {
    path: __dirname + '/dist',
    publicPath: '/dist/',
    filename: 'bundle.js'
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: [
        /node_modules/
      ],
      use: [{
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            ['env', {'targets': { 'browsers': ['last 2 versions'] }}],
            'stage-2',
            'react'
          ]
        } 
      }]
    }]
  },

  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.jsx', '.json']
  },

  devtool: 'source-map',

  target: 'web',

};