module.exports = {
	test: /\.sss$/,
	exclude: /(node_modules|bower_components)/,
	use: [
		'style',
		{
			loader: 'css-loader',
			options: {
				sourceMap: true,
				modules: true,
				importLoaders: 1,
				localIdentName: "[local]__[hash:base64:5]"
			}
		},
		'postcss?parser=sugarss'
	]
},
