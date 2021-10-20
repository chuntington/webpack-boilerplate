const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
	'darkMode': false,
	'plugins': [
		plugin(require('./plugins/aspect-ratios.js')),
		plugin(require('./plugins/buttons.js')),
		plugin(require('./plugins/cards.js')),
		plugin(require('./plugins/embeds.js')),
		plugin(require('./plugins/headings.js')),
		plugin(require('./plugins/inputs.js')),
		plugin(require('./plugins/interactions.js')),
		plugin(require('./plugins/labels.js')),
		plugin(require('./plugins/layout.js')),
		plugin(require('./plugins/scrolls.js'))
	],
	'mode': 'jit',
	'purge': [
		// './dist/**/*.html',
		'./src/**/*.{html,js,vue}',
	],
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
				'25': '.25',
			},
			'scrollBehavior': {
				'auto' : 'auto',
				'inherit' : 'inherit',
				'initial' : 'initial',
				'smooth' : 'smooth',
				'unset' : 'unset'
			},
			'scrollSnap': {
				'alignments': {
					'center': 'center',
					'end': 'end',
					'inherit': 'inherit',
					'initial': 'initial',
					'none': 'none',
					'start': 'start',
					'unset': 'unset'
				},
				'stops': {
					'always': 'always',
					'normal': 'normal'
				},
				'types': {
					'block': 'block',
					'inline': 'inline',
					'inherit': 'inherit',
					'initial': 'initial',
					'none': 'none',
					'unset': 'unset',
					'both': 'both',
					'both-mandatory': 'both mandatory',
					'x': 'x',
					'x-mandatory': 'x mandatory',
					'x-proximity': 'x proximity',
					'y': 'y',
					'y-mandatory': 'y mandatory',
					'y-proximity': 'y proximity'
				}
			}
		}
	},
	'variants': {
		'extend': {
			'display': ['responsive', 'hover', 'focus', 'group-hover', 'group-focus', 'group-active'],
			'rotate': ['active'],
			'textColor': ['responsive', 'hover', 'focus', 'group-hover', 'group-focus']
		}
	}
};
