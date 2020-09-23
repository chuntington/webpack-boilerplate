const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
	'future': {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	},
	'purge': false,
	'theme': {
		'extend': {
			'fontFamily': {
				'sans': [
					'"Quicksand"',
					...defaultTheme.fontFamily.sans
				]
			},
			'rotate': {
				'10': '10deg'
			},
			'screens': {
				'xxl': '1440px'
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
					'both mandatory': 'both mandatory',
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
		'display': ['responsive', 'hover', 'focus', 'group-hover', 'group-focus', 'group-active'],
		'rotate': ['responsive', 'hover', 'focus', 'active'],
		'textColor': ['responsive', 'hover', 'focus', 'group-hover', 'group-focus']
	},
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
	]
};
