var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports ={

  entry:{
    index:'./dev/index.js'
  },
  output:{
    path:path.resolve(__dirname,'build'),
		filename:'[name].js',
		publicPath:'/'
  },

	module:{
		rules:[
			{
				test:/\.scss$/,
				use: ['style-loader','css-loader','sass-loader']

			},
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use : [{
					loader:'babel-loader',
					options:{
						presets: ['es2015','react']
					}
				}]
			},
			{
				test:/\.html$/,
				use : 'html-loader'
			},
			{
				test:/\.(jpg|png)$/,
				use : [{
					loader:'file-loader',
					options:{
						name:'[name].[ext]',
						outputPath:'imgs/',			//default in output:{path:''}
						//publicPath:'imgs/'
					}
				}]
			}

		]
	},
  devServer:{
    contentBase: "./build",  //  file location on disk
  	inline: true,
  	hot: false,
  	port: 8080,
		stats: "errors-only",
		historyApiFallback:true
	},
  plugins: [
        new HtmlWebpackPlugin({
            template: 'dev/index.html'
        }),
		new CleanWebpackPlugin(['build/*.*'])/*,
		 
		new webpack.ProvidePlugin({
		  $: 'jquery',
		  jQuery: 'jquery'
		})*/
	],


		//'react-dom': 'reactDOM'
		//'react': 'react'

	externals : {
		//jquery: 'jquery'
	},
  resolve:{
    alias:{
      '-rootPath-':path.resolve(__dirname,'dev')
    }
  }

}

