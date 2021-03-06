module.exports = function({ addComponents, theme }) {
	const appearance = theme('appearance', {});
	const borderRadius = theme('borderRadius', {});
	const colors = theme('colors', {});
	const cursor = theme('cursor', {});
	const fontFamily = theme('fontFamily', {});
	const fontSize = theme('fontSize', {});
	const fontWeight = theme('fontWeight', {});
	const lineHeight = theme('lineHeight', {});
	const outline = theme('outline', {});
	const padding = theme('padding', {});
	const width = theme('width', {});

	addComponents({
		'.input': {
			'appearance': appearance['none'],
			'backgroundColor': colors['gray']['200'],
			'borderRadius': borderRadius['lg'],
			'color': colors['black'],
			'display': 'block',
			'fontFamily': fontFamily['sans'].join(','),
			'fontSize': fontSize['base'],
			'fontWeight': fontWeight['normal'],
			'lineHeight': lineHeight['tight'],
			'padding': padding['3'] + ' ' + padding['4'],
			'width': width['full'],
			'&:disabled': {
				'color': colors['gray']['500'],
				'cursor': cursor['not-allowed']
			},
			'&:focus': {
				'outline': outline['none']
			},
			'&.error': {
				'boxShadow': 'inset 0 0 0 2px ' + colors['red']['500'],
				'color': colors['red']['500'],
				'&:focus': {
					'backgroundColor': colors['gray']['200'],
					'color': colors['black']
				}
			}
		},
		'.input-arrow': {
			'alignItems': 'center',
			'bottom': '0',
			'color': colors['black'],
			'display': 'flex',
			'padding-left': padding['2'],
			'padding-right': padding['2'],
			'pointer-events': 'none',
			'position': 'absolute',
			'right': '0',
			'top': '0'
		}
	});
};
