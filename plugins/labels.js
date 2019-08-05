module.exports = function({ addUtilities, theme }) {
	const fontFamily = theme('fontFamily', {});
	const fontSize = theme('fontSize', {});
	const fontWeight = theme('fontWeight', {});

	addUtilities({
		'label': {
			'fontFamily': fontFamily['sans'].join(','),
			'fontSize': fontSize['xs'],
			'fontWeight': fontWeight['bold'],
			'textTransform': 'uppercase'
		}
	});
};
