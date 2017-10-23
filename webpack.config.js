require('dotenv').config();

const CompressionWebpackPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const glob = require('glob');
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

// Todo: Linting

class Configurator {
	constructor(opts = {}) {
		this.opts = opts;
		this.config = this.opts.baseConfig || {};
		this.pages = glob.sync(this.opts.source + '**/');

		if (this.opts.autoConfigure) {
			this.configure();
		}
	}

	addPlugin(plugin) {
		this.config.plugins.push(plugin);

		return this;
	}

	configure() {
		this.setEntries()
			.setPlugins();
	}

	getHtmlOptions(page) {
		const filename = this.getFilename(page);
		const rootname = this.getRootname(page);
		const template = this.getTemplate(page);
		const name = this.getName(page);
		const title = this.getTitle(page);

		return { filename, rootname, name, template, title };
	}

	getFilename(page) {
		return page.substring(this.opts.source.length);
	}

	getName(page) {
		let name = '';

		if (page !== this.opts.source) {
			let filename = this.getFilename(page);
			name = filename.substring(0, filename.length - 1).replace(/\//g, '.');
		} else {
			name = 'index';
		}

		return name;
	}

	getRootname(page) {
		const filename = this.getFilename(page);

		return filename.split('/')[0];
	}

	getTemplate(page) {
		const filename = this.getFilename(page);
		let template = this.opts.source + filename + 'index.ejs';

		if (!fs.existsSync(template)) {
			template = './src/layouts/master.ejs'
		}

		return template;
	}

	getTitle(page) {
		const name = this.getName(page);

		return name.split('.').reduce((sum, value, index) => {
			return sum += value.charAt(0).toUpperCase() + value.slice(1) + ((!index) ? ' - ' : '');
		}, '');
	}

	setEntries() {
		this.pages.forEach((page) => {
			const name = this.getName(page);

			this.config.entry[name] = page + 'index.js';
		});

		return this;
	}

	setPlugins() {
		const plugins = this.pages.map((page) => {
			const pageOptions = this.getHtmlOptions(page);

			// Note: I'm not entirely convinced auto-injecting assets is realistic
			return new HtmlWebpackPlugin({
				appMountId: 'app',
				chunks: ['common', pageOptions.name],
				chunksSortMode: 'dependency',
				favicon: this.opts.source + 'favicon.ico',
				filename: pageOptions.filename + 'index.html',
				googleAnalytics: this.opts.googleAnalytics || null,
				inject: true,
				inlineSource: (this.opts.inlineSource) ? pageOptions.name + '.(css|js)$' : false,
				minify: this.opts.htmlMinify,
				mobile: true,
				template: pageOptions.template,
				title: pageOptions.title,
				unsupportedBrowser: true
			})
		});

		plugins.forEach((plugin) => this.addPlugin(plugin));

		if (this.opts.uglify) {
			this.addPlugin(new webpack.optimize.UglifyJsPlugin());
		}

		if (this.opts.inlineSource) {
			this.addPlugin(new HtmlWebpackInlineSourcePlugin());
		}

		if (this.opts.gzip) {
			this.addPlugin(
				new CompressionWebpackPlugin({
					asset: '[path].gz[query]',
					algorithm: 'gzip',
					test: new RegExp('\\.(js|css)$'),
					threshold: 10240,
					minRatio: 0.8
				})
			)
		}

		return this;
	}
}

const configurator = new Configurator({
	autoConfigure: true,
	baseConfig: {
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
				}, {
					test: /\.css$/,
					use: ['css-loader']
				}, {
					test: /\.scss$/,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: ['css-loader', 'sass-loader']
					})
				}, {
					test: /\.ejs$/,
					use: ['ejs-compiled-loader']
				}, {
					test: /\.vue$/,
					use: ['vue-loader']
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
				filename: 'css/[name].css',
				allChunks: true
			}),
			new OptimizeCSSPlugin()
		],
		resolve: {
			alias: {
				// Change default to version with template interpolation
				vue: 'vue/dist/vue.js'
			}
		}
	},
	googleAnalytics: {
		pageViewOnLoad: true,
		trackingId: process.env.GA_TRACKING_CODE
	},
	gzip: process.env.GZIP == 'true',
	htmlMinify: {
		collapseWhitespace: process.env.COLLAPSE_WHITE_SPACE == 'true',
		removeComments: process.env.REMOVE_COMMENTS == 'true',
		removeEmptyAttributes: process.env.REMOVE_EMPTY_ATTRS == 'true',
		removeOptionalTags: true,
		removeRedundantAttributes: true,
		removeScriptTypeAttributes: true,
		removeStyleLinkTypeAttributes: true
	},
	inlineSource: process.env.INLINE_SOURCE == 'true',
	minifyHtml: process.env.MINIFY_HTML == 'true',
	source: process.env.PAGE_SOURCE || './src/pages/',
	uglify: process.env.UGLIFY_JS == 'true'
});

module.exports = configurator.config;