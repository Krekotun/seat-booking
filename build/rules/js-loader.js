module.exports = {
	test: /\.js$/,
	use: [
		'react-hot-loader/webpack',
		{
			loader: 'babel-loader',
			options: {
				plugins: ['transform-runtime']
			}
		}
	]
}
