module.exports = {
	test: /\.(gif|png|jpg|svg|woff|ttf|eot|woff2)$/,
	loader: 'url?limit=10000&name=[path][name].[ext]'
}
