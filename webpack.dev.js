const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    popup: path.resolve(__dirname, 'src/extension/popup/index.tsx'),
    content: path.resolve(__dirname, 'src/extension/scripts/index.ts'),
    'service-worker': path.resolve(__dirname, 'src/extension/service-worker/index.ts'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist:dev'),
  },
  devServer: {
    hot: false,
    devMiddleware: {
      writeToDisk: true,
    },
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
    new HtmlWebpackPlugin({
      filename: 'popup.html',
      chunks: ['popup'],
      template: path.resolve(
        __dirname,
        'src/extension/popup/templates/index.html'
      ),
    }),
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
  ],
};
