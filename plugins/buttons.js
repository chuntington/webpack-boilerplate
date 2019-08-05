module.exports = function({ addComponents, theme }) {
	const buttons = {
		'black': {
			'bg': {
				'color': theme('colors.black'),
				'hover': theme('colors.black'),
				'focus': theme('colors.black'),
				'active': theme('colors.black')
			},
			'text': {
				'color': '#fff',
				'hover': '#fff',
				'focus': '#fff',
				'active': '#fff'
			}
		},
		'white': {
			'bg': {
				'color': theme('colors.white'),
				'hover': theme('colors.white'),
				'focus': theme('colors.white'),
				'active': theme('colors.white')
			},
			'text': {
				'color': '#000',
				'hover': '#000',
				'focus': '#000',
				'active': '#000'
			}
		},
		'gray': {
			'bg': {
				'color': theme('colors.gray.500'),
				'hover': theme('colors.gray.600'),
				'focus': theme('colors.gray.600'),
				'active': theme('colors.gray.700')
			},
			'text': {
				'color': '#fff',
				'hover': '#fff',
				'focus': '#fff',
				'active': '#fff'
			}
		},
		'red': {
			'bg': {
				'color': theme('colors.red.500'),
				'hover': theme('colors.red.600'),
				'focus': theme('colors.red.600'),
				'active': theme('colors.red.700')
			},
			'text': {
				'color': '#fff',
				'hover': '#fff',
				'focus': '#fff',
				'active': '#fff'
			}
		},
		'orange': {
			'bg': {
				'color': theme('colors.orange.500'),
				'hover': theme('colors.orange.600'),
				'focus': theme('colors.orange.600'),
				'active': theme('colors.orange.700')
			},
			'text': {
				'color': '#fff',
				'hover': '#fff',
				'focus': '#fff',
				'active': '#fff'
			}
		},
		'yellow': {
			'bg': {
				'color': theme('colors.yellow.500'),
				'hover': theme('colors.yellow.600'),
				'focus': theme('colors.yellow.600'),
				'active': theme('colors.yellow.700')
			},
			'text': {
				'color': '#fff',
				'hover': '#fff',
				'focus': '#fff',
				'active': '#fff'
			}
		},
		'green': {
			'bg': {
				'color': theme('colors.green.500'),
				'hover': theme('colors.green.600'),
				'focus': theme('colors.green.600'),
				'active': theme('colors.green.700')
			},
			'text': {
				'color': '#fff',
				'hover': '#fff',
				'focus': '#fff',
				'active': '#fff'
			}
		},
		'teal': {
			'bg': {
				'color': theme('colors.teal.500'),
				'hover': theme('colors.teal.600'),
				'focus': theme('colors.teal.600'),
				'active': theme('colors.teal.700')
			},
			'text': {
				'color': '#fff',
				'hover': '#fff',
				'focus': '#fff',
				'active': '#fff'
			}
		},
		'blue': {
			'bg': {
				'color': theme('colors.blue.500'),
				'hover': theme('colors.blue.600'),
				'focus': theme('colors.blue.600'),
				'active': theme('colors.blue.700')
			},
			'text': {
				'color': '#fff',
				'hover': '#fff',
				'focus': '#fff',
				'active': '#fff'
			}
		},
		'indigo': {
			'bg': {
				'color': theme('colors.indigo.500'),
				'hover': theme('colors.indigo.600'),
				'focus': theme('colors.indigo.600'),
				'active': theme('colors.indigo.700')
			},
			'text': {
				'color': '#fff',
				'hover': '#fff',
				'focus': '#fff',
				'active': '#fff'
			}
		},
		'purple': {
			'bg': {
				'color': theme('colors.purple.500'),
				'hover': theme('colors.purple.600'),
				'focus': theme('colors.purple.600'),
				'active': theme('colors.purple.700')
			},
			'text': {
				'color': '#fff',
				'hover': '#fff',
				'focus': '#fff',
				'active': '#fff'
			}
		},
		'pink': {
			'bg': {
				'color': theme('colors.pink.500'),
				'hover': theme('colors.pink.600'),
				'focus': theme('colors.pink.600'),
				'active': theme('colors.pink.700')
			},
			'text': {
				'color': '#fff',
				'hover': '#fff',
				'focus': '#fff',
				'active': '#fff'
			}
		}
	};

	const borderRadius = theme('borderRadius', {});
	const fontFamily = theme('fontFamily', {});
	const fontSize = theme('fontSize', {});
	const fontWeight = theme('fontWeight', {});
	const lineHeight = theme('lineHeight', {});
	const padding = theme('padding', {});

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
				}
			},
			[`.btn-outline-${key}`]: {
				'backgroundColor': 'transparent',
				'border': `1px solid ${buttons[key].bg.color}`,
				'color': buttons[key].bg.color,
				'&:hover': {
					'backgroundColor': 'transparent',
					'border-color': buttons[key].bg.hover,
					'color': buttons[key].bg.hover
				},
				'&:focus': {
					'backgroundColor': 'transparent',
					'border-color': buttons[key].bg.focus,
					'color': buttons[key].bg.focus
				},
				'&:active, &.active': {
					'backgroundColor': buttons[key].bg.color,
					'border-color': buttons[key].bg.color,
					'color': buttons[key].text.active
				}
			}
		}))
	]);
};
