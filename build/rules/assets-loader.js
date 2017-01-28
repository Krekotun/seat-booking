module.exports = {
	test: /\.(gif|png|jpg|svg|woff|ttf|eot|woff2)$/,
	use: [
		{
			loader: 'url-loader',
			options: {
				limit: 10000,
				name: '[path][name].[ext]'
			}	
		}
	]
}
