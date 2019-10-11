module.exports = function({ addComponents }) {
	addComponents({
		'.modal': {
			'alignItems': 'center',
			'display': 'none',
			'height': '100%',
			'justifyContent': 'center',
			'left': '0',
			'position': 'fixed',
			'top': '0',
			'width': '100%',
			'zIndex': '10',
			'&.open': {
				'display': 'flex'
			},
			'.modal-overlay': {
				'backgroundColor': 'black',
				'height': '100%',
				'left': '0',
				'opacity': '0.5',
				'position': 'absolute',
				'top': '0',
				'width': '100%',
				'zIndex': '20',
			},
			'.modal-wrap': {
				'position': 'relative',
				'zIndex': '30'
			}
		}
	});
};
