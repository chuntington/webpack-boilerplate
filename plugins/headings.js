module.exports = function({ addUtilities, theme }) {
	const fontFamily = theme('fontFamily', {});
	const fontSize = theme('fontSize', {});
	const fontWeight = theme('fontWeight', {});
	const lineHeight = theme('lineHeight', {});
	const screens = theme('screens', {});

	addUtilities({
		'h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6': {
			'fontFamily': fontFamily['serif'].join(','),
			'fontWeight': fontWeight['bold']
		},
		'h1, .h1': {
			'fontSize': fontSize['4xl'],
			'lineHeight': lineHeight['tight']
		},
		'h2, .h2': {
			'fontSize': fontSize['3xl'],
			'lineHeight': lineHeight['tight']
		},
		'h3, .h3': {
			'fontSize': fontSize['2xl'],
			'lineHeight': lineHeight['tight']
		},
		'h4, .h4': {
			'fontSize': fontSize['xl']
		},
		'h5, .h5': {
			'fontSize': fontSize['lg']
		},
		'h6, .h6': {
			'fontSize': fontSize['base']
		},
		[`@media(min-width: ${ screens['md'] })`]: {
			'h1, .h1': {
				'fontSize': fontSize['5xl']
			},
			'h2, .h2': {
				'fontSize': fontSize['4xl']
			},
			'h3, .h3': {
				'fontSize': fontSize['3xl']
			},
			'h4, .h4': {
				'fontSize': fontSize['2xl']
			},
			'h5, .h5': {
				'fontSize': fontSize['xl']
			},
			'h6, .h6': {
				'fontSize': fontSize['lg']
			}	
		}
	});
};
