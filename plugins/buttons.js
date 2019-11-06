module.exports = function({ addComponents, theme }) {
	const borderRadius = theme('borderRadius', {});
	const borderWidth = theme('borderWidth', {});
	const colors = theme('colors', {});
	const fontFamily = theme('fontFamily', {});
	const fontSize = theme('fontSize', {});
	const fontWeight = theme('fontWeight', {});
	const lineHeight = theme('lineHeight', {});
	const padding = theme('padding', {});

	const buttons = {
		'black': {
			'bg': {
				'color': colors['black'],
				'hover': colors['black'],
				'focus': colors['black'],
				'active': colors['black'],
				'disabled': colors['black']
			},
			'text': {
				'color': colors['white'],
				'hover': colors['white'],
				'focus': colors['white'],
				'active': colors['white'],
				'disabled': colors['white']
			}
		},
		'white': {
			'bg': {
				'color': colors['white'],
				'hover': colors['white'],
				'focus': colors['white'],
				'active': colors['white'],
				'disabled': colors['white']
			},
			'text': {
				'color': colors['black'],
				'hover': colors['black'],
				'focus': colors['black'],
				'active': colors['black'],
				'disabled': colors['black']
			}
		},
		'gray': {
			'bg': {
				'color': colors['gray']['500'],
				'hover': colors['gray']['600'],
				'focus': colors['gray']['600'],
				'active': colors['gray']['700'],
				'disabled': colors['gray']['300']
			},
			'text': {
				'color': colors['white'],
				'hover': colors['white'],
				'focus': colors['white'],
				'active': colors['white'],
				'disabled': colors['white']
			}
		},
		'red': {
			'bg': {
				'color': colors['red']['500'],
				'hover': colors['red']['600'],
				'focus': colors['red']['600'],
				'active': colors['red']['700'],
				'disabled': colors['red']['300']
			},
			'text': {
				'color': colors['white'],
				'hover': colors['white'],
				'focus': colors['white'],
				'active': colors['white'],
				'disabled': colors['white']
			}
		},
		'orange': {
			'bg': {
				'color': colors['orange']['500'],
				'hover': colors['orange']['600'],
				'focus': colors['orange']['600'],
				'active': colors['orange']['700'],
				'disabled': colors['orange']['300']
			},
			'text': {
				'color': colors['white'],
				'hover': colors['white'],
				'focus': colors['white'],
				'active': colors['white'],
				'disabled': colors['white']
			}
		},
		'yellow': {
			'bg': {
				'color': colors['yellow']['500'],
				'hover': colors['yellow']['600'],
				'focus': colors['yellow']['600'],
				'active': colors['yellow']['700'],
				'disabled': colors['yellow']['300']
			},
			'text': {
				'color': colors['white'],
				'hover': colors['white'],
				'focus': colors['white'],
				'active': colors['white'],
				'disabled': colors['white']
			}
		},
		'green': {
			'bg': {
				'color': colors['green']['500'],
				'hover': colors['green']['600'],
				'focus': colors['green']['600'],
				'active': colors['green']['700'],
				'disabled': colors['green']['300']
			},
			'text': {
				'color': colors['white'],
				'hover': colors['white'],
				'focus': colors['white'],
				'active': colors['white'],
				'disabled': colors['white']
			}
		},
		'teal': {
			'bg': {
				'color': colors['teal']['500'],
				'hover': colors['teal']['600'],
				'focus': colors['teal']['600'],
				'active': colors['teal']['700'],
				'disabled': colors['teal']['300']
			},
			'text': {
				'color': colors['white'],
				'hover': colors['white'],
				'focus': colors['white'],
				'active': colors['white'],
				'disabled': colors['white']
			}
		},
		'blue': {
			'bg': {
				'color': colors['blue']['500'],
				'hover': colors['blue']['600'],
				'focus': colors['blue']['600'],
				'active': colors['blue']['700'],
				'disabled': colors['blue']['300']
			},
			'text': {
				'color': colors['white'],
				'hover': colors['white'],
				'focus': colors['white'],
				'active': colors['white'],
				'disabled': colors['white']
			}
		},
		'indigo': {
			'bg': {
				'color': colors['indigo']['500'],
				'hover': colors['indigo']['600'],
				'focus': colors['indigo']['600'],
				'active': colors['indigo']['700'],
				'disabled': colors['indigo']['300']
			},
			'text': {
				'color': colors['white'],
				'hover': colors['white'],
				'focus': colors['white'],
				'active': colors['white'],
				'disabled': colors['white']
			}
		},
		'purple': {
			'bg': {
				'color': colors['purple']['500'],
				'hover': colors['purple']['600'],
				'focus': colors['purple']['600'],
				'active': colors['purple']['700'],
				'disabled': colors['purple']['300']
			},
			'text': {
				'color': colors['white'],
				'hover': colors['white'],
				'focus': colors['white'],
				'active': colors['white'],
				'disabled': colors['white']
			}
		},
		'pink': {
			'bg': {
				'color': colors['pink']['500'],
				'hover': colors['pink']['600'],
				'focus': colors['pink']['600'],
				'active': colors['pink']['700'],
				'disabled': colors['pink']['300']
			},
			'text': {
				'color': colors['white'],
				'hover': colors['white'],
				'focus': colors['white'],
				'active': colors['white'],
				'disabled': colors['white']
			}
		}
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
				'whiteSpace': 'nowrap'
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
		Object.keys(buttons).map(key => ({
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
	]);
};
