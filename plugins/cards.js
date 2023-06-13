module.exports = function({ addComponents, theme }) {
	const borderRadius = theme('borderRadius', {});
	const padding = theme('padding', {});
	const screens = theme('screens', {});

	addComponents({
		'.card': {
			'borderRadius': borderRadius['DEFAULT']
		},
		'.card-body': {
			'padding': padding['4']
		},
		'.card-body-sm': {
			'padding': padding['2']
		},
		[`@media(min-width: ${ screens['sm'] })`]: {
			'.card-body': {
				'padding': padding['6']
			},
			'.card-body-sm': {
				'padding': padding['4']
			},
		},
		[`@media(min-width: ${ screens['lg'] })`]: {
			'.card-body': {
				'padding': padding['8']
			},
			'.card-body-sm': {
				'padding': padding['6']
			},
		}
	});
};
