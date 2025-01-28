const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Точка входа
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Выходной файл
    publicPath: '/', // Абсолютный путь что бы исправить ошибку: Ресурс с «http://localhost:8080/category/bundle.js» был заблокирован из-за несоответствия MIME-типа («text/html») (X-Content-Type-Options: nosniff).
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Для файлов .js
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // Для файлов .css
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Шаблон HTML
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Укажите путь к папке с вашими статическими файлами
    },
    port: 8080, // Порт сервера
    hot: true, // Включаем HMR
    historyApiFallback: true, // Решило проблему с роутингом react-router-dom
  },
  mode: 'development', // Режим разработки
};
