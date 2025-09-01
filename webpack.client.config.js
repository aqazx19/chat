const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin} = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');
dotenv.config();
module.exports = (_env, argv) => {
  const isDev = argv.mode !== 'production';

  return {
    entry: path.resolve(__dirname, 'client/src/index.tsx'),
    output: {
      path: path.resolve(__dirname, 'client/dist'),
      filename: isDev ? 'js/bundle.js' : 'js/bundle.[contenthash:8].js',
      publicPath: '/',
      clean: true,
    },
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'cheap-module-source-map' : 'source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        '@client': path.resolve(__dirname, 'client/src'),
        '@server': path.resolve(__dirname, 'server/src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [require('tailwindcss'), require('autoprefixer')],
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|ico)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/[name][hash][ext]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'client/public/index.html'),
        minify: isDev ? false : { collapseWhitespace: true, removeComments: true },
      }),
      new DefinePlugin({
        'process.env.REACT_APP_API_URL': JSON.stringify(process.env.REACT_APP_API_URL)
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'client/public'),
            to: '.',
            noErrorOnMissing: true,
            globOptions: { ignore: ['**/index.html'] },
          },
        ],
      }),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'client/public'),
      },
      host: '0.0.0.0',
      allowedHosts: 'all',
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
      client: {
        overlay: true,
      },
      proxy: [
        {
          context: ['/api'],
          target: `http://localhost:${process.env.PORT || 4000}`,
          changeOrigin: true,
        },
      ],
      compress: false,
    },
  };
};


