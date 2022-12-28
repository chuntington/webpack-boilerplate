'use strict';

import '../css/styles.css';

/*
 * SWC allows us to write ECMAScript 2015+ code by converting it into
 * backwards compatible JavaScript.
 *
 * Terser will automatically minify and compress any Javascript
 * files during production builds.
 */
class Test {
	constructor() {
		const set = { one: 1, two: 2, your: 3, shoe: 4 };
		const { one, two, ...tie } = set;

		this.log = { one, two, tie };
	}

	getLog() {
		const { ...log } = this.log;

		log.tie.shoe = 4;

		return log;
	}
}

/*
 * ESLint will lint any Javascript files during development builds according
 * to the defined 'rules' in the plugin's configuration.
 *
 * Certain rule enforcements have been explicitly disabled in the
 * following lines to avoid errors.
 */
/* eslint-disable-next-line semi */
const test = new Test()

/* eslint-disable-next-line no-console, no-undef */
window.console.log(test.getLog());
