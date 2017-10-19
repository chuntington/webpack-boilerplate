import '../../assets/scss/global.scss';
import '../../assets/scss/contact.scss';

import Heading from '../../assets/js/components/Heading.vue';

new Vue({
	components: { Heading },
	el: '#app',
	data: {
		title: 'Contact'
	},
	template: `<heading :text="title"></heading>`,
	mounted() {
		console.log('Hello from Vue inside contact.js! jQuery is available.', $);
	}
});