module.exports = function({ addUtilities, theme }) {
	const colors = theme('colors', {});

	const gradients = {
		'black-white': [
			colors['black'],
			colors['white']
		],
		'black-gray': [
			colors['black'],
			colors['gray']['500']
		],
		'white-black': [
			colors['white'],
			colors['black']
		],
		'white-gray': [
			colors['white'],
			colors['gray']['500']
		],
		'red-orange': [
			colors['red']['500'],
			colors['orange']['500']
		],
		'orange-yellow': [
			colors['orange']['500'],
			colors['yellow']['500']
		],
		'yellow-green': [
			colors['yellow']['500'],
			colors['green']['500']
		],
		'green-teal': [
			colors['green']['500'],
			colors['teal']['500']
		],
		'teal-blue': [
			colors['teal']['500'],
			colors['blue']['500']
		],
		'blue-indigo': [
			colors['blue']['500'],
			colors['indigo']['500']
		],
		'indigo-purple': [
			colors['indigo']['500'],
			colors['purple']['500']
		],
		'purple-pink': [
			colors['purple']['500'],
			colors['pink']['500']
		]
	};

	addUtilities(
		Object.keys(gradients).map(key => {
			let [start, end] = gradients[key];

			return {
				[`.bg-gradient-${key}`]: {
					'backgroundImage': `linear-gradient(to right, ${start}, ${end})`,
					'backgroundImage': `linear-gradient(to right, ${start}, ease, ${end})`
				}
			};
		})
	);
};
