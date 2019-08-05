module.exports = function({ addUtilities }) {
	addUtilities([
		{
			'.rotate-90': {
				'transform': 'rotate(90deg)'
			}
		}, {
			'.rotate-180': {
				'transform': 'rotate(180deg)'
			}
		}, {
			'.rotate-270': {
				'transform': 'rotate(270deg)'
			}
		}
	]);
};
