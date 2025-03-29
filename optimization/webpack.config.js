const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: "production",
  entry: "./src/index.js", 
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", 
    clean:true,
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename:'styles.css',
    }),
  ],

  module: {
    rules: [
        {
            test:  /\.css$/,
            use: [MiniCssExtractPlugin.loader,'css-loader']
        }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()],
    
  }
};