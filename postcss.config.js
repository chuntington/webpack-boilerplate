const EasingGradients = require('postcss-easing-gradients');
const FontMagician = require('postcss-font-magician');
const PostcssAdvancedVariables = require('postcss-advanced-variables');
const PostcssImport = require('postcss-import');
const Purgecss = require('@fullhuman/postcss-purgecss');
const StyleLint = require('stylelint');
const Tailwindcss = require('tailwindcss');
const TailwindcssNesting = require('tailwindcss/nesting');

const DevMode = process.env.NODE_ENV === 'development';

module.exports = {
	plugins: [
		StyleLint({
			configFile: './stylelint.config.js'
		}),
		PostcssImport(),
		TailwindcssNesting(),
		Tailwindcss('./tailwindcss.config.js'),
		PostcssAdvancedVariables(),
		EasingGradients({
			alphaDecimals: 4,
			colorMode: 'lrgb',
			colorStops: 12
		}),
		FontMagician({
			display: 'swap',
			foundries: ['google']
		}),
		(!DevMode)
			? Purgecss({
				content: ['./src/**/*.{html,js}'],
				defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
				safelist: ['active', 'exact-active']
			})
			: ''
	]
};
