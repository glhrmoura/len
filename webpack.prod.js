const path = require('path');
const ZipPlugin = require('zip-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: false,
  entry: {
    'service-worker': path.resolve(__dirname, 'src/extension/background/service-worker.ts'),
    'dom-listener': path.resolve(__dirname, 'src/extension/content-scripts/dom-listener.ts'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist:prod/src'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
        exclude: /node_modules/,
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/images',
            },
          },
        ],
      },

      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: ['url-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@popup': path.resolve(__dirname, 'src/extension/popup'),
    },
  },
  plugins: [
    /* new HtmlWebpackPlugin({
      filename: 'popup.html',
      chunks: ['popup'],
      template: path.resolve(
        __dirname,
        'src/extension/popup/templates/index.html'
      ),
    }), */
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/extension/manifest.json'),
        },
        {
          from: path.resolve(__dirname, 'src/extension/assets'),
        },
      ],
    }),
    new ZipPlugin({
      filename: 'len.zip',
      path: path.resolve(__dirname, 'dist:prod'),
    }),
  ],
};
