const Autoprefixer = require('autoprefixer');
const CssNano = require('cssnano');
const EasingGradients = require('postcss-easing-gradients');
const FontMagician = require('postcss-font-magician');
const PostcssPresetEnv = require('postcss-preset-env');
const Purgecss = require('@fullhuman/postcss-purgecss');
const StyleLint = require('stylelint');
const Tailwindcss = require('tailwindcss');

const DevMode = process.env.NODE_ENV === 'development';

module.exports = {
	plugins: [
		StyleLint({
			configFile: './stylelint.config.js'
		}),
		Tailwindcss('./tailwindcss.config.js'),
		PostcssPresetEnv({
			autoprefixer: {
				grid: true
			},
			stage: 1,
			features: {
				'color-mod-function': {
					unresolved: 'warn'
				},
				'nesting-rules': true
			}
		}),
		EasingGradients({
			alphaDecimals: 4,
			colorMode: 'lrgb',
			colorStops: 12
		}),
		FontMagician({
			foundries: ['google']
		}),
		(!DevMode)
			? Purgecss({
				content: ['./src/index.html'],
				defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
				whitelist: ['active', 'exact-active']
			})
			: '',
		(!DevMode)
			? CssNano({
				preset: ['default', {
					discardComments: {
						removeAll: true
					}
				}]
			})
			: ''
	]
};
