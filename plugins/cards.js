module.exports = function({ addComponents, theme }) {
	const borderRadius = theme('borderRadius', {});
	const padding = theme('padding', {});

	addComponents({
		'.card': {
			'borderRadius': borderRadius['DEFAULT']
		},
		'.card-body': {
			'padding': padding['6']
		},
		'.card-body-sm': {
			'padding': padding['4']
		}
	});
};
