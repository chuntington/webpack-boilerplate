const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const webpack = require('webpack');
const path = require('path');

// Todo: Linting, Piece extraction for MPA

const minifyHtml = {
    collapseWhitespace: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true
};

const config = {
    entry: {
        index: './src/pages/index.js'
    },
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
                    // options: {
                    //     presets: ['env']
                    // }
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
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/common.js'
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackInlineSourcePlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['common', 'index'],
            filename: 'index.html',
            template: './src/pages/index.html',
            inlineSource: 'index.(js|css)$',
            minify: minifyHtml
        })
    ],
    resolve: {
        alias: {
            // Change default to version with template interpolation
            vue: 'vue/dist/vue.js'
        }
    }
};

const pages = [{
    name: 'about',
    filename: 'about',
    entry: 'about/index.js',
    template: 'about/index.html'
}];

pages.forEach((page) => {
    config.entry[page.name] = './src/pages/' + page.entry;
    config.plugins.push(
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['common', page.name],
            filename: page.filename + '/index.html',
            template: './src/pages/' + page.template,
            inlineSource: page.name + '.(js|css)$',
            minify: minifyHtml
        })
    );
});

module.exports = config;