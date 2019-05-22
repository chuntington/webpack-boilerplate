require('dotenv').config();

const fs = require('fs');
const glob = require('glob');
const path = require('path');
const webpack = require('webpack');

const Autoprefixer = require('autoprefixer');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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

	addRule(rule) {
		this.config.module.rules.push(rule);

		return this;
	}

	configure() {
		this.setEntries()
			.setPlugins();
	}

	getHtmlOptions(page) {
		const filename = this.getFileName(page);
		const rootname = this.getRootName(page);
		const template = this.getTemplate(page);
		const name = this.getName(page);
		const title = this.getTitle(page);

		return { filename, rootname, name, template, title };
	}

	getFileName(page) {
		return page.substring(this.opts.source.length);
	}

	getName(page) {
		let name = '';

		if (page !== this.opts.source) {
			let filename = this.getFileName(page);
			name = filename.substring(0, filename.length - 1).replace(/\//g, '.');
		} else {
			name = 'index';
		}

		return name;
	}

	getRootName(page) {
		const filename = this.getFileName(page);

		return filename.split('/')[0];
	}

	getTemplate(page) {
		const filename = this.getFileName(page);
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
			this.addPlugin(new UglifyJsPlugin());
		}

		if (this.opts.lint) {
			this.addRule({
				enforce: 'pre',
				test: /\.vue$/,
				loader: 'eslint-loader',
				exclude: /(node_modules|bower_components)/
			});
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
};

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
						options: { presets: ['@babel/preset-env'] }
					}
				}, {
					test: /\.css$/,
					use: [
						'style-loader',
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								plugins: (process.env.PREFIX_CSS == 'true') ? [Autoprefixer()] : []
							}
						}
					]
				  }, {
					test: /\.scss$/,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: [
							'css-loader',
							{
								loader: 'postcss-loader',
								options: {
									plugins: (process.env.PREFIX_CSS == 'true') ? [Autoprefixer()] : []
								}
							},
							'sass-loader'
						]
					})
				}, {
					test: /\.(ttf|eot|otf|woff|woff2)$/,
					use: {
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/'
						}
					}
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
			new OptimizeCSSPlugin(),
			new VueLoaderPlugin(),
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
	lint: process.env.LINT_JS == 'true',
	minifyHtml: process.env.MINIFY_HTML == 'true',
	source: process.env.PAGE_SOURCE || './src/pages/',
	uglify: process.env.UGLIFY_JS == 'true'
});

module.exports = configurator.config;