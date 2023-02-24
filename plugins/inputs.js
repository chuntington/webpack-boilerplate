module.exports = function({ addComponents, theme }) {
	const borderRadius = theme('borderRadius', {});
	const colors = theme('colors', {});
	const cursor = theme('cursor', {});
	const fontFamily = theme('fontFamily', {});
	const fontSize = theme('fontSize', {});
	const fontWeight = theme('fontWeight', {});
	const lineHeight = theme('lineHeight', {});
	const outlineWidth = theme('outlineWidth', {});
	const padding = theme('padding', {});
	const width = theme('width', {});

	addComponents({
		'.input': {
			'backgroundColor': colors['gray']['100'],
			'borderRadius': borderRadius['DEFAULT'],
			'color': colors['black'],
			'display': 'block',
			'fontFamily': fontFamily['sans'].join(','),
			'fontSize': fontSize['base'],
			'fontWeight': fontWeight['normal'],
			'lineHeight': lineHeight['tight'],
			'padding': padding['3'] + ' ' + padding['4'],
			'width': width['full'],
			'&::placeholder': {
				'color': colors['gray']['500']
			},
			'&:disabled': {
				'color': colors['gray']['500'],
				'cursor': cursor['not-allowed']
			},
			'&:focus': {
				'outlineStyle': 'solid',
				'outlineColor': colors['gray']['300'],
				'outlineWidth': outlineWidth['1']
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
		'.dark .input': {
			'backgroundColor': colors['gray']['900'],
			'color': colors['white'],
			'&:focus': {
				'outlineColor': colors['gray']['700']
			},
			'&.error': {
				'&:focus': {
					'backgroundColor': colors['gray']['800'],
					'color': colors['white']
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
		},
		'.dark .input-arrow': {
			'color': colors['white']
		}
	});
};
