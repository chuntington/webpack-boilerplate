import '../scss/global.scss';
import '../scss/index.scss';

const app = new Vue({
	el: '#app',
	data: {
		title: 'Webpack + Vue Basic'
	},
	mounted() {
		console.log('Hello from Vue inside index.js! jQuery is available.', $);
	}
});