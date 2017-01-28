const combineLoaders = require('webpack-combine-loaders');

module.exports = {
	test: /\.js$/,
	exclude: /(node_modules|bower_components)/,
	loader: combineLoaders([
		{
			loader: 'react-hot-loader/webpack'
		},
		{
			loader: 'babel'
		},
	]),
	plugins: ['transform-runtime']
}
