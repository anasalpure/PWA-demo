const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development', //or 'production'
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'app.js'
  },

  
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/public'
  },



  module: {

    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },



      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
 
      },

      {
        test: /\.scss$/,
        use: [
        {
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader",
        }]
      },

      {
        test: /\.html$/,
        use: [
          { loader: "html-loader" }
        ]
      } ,

      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: 'file-loader',
      },


    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "anas.css",
    })
  ],



};
