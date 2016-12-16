'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
// const precss = require('precss');
const autoprefixer = require('autoprefixer');
// const path = require('path');
// const atImport = require('postcss-import');
// const hexRgba = require('postcss-hexrgba');
const combineLoaders = require('webpack-combine-loaders');

module.exports = {
	context: __dirname,

	entry: {
		index: [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://localhost:4000',
	    'webpack/hot/only-dev-server',
			__dirname + '/src/app/index'
		]
	},

	output: {
		path: __dirname + '/public/assets/',
		publicPath: '/assets',
		filename: '[name].js'
	},

	watch: NODE_ENV == 'development',

	watchOptions: {
		aggregateTimeout: 100,
		ignored: /node_modules/
	},

	devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,

	devServer: {
		contentBase: __dirname + '/public',
		historyApiFallback: false,
		inline: true,
		hot: true
	},

	resolve: {
		alias: {
			components: __dirname + '/src/app/components',
			containers: __dirname + '/src/app/containers',
			app: __dirname + '/src/app'
		},
		modulesDirectories: ['node_modules'],
		extensions: ['', '.js']
	},

	resolveLoader: {
		modulesDirectories: ['node_modules'],
		extensions: ['', '.js']
	},

	module: {
		loaders: [
			{
				test: /\.css?$/,
				loader: 'style!css'
			},
			{
				test: /\.sss?$/,
				exclude: /(node_modules|bower_components)/,
				loader: combineLoaders([
					{
						loader: 'style'
					},
					{
						loader: 'css',
						query: {
							sourceMap: true,
							modules: true,
							importLoaders: 1,
							localIdentName: "[local]__[hash:base64:5]"
						}
					},
					{
						loader: 'postcss',
						query: {
							parser: 'sugarss'
						}
					}
				])
			},
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: combineLoaders([
					{
						loader: 'react-hot-loader/webpack'
					},
					{
						loader: 'babel'
					},
					// {
					// 	loader: 'webpack-module-hot-accept'
					// }
				]),
				plugins: ['transform-runtime']
			},
			{
				test: /\.hjson$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'hjson'
			},
			{
				test: /\.json$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'json'
			},
			{
				test: /\.(gif|png|jpg|svg|woff|ttf|eot|woff2)$/,
				include: /\/node_modules\//,
				// loader: 'file?name=[1].[ext]&regExp=node_modules/(.*)'
				loader: 'url?limit=10000&name=[path][name].[ext]'
			},
			// assets exclude modules
			{
				test: /\.(gif|png|jpg|svg|woff|ttf|eot|woff2)$/,
				exclude: /\/node_modules\//,
				loader: 'url?limit=10000&name=[path][name].[ext]'
			},
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV)
		}),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: "common"
		// })
	],

	postcss: () => {
		return [
			require('autoprefixer'),
			require('postcss-inline-comment'),
			require('postcss-import'),
			require('postcss-hexrgba'),
			require('postcss-inline-svg'),
			require('precss')
		]
	}
}


if (NODE_ENV == 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: true
			}
		})
	)
}
