import '../assets/scss/index.scss';

import Heading from '../assets/js/components/Heading.vue';

new Vue({
	components: { Heading },
	el: '#app',
	data: {
		title: 'Webpack + Vue Basic - Orange'
	},
	template: `<heading :text="title"></heading>`,
	mounted() {
		console.log('Hello from Vue inside index.js! jQuery is available.', $);
	}
});