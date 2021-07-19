const HtmlWebpackPlugin = require('html-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // {
          //   loader: 'style-loader',
          // },
          {
            loader: 'css-loader',
            options: {
              url: false,
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.svg|ttf|woff2|woff|eot$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              encoding: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new InjectManifest({
      swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          globOptions: {
            ignore: ['**/images/**'],
          },
        },
      ],
    }),
    new WebpackPwaManifest({
      filename: 'manifest.json',
      fingerprints: false,
      inject: true,
      name: 'Restaurant Apps Starter Project (Restopedia)',
      short_name: 'Restopedia',
      description: 'Apps about rating restaurant recommendation',
      start_url: './index.html',
      display: 'standalone',
      background_color: '#F7FBFC',
      theme_color: '#b9d7ea',
      icons: [
        {
          src: path.resolve('src/public/images/icons/icon.png'),
          sizes: [64, 96, 128, 192, 256, 384, 512], // multiple sizes
          destination: path.join('src', 'public', 'images', 'icons', 'android'),
          purpose: 'any maskable',
        },
        {
          src: path.resolve('src/public/images/icons/icon.png'),
          sizes: [120, 152, 167, 180, 1024], // multiple sizes
          destination: path.join('src', 'public', 'images', 'icons', 'ios'),
          ios: true,
          purpose: 'any maskable',
        },
        {
          src: path.resolve('src/public/images/icons/icon.png'),
          sizes: 1024,
          destination: path.join('src', 'public', 'images', 'icons', 'ios'),
          ios: 'startup',
          purpose: 'any maskable',
        },
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
  ],
};
