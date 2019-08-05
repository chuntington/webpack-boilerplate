# Webpack Boilerplate

A simple Webpack setup utilizing modern features and frameworks for generating static web pages.

For the **beehive**:

- TailwindCSS *(Scaffolding utilities)*
- Autoprefixer *(Prefixing for browsers)*
- FontMagician *(Generating @font-face rules)*
- EasingGradients *(Generating eased gradients)*
- CSSNano *(Minifying final builds)*
- PurgeCSS *(Removing unused classes)*
- StyleLint *(Keeping things in order)*

For the **script kidz**:

- Babel (Transpiling to more compatible versions)
- Terser (Uglifying and compressing)
- ESLint (Keeping things in order)
- [Insert testing framework here]

To get started, clone the project and install the dependencies:

```
npm install
```

After that, watch your files or build for production:

```
npm run watch
npm run production
```

Out of the box, the watch flag will instruct Webpack to rebuild the project if `src/app.js` or any of its dependencies change.

The generated bundle will be placed inside the `/dist` directory.

### Want to use a SPA framework?

Below is an example of implementing Vuejs. *Other frameworks may be used according to their independent implementations.*

In your terminal:

```
npm install vue
npm install vue-template-compiler
npm install vue-loader
```

In `webpack.config.js`, assign the loader:

```
module: {
	rules: [
		{
			test: /\.vue$/,
			loader: 'vue-loader'
		}, {
			test: /\.css$/,
			use: [
				'vue-style-loader',
				// ...
			]
		}
	]
},
plugins: [
	new VueLoaderPlugin()
],
// Override the alias for template interpolation
resolve: {
	alias: {
		vue: 'vue/dist/vue.esm.js'
	}
}
```

In `src/app.js`, import and instantiate:

```
import Vue from 'vue';

const vm = new Vue({ ...options });

vm.$mount('#app');
```

In `postcss.config.js`, inform Purgecss about any `.vue` templates:

```
Purgecss({
	content: [
		// Scan any folder inside /src/js
		'./src/js/**/*.vue'
	]
})
```

**Voila!** Rinse and repeat for the framework of your choosing.