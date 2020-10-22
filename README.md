# Webpack Boilerplate

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) ![David](https://img.shields.io/david/dev/chuntington/webpack-boilerplate)

A starter Webpack (5) boilerplate for generating static web pages.

For the **beehive**:

- [TailwindCSS](https://github.com/tailwindcss/tailwindcss) *(Utility framework)*
- [Autoprefixer](https://github.com/postcss/autoprefixer) *(Prefixing for target browsers)*
- [Import](https://github.com/postcss/postcss-import) *(Inlining @import rules)*
- [FontMagician](https://github.com/jonathantneal/postcss-font-magician) *(Generating @font-face rules)*
- [AdvancedVariables](https://github.com/jonathantneal/postcss-advanced-variables) *(Variables, conditionals and loops)*
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

Create a `.env` file in the root directory and specify the build environment inside:

```
NODE_ENV=development
// or
NODE_ENV=production
```

In the terminal, build the project once, or build on save:

```shell
> npm run build
> npm run watch
```

If you need a web server, the following will start one locally and build on save:

```shell
> npm run serve
```

The generated bundle will be placed inside the `/dist` directory.

## Installing a framework

*Note: When using styled components, the extracted CSS is likely to be invalid according to the default StyleLint rules. Modify the linting rules in `stylelint.config.js` to accommodate your situation or disable linting completely in `postcss.config.js`. It may also be helpful to modify or temporarily disable linting rules in `eslint.config.js` when utilizing any of the below frameworks.*

### VueJS (2.x)
Below is an example of a [Vue.js](https://github.com/vuejs/vue) (2.x) implementation, along with `.vue` [template](https://github.com/vuejs/vue/tree/dev/packages/vue-template-compiler) [support](https://github.com/vuejs/vue-loader).

In the terminal:

```shell
> npm install vue vue-loader vue-template-compiler --save
```

In `webpack.config.js`, import and assign appropriate loaders and plugins:

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
            },
            // ...
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        // ...
    ],
    // Override the alias for template interpolation
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js'
        }
    }
}
```

In `postcss.config.js`, inform Purgecss of any `.vue` templates:

```javascript
Purgecss({
    content: [
        './src/js/**/*.vue',
        // ...
    ]
})
```

In `src/js/components/ExampleComponent.vue`, create an example styled component template:

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

In `src/index.html`, declare an app container with the example component nested inside:

```html
<body class="antialiased">
    <div id="app">
        <example-component></example-component>
    </div>
</body>
```

In `src/js/main.js`, import the framework and example component, and initiate a new app instance:

```javascript
import ExampleComponent from './components/ExampleComponent.vue';
import Vue from 'vue';

const vm = new Vue({ components: { ExampleComponent } });

vm.$mount('#app');
```

### SvelteJS
Below is an example of a [Svelte.js](https://github.com/sveltejs/svelte) implementation utilizing `.svelte` templates.

In the terminal:

```shell
> npm install svelte svelte-loader --save
```

In `webpack.config.js`, assign the appropriate loader and resolve configuration:

```javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.svelte$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        emitCss: true
                    }
                }
            },
            // ...
        ]
    },
    resolve: {
        alias: {
            svelte: Path.resolve('node_modules', 'svelte')
        },
        extensions: ['.mjs', '.js', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    }
}
```

In `postcss.config.js`, inform Purgecss of any `.svelte` templates:

```javascript
Purgecss({
    content: [
        './src/js/**/*.svelte',
        // ...
    ]
})
```

In `src/js/components/App.svelte`, create an example styled component template:

```svelte
<script>
    import { onMount } from 'svelte';

    export let name;

    onMount(() => {
        console.log(`${name} mounted.`);
    });
</script>

<h1 class="example">{name}</h1>

<style>
    .example {
        color: gray;
    }
</style>
```

In `src/index.html`, declare the component container:

```html
<body class="antialiased">
    <div id="app"></div>
</body>
```

In `src/js/main.js`, import the component and initiate a new instance:

```javascript
import App from './components/App.svelte';

const app = new App({
    target: document.getElementById('app'),
    props: { name: 'Example App' }
});

window.app = app;
```

### ReactJS
Below is an example of a [React.js](https://github.com/facebook/react) implementation.

In the terminal:

```shell
> npm install @babel/preset-react eslint-plugin-react react react-dom --save
```

In `babel.config.js`, assign the preset:

```javascript
module.exports = function(api) {
    // ...

    return {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        // ...
    };
};
```

In `eslint.config.js`, enable the appropriate parser options and plugin:

```javascript
module.exports = {
    parserOptions: {
        'ecmaFeatures': {
            'jsx': true
        },
        // ...
    },
    plugins: ['react'],
    // ...
}
```

In `src/js/components/ExampleComponent.js`, create an example component template:

```javascript
import React from 'react';

class ExampleComponent extends React.Component {
    render() {
        return <h1>Example Component</h1>;
    }

    componentDidMount() {
        console.log('Example component mounted.');
    }
}

export default ExampleComponent;
```

In `src/index.html`, declare an app container:

```html
<body class="antialiased">
    <div id="app"></div>
</body>
```

In `src/js/main.js`, import the framework and example component, and initiate a new app instance:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import ExampleComponent from './components/ExampleComponent.js';

class App extends React.Component {
    render() {
        return <ExampleComponent/>;
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
```

🎩 **Voila!**