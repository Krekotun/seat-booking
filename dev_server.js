var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
	contentBase: __dirname + '/public',
  hot: true,
	stats: {
		assets: false,
		colors: true,
		version: false,
		hash: false,
		chunkModules: false
	}
}).listen(4000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:4000/');
});
