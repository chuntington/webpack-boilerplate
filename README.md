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

```shell
> git clone https://github.com/chuntington/webpack-boilerplate.git
> cd webpack-boilerplate/
> npm install
```

Create a `.env` file in the root directory and specify your build environment:

```
NODE_ENV=development
// or
NODE_ENV=production
```

Build your project once, or build on save:

```shell
> npm run build
> npm run watch
```

The generated bundle will be placed inside the `/dist` directory.

### Using SPA Frameworks

Below is an example of a [Vue.js](https://vuejs.org/) implementation, along with `.vue` [template](https://github.com/vuejs/vue/tree/dev/packages/vue-template-compiler) [support](https://github.com/vuejs/vue-loader).

In your terminal:

```shell
> npm install vue vue-loader vue-template-compiler --save-dev
```

In `webpack.config.js`, import and assign appropriate loaders:

```javascript
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

In `postcss.config.js`, inform Purgecss about any `.vue` templates:

```javascript
Purgecss({
    content: [
        // Scan any folder inside /src/js
        './src/js/**/*.vue'
    ]
})
```

In `src/components/ExampleComponent.vue`, create a single-file component template:

```vue
<template>
    <h1 class="example">Example Component</h1>
</template>

<script>
    export default {
        data: () => ({
            show: false
        }),
        mounted() {
            this.show = true;
            console.log('Example component mounted.');
        }
    };
</script>

<style>
    .example {
        color: gray;
    }
</style>
```

In `src/index.html`, create the app container:

```html
<body class="antialiased">
    <div id="app">
        <example-component></example-component>
    </div>
</body>
```

In `src/main.js`, import and instantiate:

```javascript
import ExampleComponent from './components/ExampleComponent.vue';
import Vue from 'vue';

const vm = new Vue({ components: { ExampleComponent } });

vm.$mount('#app');
```

🎩 **Voila!**