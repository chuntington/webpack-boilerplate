module.exports = function({ addUtilities, theme }) {
	const gradients = {
		'black-white': [
			theme('colors.black'),
			theme('colors.white')
		],
		'black-gray': [
			theme('colors.black'),
			theme('colors.gray.500')
		],
		'white-black': [
			theme('colors.white'),
			theme('colors.black')
		],
		'white-gray': [
			theme('colors.white'),
			theme('colors.gray.500')
		],
		'red-orange': [
			theme('colors.red.500'),
			theme('colors.orange.500')
		],
		'orange-yellow': [
			theme('colors.orange.500'),
			theme('colors.yellow.500')
		],
		'yellow-green': [
			theme('colors.yellow.500'),
			theme('colors.green.500')
		],
		'green-teal': [
			theme('colors.green.500'),
			theme('colors.teal.500')
		],
		'teal-blue': [
			theme('colors.teal.500'),
			theme('colors.blue.500')
		],
		'blue-indigo': [
			theme('colors.blue.500'),
			theme('colors.indigo.500')
		],
		'indigo-purple': [
			theme('colors.indigo.500'),
			theme('colors.purple.500')
		],
		'purple-pink': [
			theme('colors.purple.500'),
			theme('colors.pink.500')
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
