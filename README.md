# Webpack Boilerplate

A simple-ish Webpack setup utilizing modern features and frameworks for generating static web pages.

For the **beehive**:

- [TailwindCSS](https://github.com/tailwindcss/tailwindcss) *(Utility framework)*
- [Autoprefixer](https://github.com/postcss/autoprefixer) *(Prefixing for target browsers)*
- [FontMagician](https://github.com/jonathantneal/postcss-font-magician) *(Generating @font-face rules)*
- [EasingGradients](https://github.com/larsenwork/postcss-easing-gradients) *(Generating eased gradients)*
- [CSSNano](https://github.com/cssnano/cssnano) *(Compressing and minifying)*
- [PurgeCSS](https://github.com/FullHuman/postcss-purgecss) *(Removing unused styles)*
- [StyleLint](https://github.com/stylelint/stylelint) *(Keeping things in order)*

For the **script kidz**:

- [Babel](https://github.com/babel/babel) *(Transpiling and compiling)*
- [Terser](https://github.com/terser-js/terser) *(Uglifying and compressing)*
- [ESLint](https://github.com/eslint/eslint) *(Keeping things in order)*
- [Insert testing framework here]

To get started, clone the project and install the dependencies:

```
npm install
```

After that, watch your files (build on save), or build for an environment specified in an `.env` file:

```
npm run watch
npm run build
```

The generated bundle will be placed inside the `/dist` directory.

### Using SPA Frameworks

Below is an example of implementing Vue.js, along with `.vue` template support.

In your terminal:

```
npm install vue vue-loader vue-template-compiler
```

In `webpack.config.js`, import and assign appropriate loaders:

```
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
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
}
```

In `src/components/ExampleComponent.vue`, create the component template:

```
<template>
    <h1 class="text-teal-500">Example Component</h1>
</template>

<script>
    export default {
        data: () => ({
            mounted: false
        }),
        mounted() {
            this.mounted = true;

            console.log(this.mounted);
        }
    };
</script>
```

In `src/index.html`, create the app container:

```
<body class="bg-gray-100 font-sans">
    <div id="app">
        <example-component></example-component>
    </div>
    // ...
</body>
```

In `src/main.js`, import and instantiate:

```
import ExampleComponent from './components/ExampleComponent.vue';
import Vue from 'vue';

const vm = new Vue({ components: { ExampleComponent } });

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

**Voila!**