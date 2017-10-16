import '../scss/index.scss';

import 'bootstrap';

const app = new Vue({
	el: '#app',
	data: {
		title: 'Webpack + Vue Basic'
	},
	mounted() {
		console.log('Hello from Vue inside app.js!', $('body'));
	}
});