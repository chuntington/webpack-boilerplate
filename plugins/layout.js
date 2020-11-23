module.exports = function({ addComponents, theme }) {
	const flexGrow = theme('flexGrow', {});
	const margin = theme('margin', {});
	const padding = theme('padding', {});
	const width = theme('width', {});

	addComponents({
		'.container': {
			'paddingLeft': padding['6'],
			'paddingRight': padding['6']
		},
		'.col': {
			'paddingLeft': padding['6'],
			'paddingRight': padding['6'],
			'width': width['full']
		},
		'.row': {
			'display': 'flex',
			'flexGrow': flexGrow['DEFAULT'],
			'flexWrap': 'wrap',
			'marginLeft': margin['-6'],
			'marginRight': margin['-6']
		}
	});
};
