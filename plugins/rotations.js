module.exports = function({ addUtilities }) {
	addUtilities({
		'.rotate-0': {
			'transform': 'rotate(0deg)'
		},
		'.rotate-90': {
			'transform': 'rotate(90deg)'
		},
		'.rotate-180': {
			'transform': 'rotate(180deg)'
		},
		'.rotate-270': {
			'transform': 'rotate(270deg)'
		}
	});
};
