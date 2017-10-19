const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const glob = require('glob');
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const pages = glob.sync('./src/pages/**/');

// Todo: Linting

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
			}, {
				test: /\.ejs$/,
				use: {
					loader: 'ejs-compiled-loader'
				}
			}, {
				test: /\.vue$/,
				use: {
					loader: 'vue-loader'
				}
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
			Popper: 'popper.js',
			_: 'underscore'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			minChunks: 2
		}),
		new ExtractTextPlugin({
			filename: 'css/[name].[hash].css',
			allChunks: true
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new HtmlWebpackInlineSourcePlugin()
	],
	resolve: {
		alias: {
			// Change default to version with template interpolation
			vue: 'vue/dist/vue.js'
		}
	}
};

const minifyHtmlOptions = {
	collapseWhitespace: true,
	removeComments: true,
	removeEmptyAttributes: true,
	removeOptionalTags: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true
};

pages.forEach((match) => {
	let filename = match.substring('./src/pages/'.length);
	let rootname = filename.split('/')[0];
	let template = './src/pages/' + filename + 'index.ejs';
	let name = '';

	if (!fs.existsSync(template)) {
		template = './src/layouts/master.ejs'
	}

	if (match !== './src/pages/') {
		name = filename.substring(0, filename.length - 1).replace(/\//g, '.');
	} else {
		name = 'index';
	}

	let titleTerms = name.split('.');
	let title = titleTerms.reduce((sum, value, index) => {
		if (!index) {
			return sum += value.charAt(0).toUpperCase() + value.slice(1) + ' - ';
		}
		return sum += value.charAt(0).toUpperCase() + value.slice(1);
	}, '');

	config.entry[name] = match + 'index.js';
	config.plugins.push(new HtmlWebpackPlugin({
		appMountId: 'app',
		// need `name` for embedding js
		// need `rootname` for embedding css - except it embeds root js, too
		chunks: ['common', name, rootname],
		chunksSortMode: 'dependency',
		favicon: './src/favicon.ico',
		filename: filename + 'index.html',
		inject: true,
		// inlineSource: name + '.(css|js)$',
		minify: minifyHtmlOptions,
		mobile: true,
		options: {
			googleAnalytics: {
				pageViewOnLoad: true,
				trackingId: 1
			}
		},
		template: template,
		title: title,
		unsupportedBrowser: true
	}));
});

module.exports = config;