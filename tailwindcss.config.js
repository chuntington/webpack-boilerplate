const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
	'plugins': [
		plugin(require('./plugins/buttons.js')),
		plugin(require('./plugins/cards.js')),
		plugin(require('./plugins/headings.js')),
		plugin(require('./plugins/inputs.js')),
		plugin(require('./plugins/labels.js')),
		plugin(require('./plugins/layout.js')),
		plugin(require('./plugins/modals.js'))
	],
	'content': ['./src/**/*.{html,js}'],
	'theme': {
		'extend': {
			'backgroundSize': {
				'x-only': '100% 0',
				'full': '100% 100%'
			},
			'fontFamily': {
				'sans': [
					'"Quicksand"',
					...defaultTheme.fontFamily.sans
				]
			},
			'scale': {
				'25': '.25'
			}
		}
	}
};
