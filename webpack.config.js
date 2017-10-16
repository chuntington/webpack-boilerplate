const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const webpack = require('webpack');
const path = require('path');

// Todo: Linting, Piece extraction for MPA

const config = {
    entry: './src/js/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['env']
                    // }
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
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
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('css/index.css', { allChunks: true }),
        new HtmlWebpackPlugin(
            {
                template: './src/index.html',
                favicon: './src/favicon.ico',
                // Might be bad practice to inline css because it's uncacheable, but it's an option
                inlineSource: '.js$',
                minify: {
                    collapseWhitespace: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                }
            }
        ),
        new HtmlWebpackInlineSourcePlugin()
    ],
    resolve: {
        alias: {
            // Change default to version with template interpolation
            vue: 'vue/dist/vue.js'
        }
    }
};

module.exports = config;