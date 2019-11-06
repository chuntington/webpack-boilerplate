module.exports = function({ addComponents, theme }) {
	const height = theme('height', {});
	const maxWidth = theme('maxWidth', {});
	const width = theme('width', {});
	const zIndex = theme('zIndex', {});

	addComponents({
		'.modal-overlay': {
			'alignItems': 'center',
			'backgroundColor': 'rgba(0, 0, 0, 0.5)',
			'display': 'flex',
			'height': height['full'],
			'justifyContent': 'center',
			'left': '0',
			'position': 'fixed',
			'top': '0',
			'width': width['full'],
			'zIndex': zIndex['10']
		},
		'.modal': {
			'minWidth': maxWidth['sm']
		}
	});
};
