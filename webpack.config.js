const path = require('path');
//const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const public_path =path.resolve(__dirname, 'public')

module.exports = {
  mode: 'development', //or 'production'

  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'app.js'
  },

  
  devServer: {
    contentBase: public_path ,
    publicPath: '/public'
  },

  watchOptions: {
    ignored: ['public', 'node_modules']
  } ,



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
        use: [
          { loader: MiniCssExtractPlugin.loader ,    options: { publicPath: public_path }  },
          'css-loader'
        ]
      } ,

      {
        test: /\.scss$/,
        use: [
           MiniCssExtractPlugin.loader, //enstead default 'style-loader'
          'css-loader',
          'sass-loader',
        ],
      } ,
   
/*
      {
        test: /\.scss$/,
        use: [
        {
            loader: MiniCssExtractPlugin.loader, //enstead default 'style-loader'

        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader",
        }]
      },
*/
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

  optimization: {
    splitChunks: {
        cacheGroups: {
            js: {
                test: /\.js$/,
                name: "commons",
                chunks: "all",
                minChunks: 7,
            },
            css: {
                test: /\.(css|sass|scss)$/,
                name: "commons",
                chunks: "all",
                minChunks: 2,
            }
        }
    }
},

  plugins: [
    new MiniCssExtractPlugin({
      filename: "app.css",
    })
  ],

};
