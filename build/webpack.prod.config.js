const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config')
const path = require('path');

const index = path.resolve(__dirname, '../src/app/index');

const config = {
	entry: { index },

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: true
			}
		})
	]
}

module.exports = merge(commonConfig, config)
