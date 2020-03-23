module.exports = function({ addUtilities, theme }) {
	const colors = theme('colors', {});
	const gradients = theme('gradients', {});

	addUtilities(
		Object.keys(gradients).map((key) => {
			let [start, end] = gradients[key];

			return {
				[`.bg-gradient-b-${key}`]: {
					'backgroundImage': `linear-gradient(to bottom, ${start}, ${end})`,
					'backgroundImage': `linear-gradient(to bottom, ${start}, ease, ${end})`
				},
				[`.bg-gradient-l-${key}`]: {
					'backgroundImage': `linear-gradient(to left, ${start}, ${end})`,
					'backgroundImage': `linear-gradient(to left, ${start}, ease, ${end})`
				},
				[`.bg-gradient-r-${key}`]: {
					'backgroundImage': `linear-gradient(to right, ${start}, ${end})`,
					'backgroundImage': `linear-gradient(to right, ${start}, ease, ${end})`
				},
				[`.bg-gradient-t-${key}`]: {
					'backgroundImage': `linear-gradient(to top, ${start}, ${end})`,
					'backgroundImage': `linear-gradient(to top, ${start}, ease, ${end})`
				}
			};
		})
	);
};
