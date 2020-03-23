module.exports = function({ addUtilities, variants }) {
	addUtilities([
		{
			'.aspect-ratio-square': {
				'paddingTop': '100%'
			}
		}, {
			'.aspect-ratio-16by9': {
				'paddingTop': '56.25%'
			}
		}, {
			'.aspect-ratio-4by3': {
				'paddingTop': '75%'
			}
		}, {
			'.aspect-ratio-21by9': {
				'paddingTop': '42.86%'
			}
		}
	], variants('aspectRatios'));
};
