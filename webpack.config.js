const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.tsx',  // Entry point utama
  output: {
    path: path.resolve(__dirname, 'dist'),  // Output path
    filename: 'bundle.js',  // Nama file hasil bundling
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',  // Template HTML yang akan digunakan
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx",".css"],    
  },
};
