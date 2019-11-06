module.exports = function({ addComponents, theme }) {
	const borderWidth = theme('borderWidth', {});
	const height = theme('height', {});
	const width = theme('width', {});

	addComponents({
		'.embed': {
			display: 'block',
			height: '0',
			overflow: 'hidden',
			padding: '0',
			position: 'relative',
			'.embed-item, & > iframe, & > embed, & > object, & > video': {
				borderWidth: borderWidth['0'],
				bottom: '0',
				height: height['full'],
				left: '0',
				position: 'absolute',
				top: '0',
				width: width['full']
			}
		}
	});
};
