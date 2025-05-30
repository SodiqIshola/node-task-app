
const path = require('path');

module.exports = {
  target: 'node', // For Node.js apps using Express
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // Excludes express and other node_modules
        use: {
          loader: 'esbuild-loader',
          options: { target: 'es2015' }
        }
      }
    ]
  }
};

