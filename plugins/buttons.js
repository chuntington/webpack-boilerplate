module.exports = function({ addComponents, theme, variants }) {
	const borderRadius = theme('borderRadius', {});
	const borderWidth = theme('borderWidth', {});
	const colors = theme('colors', {});
	const fontFamily = theme('fontFamily', {});
	const fontSize = theme('fontSize', {});
	const fontWeight = theme('fontWeight', {});
	const lineHeight = theme('lineHeight', {});
	const padding = theme('padding', {});

	const generateButton = function(
		base = '',
		shades = [],
		text = ''
	) {
		return {
			'bg': {
				'color': (shades === null) ? colors[base] : colors[base][shades[0]],
				'hover': (shades === null) ? colors[base] : colors[base][shades[1]],
				'focus': (shades === null) ? colors[base] : colors[base][shades[2]],
				'active': (shades === null) ? colors[base] : colors[base][shades[3]],
				'disabled': (shades === null) ? colors[base] : colors[base][shades[4]]
			},
			'text': {
				'color': colors[text],
				'hover': colors[text],
				'focus': colors[text],
				'active': colors[text],
				'disabled': colors[text]
			}
		}
	};

	const buttons = {
		'black': generateButton('black', null, 'white'),
		'white': generateButton('white', null, 'black'),
		'gray': generateButton('gray', [500, 600, 600, 700, 300], 'white'),
		'red': generateButton('red', [500, 600, 600, 700, 300], 'white'),
		'orange': generateButton('orange', [500, 600, 600, 700, 300], 'white'),
		'yellow': generateButton('yellow', [500, 600, 600, 700, 300], 'white'),
		'green': generateButton('green', [500, 600, 600, 700, 300], 'white'),
		'teal': generateButton('teal', [500, 600, 600, 700, 300], 'white'),
		'blue': generateButton('blue', [500, 600, 600, 700, 300], 'white'),
		'indigo': generateButton('indigo', [500, 600, 600, 700, 300], 'white'),
		'purple': generateButton('purple', [500, 600, 600, 700, 300], 'white'),
		'pink': generateButton('pink', [500, 600, 600, 700, 300], 'white')
	};

	addComponents([
		{
			'.btn': {
				'borderRadius': borderRadius['default'],
				'display': 'inline-block',
				'fontFamily': fontFamily['sans'].join(','),
				'fontSize': fontSize['base'],
				'fontWeight': fontWeight['semibold'],
				'lineHeight': lineHeight['none'],
				'padding': padding['4'] + ' ' + padding['8'],
				'textAlign': 'center',
				'whiteSpace': 'nowrap',
				'&:disabled': {
					'cursor': 'not-allowed'
				}
			},
			'.btn-sm': {
				'borderRadius': borderRadius['sm'],
				'fontSize': fontSize['sm'],
				'padding': padding['3'] + ' ' + padding['4']
			},
			'.btn-lg': {
				'borderRadius': borderRadius['lg'],
				'fontSize': fontSize['lg'],
				'padding': padding['5'] + ' ' + padding['10']
			},
			'.btn-xl': {
				'borderRadius': borderRadius['xl'],
				'fontSize': fontSize['xl'],
				'padding': padding['6'] + ' ' + padding['12']
			}
		},
		Object.keys(buttons).map((key) => ({
			[`.btn-${key}`]: {
				'backgroundColor': buttons[key].bg.color,
				'color': buttons[key].text.color,
				'&:hover': {
					'backgroundColor': buttons[key].bg.hover,
					'color': buttons[key].text.hover
				},
				'&:focus': {
					'backgroundColor': buttons[key].bg.focus,
					'color': buttons[key].text.focus
				},
				'&:active, &.active': {
					'backgroundColor': buttons[key].bg.active,
					'color': buttons[key].text.active
				},
				'&:disabled': {
					'backgroundColor': buttons[key].bg.disabled,
					'color': buttons[key].text.disabled
				}
			},
			[`.btn-outline-${key}`]: {
				'backgroundColor': 'transparent',
				'borderColor': buttons[key].bg.color,
				'borderStyle': 'solid',
				'borderWidth': borderWidth['default'],
				'color': buttons[key].bg.color,
				'&:hover': {
					'borderColor': buttons[key].bg.hover,
					'color': buttons[key].bg.hover
				},
				'&:focus': {
					'borderColor': buttons[key].bg.focus,
					'color': buttons[key].bg.focus
				},
				'&:active, &.active': {
					'backgroundColor': buttons[key].bg.color,
					'borderColor': buttons[key].bg.color,
					'color': buttons[key].text.active
				},
				'&:disabled': {
					'borderColor': buttons[key].bg.disabled,
					'color': buttons[key].text.disabled
				}
			}
		}))
	], variants('buttons'));
};
