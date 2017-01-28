const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');

// loaders
const cssLoader = require('./rules/css-loader')
const stylusLoader = require('./rules/stylus-loader')
const jsLoader = require('./rules/js-loader')
const assetsLoader = require('./rules/assets-loader')

module.exports = {
	context: __dirname,

	output: {
		path: path.resolve(__dirname, '../public/assets/'),
		publicPath: '/assets/',
		filename: '[name].js'
	},

	resolve: {
		alias: {
			components: path.resolve(__dirname, '../src/app/components'),
			containers: path.resolve(__dirname, '../src/app/containers'),
			app: path.resolve(__dirname, '../src/app'),
			store: path.resolve(__dirname, '../src/app/store')
		},
		modules: ['node_modules'],
		unsafeCache: true
	},

	module: {
		rules: [
			cssLoader,
			stylusLoader,
			jsLoader,
			assetsLoader
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
		    NODE_ENV: JSON.stringify(NODE_ENV)
		  }
		})
	]
}
