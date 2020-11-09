require('dotenv').config();

const Path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
						configFile: './babel.config.js'
					}
				}
			}, {
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					},
					'postcss-loader'
				]
			}, {
				test: /\.(ttf|eot|otf|woff|woff2)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts/'
					}
				}
			}
		]
	},
	optimization: {
		minimize: !DevMode,
		minimizer: [
			new TerserPlugin({
				parallel: true,
				test: /\.js(\?.*)?$/i
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
		chunkFilename: (DevMode) ? '[name].js' : '[name].[hash].js',
		filename: (DevMode) ? '[name].js' : '[name].[hash].js',
		path: Path.resolve(__dirname, 'dist')
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: ['**/*']
		}),
		new ESLintWebpackPlugin({
			overrideConfigFile: './eslint.config.js'
		}),
		new MiniCssExtractPlugin({
			filename: (DevMode) ? '[name].css' : '[name].[hash].css',
			chunkFilename: (DevMode) ? '[id].css' : '[id].[hash].css',
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
			template: 'src/index.html'
		}),
		new CompressionWebpackPlugin()
	]
};
