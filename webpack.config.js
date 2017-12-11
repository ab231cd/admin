//node代码
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry: {
//		login: './src/js/login.js',
		'index': './src/js/index.js',
//		'test': './src/js/test/test.js',
		'test/table': './src/js/test/table.js',
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		//publicPath: "/css",
		filename: "js/[name].js"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								//minimize: true //css压缩
							}
						}
					]
				})
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							publicPath:'../',
							name: 'css/fonts/[name].[ext]'
						}
					}
				]
				
			},
			{
				test: /\.(png|jpg|gif|bmp)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							publicPath:'../../',
							name: '[name].[ext]',
							useRelativePath:true
						}
					}
				]

			},
			{
				test: require.resolve('jquery'),
				use: [{
					loader: 'expose-loader',
					options: 'jQuery'
				}, {
					loader: 'expose-loader',
					options: '$'
				}]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin(
			{
				filename: function (getPath) {
					return getPath('css/[name].css');
					//return getPath('[name].css').replace('css', 'css');
				},
				allChunks: true
			}
		),
//		new webpack.optimize.UglifyJsPlugin({
//			output: {
//				comments: false,  // remove all comments
//			},
//			compress: {
//				warnings: false,
//				//drop_console: false,
//			}
//		})
	]
};

