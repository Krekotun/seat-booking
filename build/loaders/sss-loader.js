const combineLoaders = require('webpack-combine-loaders');

module.exports = {
	test: /\.sss$/,
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
