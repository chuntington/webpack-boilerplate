require('dotenv').config();

const Path = require('path');

const Browserslist = require('browserslist');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LightningCss = require('lightningcss');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const DevMode = process.env.NODE_ENV === 'development';

module.exports = {
	entry: Path.resolve(__dirname, 'src/js/main.js'),
	mode: process.env.NODE_ENV,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'swc-loader'
				}
			}, {
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: ''
						}
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								config: './postcss.config.js'
							}
						}
					}
				]
			}, {
				test: /\.(ttf|eot|otf|woff|woff2)$/,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[hash][ext][query]'
				}
			}
		]
	},
	optimization: {
		minimize: !DevMode,
		minimizer: [
			new TerserPlugin({
				minify: TerserPlugin.swcMinify,
				parallel: true,
				terserOptions: {
					compress: {
						unused: true
					},
					mangle: true
				},
				test: /\.js(\?.*)?$/i
			}),
			new CssMinimizerPlugin({
				minify: CssMinimizerPlugin.lightningCssMinify,
				minimizerOptions: {
					targets: LightningCss.browserslistToTargets(Browserslist('> 1%, last 2 versions'))
				}
			})
		],
		splitChunks: {
			cacheGroups: {
				vendors: {
					chunks: 'all',
					enforce: true,
					test: /[\\/]node_modules[\\/]/
				}
			}
		}
	},
	output: {
		clean: true,
		chunkFilename: (DevMode) ? '[name].js' : '[name].[fullhash].js',
		filename: (DevMode) ? '[name].js' : '[name].[fullhash].js',
		path: Path.resolve(__dirname, 'dist')
	},
	plugins: [
		new ESLintWebpackPlugin({
			overrideConfigFile: './eslint.config.js'
		}),
		new MiniCssExtractPlugin({
			filename: (DevMode) ? '[name].css' : '[name].[fullhash].css',
			chunkFilename: (DevMode) ? '[id].css' : '[id].[fullhash].css'
		}),
		new HtmlWebpackPlugin({
			favicon: 'src/favicon.ico',
			filename: 'index.html',
			minify: {
				collapseWhitespace: !DevMode,
				quoteCharacter: '"',
				removeComments: !DevMode,
				removeEmptyAttributes: !DevMode,
				removeRedundantAttributes: !DevMode,
				removeScriptTypeAttributes: !DevMode,
				removeStyleLinkTypeAttributes: !DevMode,
				sortAttributes: !DevMode,
				useShortDoctype: !DevMode
			},
			publicPath: '/',
			template: 'src/index.html'
		}),
		(!DevMode)
			? new CompressionWebpackPlugin({
				filename: '[path][base].gz',
				algorithm: 'gzip',
				test: /\.(js|css|html)$/
			})
			: { apply() {} },
		(!DevMode)
			? new CompressionWebpackPlugin({
				filename: '[path][base].br',
				algorithm: 'brotliCompress',
				test: /\.(js|css|html|svg)$/
			})
			: { apply() {} }
	]
};
