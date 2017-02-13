var fs = require('fs')
var path = require('path')
var webpack = require('webpack')

module.exports = {

	entry: path.resolve(__dirname, 'server.js'),

	output: {
		filename: 'server.bundle.js'
	},

	target: 'node',

	resolve: {
    // When require, do not have to add these extensions to file's name
		extensions: ['', '.js', '.jsx']
    // node_modules: ["web_modules", "node_modules"]  (Default Settings)
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}
		})
	],
  // keep node_module paths out of the bundle
	externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
		'react-dom/server'
	]).reduce(function (ext, mod) {
		ext[mod] = 'commonjs ' + mod
		return ext
	}, {}),

	node: {
		__filename: false,
		__dirname: false
	},

	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.css$/,
				loader: 'css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
			},
			{
				test: /\.oss$/,
				loaders: [
					'cssobjects',
					'postcss'
				]
			}
		]
	},

	postcss: () => {
		return [
			require('precss'),
			require('autoprefixer')
		]
	}
}
