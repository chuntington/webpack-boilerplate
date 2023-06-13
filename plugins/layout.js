module.exports = function({ addComponents, theme }) {
	const flexGrow = theme('flexGrow', {});
	const margin = theme('margin', {});
	const padding = theme('padding', {});
	const screens = theme('screens', {});
	const width = theme('width', {});

	addComponents({
		'.container': {
			'max-width': '100%',
			'paddingLeft': padding['4'],
			'paddingRight': padding['4']
		},
		'.col': {
			'paddingLeft': padding['4'],
			'paddingRight': padding['4'],
			'width': width['full']
		},
		'.row': {
			'display': 'flex',
			'flexGrow': flexGrow['DEFAULT'],
			'flexWrap': 'wrap',
			'marginLeft': `-${margin['4']}`,
			'marginRight': `-${margin['4']}`
		},
		[`@media(min-width: ${ screens['sm'] })`]: {
			'.col': {
				'paddingLeft': padding['6'],
				'paddingRight': padding['6'],
			},
			'.row': {
				'marginLeft': `-${margin['6']}`,
				'marginRight': `-${margin['6']}`
			}
		},
		[`@media(min-width: ${ screens['lg'] })`]: {
			'.col': {
				'paddingLeft': padding['8'],
				'paddingRight': padding['8'],
			},
			'.row': {
				'marginLeft': `-${margin['8']}`,
				'marginRight': `-${margin['8']}`
			}
		}
	});
};
