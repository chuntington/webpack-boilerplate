module.exports = function({ addComponents, theme, variants }) {
	const borderRadius = theme('borderRadius', {});
	const borderWidth = theme('borderWidth', {});
	const colors = theme('colors', {});
	const cursor = theme('cursor', {});
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
				'color': (shades === null) ? base : shades[0],
				'hover': (shades === null) ? base : shades[1],
				'focus': (shades === null) ? base : shades[2],
				'active': (shades === null) ? base : shades[3],
				'disabled': (shades === null) ? base : shades[4]
			},
			'text': {
				'color': text,
				'hover': text,
				'focus': text,
				'active': text,
				'disabled': text
			}
		}
	};

	let buttons = {};

	Object.keys(colors).forEach((key) => {
		if (
			key === 'inherit' || 
			key === 'current' || 
			key === 'transparent'
		) {
			return;
		}

		if (key === 'black') {
			buttons[key] = generateButton(colors[key], null, 'white');
		} else if (key === 'white') {
			buttons[key] = generateButton(colors[key], null, 'black');
		} else {
			buttons[key] = generateButton(
				colors[key],
				[
					colors[key][500],
					colors[key][600],
					colors[key][600],
					colors[key][700],
					colors[key][300]
				],
				'white'
			);
		}
	});

	addComponents([
		{
			'.btn': {
				'borderRadius': borderRadius['DEFAULT'],
				'display': 'inline-block',
				'fontFamily': fontFamily['sans'].join(','),
				'fontSize': fontSize['base'],
				'fontWeight': fontWeight['semibold'],
				'lineHeight': lineHeight['none'],
				'padding': padding['4'] + ' ' + padding['8'],
				'textAlign': 'center',
				'whiteSpace': 'nowrap',
				'&:disabled': {
					'cursor': cursor['not-allowed']
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
				'borderWidth': borderWidth['DEFAULT'],
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
