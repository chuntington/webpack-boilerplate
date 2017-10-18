const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const glob = require('glob');
const webpack = require('webpack');
const path = require('path');

const pages = glob.sync('./src/pages/**/');

// Todo: Linting

const minifyHtmlOptions = {
	collapseWhitespace: true,
	removeComments: true,
	removeEmptyAttributes: true,
	removeOptionalTags: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true
};

const config = {
	entry: {},
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					// options: { presets: ['env'] }
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			Vue: 'vue',
			'window.Vue': 'vue',
			Popper: 'popper.js'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			minChunks: 2
		}),
		new ExtractTextPlugin({
			filename: 'css/[name].css',
			allChunks: true
		}),
		// new webpack.optimize.UglifyJsPlugin(),
		// new HtmlWebpackInlineSourcePlugin()
	],
	resolve: {
		alias: {
			// Change default to version with template interpolation
			vue: 'vue/dist/vue.js'
		}
	}
};

pages.forEach((match) => {
	let filename = match.substring('./src/pages/'.length);
	let name = '';

	if (match !== './src/pages/') {
		name = filename.substring(0, filename.length - 1).replace(/\//g, '.');
	} else {
		name = 'index';
	}

	config.entry[name] = match + 'index.js';
	config.plugins.push(new HtmlWebpackPlugin({
		chunks: ['common', name],
		filename: filename + 'index.html',
		inject: true,
		// inlineSource: name + '.(js)$',
		minify: minifyHtmlOptions,
		template: './src/pages/' + filename + 'index.html'
	}));
});

module.exports = config;