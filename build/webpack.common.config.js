const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');

const isDev = () =>
	NODE_ENV === 'development'

const isProd = () =>
	NODE_ENV === 'production'

const cssLoader = require('./loaders/css-loader')
const stylusLoader = require('./loaders/stylus-loader')
const jsLoader = require('./loaders/js-loader')
const jsonLoader = require('./loaders/json-loader')
const assetsLoader = require('./loaders/assets-loader')

module.exports = {
	context: __dirname,

	output: {
		path: path.resolve(__dirname, '../public/assets/'),
		publicPath: '/assets/',
		filename: '[name].js'
	},

	devtool: false,

	resolve: {
		alias: {
			components: path.resolve(__dirname, '../src/app/components'),
			containers: path.resolve(__dirname, '../src/app/containers'),
			app: path.resolve(__dirname, '../src/app'),
			store: path.resolve(__dirname, '../src/app/store')
		},
		modulesDirectories: ['node_modules'],
		extensions: ['', '.js']
	},

	module: {
		loaders: [
			cssLoader,
			stylusLoader,
			jsLoader,
			jsonLoader,
			assetsLoader
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
		    NODE_ENV: JSON.stringify(NODE_ENV)
		  }
		})
	]
}
