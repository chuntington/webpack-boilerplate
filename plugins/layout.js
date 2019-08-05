module.exports = function({ addComponents, theme }) {
	const margin = theme('margin', {});
	const padding = theme('padding', {});

	addComponents({
		'.container': {
			'paddingLeft': padding['6'],
			'paddingRight': padding['6']
		},
		'.col': {
			'paddingLeft': padding['6'],
			'paddingRight': padding['6'],
			'width': '100%'
		},
		'.row': {
			'display': 'flex',
			'flexGrow': '1',
			'flexWrap': 'wrap',
			'marginLeft': margin['-6'],
			'marginRight': margin['-6']
		}
	});
};
