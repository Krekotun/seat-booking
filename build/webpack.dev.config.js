const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config')
const path = require('path')

const index = [
	'react-hot-loader/patch',
	'webpack-dev-server/client?http://localhost:4000',
	'webpack/hot/only-dev-server',
	path.resolve(__dirname, '../src/app/index')
]

const config = {
	entry: { index },

	watch: true,

	watchOptions: {
		aggregateTimeout: 100,
		ignored: /node_modules/
	},

	devtool: 'cheap-inline-module-source-map',

	devServer: {
		contentBase: __dirname + '/public',
		historyApiFallback: true,
		inline: true,
		hot: true
	},
}


module.exports = merge(commonConfig, config)
