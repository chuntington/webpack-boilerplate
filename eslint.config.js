module.exports = {
	env: {
		'es6': true
	},
	parserOptions: {
		'ecmaVersion': 10,
		'sourceType': 'module'
	},
	rules: {
		'accessor-pairs': 'off',
		'array-bracket-newline': ['error', 'consistent'],
		'array-bracket-spacing': ['error', 'never'],
		'array-callback-return': 'error',
		'array-element-newline': ['error', 'consistent'],
		'arrow-body-style': ['error', 'as-needed'],
		'arrow-parens': [
			'warn',
			'as-needed',
			{
				'requireForBlockBody': true
			}
		],
		'arrow-spacing': [
			'error',
			{
				'before': true,
				'after': true
			}
		],
		'block-scoped-var': 'error',
		'block-spacing': ['error', 'always'],
		'brace-style': [
			'error', 
			'1tbs',
			{
				'allowSingleLine': true
			}
		],
		'callback-return': 'error',
		'camelcase': [
			'error',
			{
				'properties': 'always',
				'ignoreDestructuring': false
			}
		],
		'capitalized-comments': 'warn',
		'class-methods-use-this': 'error',
		'comma-dangle': ['error', 'never'],
		'comma-spacing': 'error',
		'comma-style': ['error', 'last'],
		'complexity': ['error', 20],
		'computed-property-spacing': 'error',
		'consistent-return': 'error',
		'consistent-this': ['error', 'self'],
		'constructor-super': 'error',
		'curly': ['error', 'all'],
		'default-case': 'error',
		'dot-location': 'error',
		'dot-notation': 'error',
		'eol-last': ['error', 'always'],
		'eqeqeq': 'warn',
		'for-direction': 'error',
		'func-call-spacing': 'error',
		'func-name-matching': 'off',
		'func-style': ['error', 'expression'],
		'function-paren-newline': ['error', 'consistent'],
		'generator-star-spacing': [
			'error',
			{
				'after': true,
				'before': false
			}
		],
		'getter-return': 'error',
		'global-require': 'warn',
		'guard-for-in': 'error',
		'handle-callback-err': ['warn', '^(err|error|errors)$'],
		'id-blacklist': ['warn'],
		'id-length': [
			'warn',
			{
				'exceptions': ['i', 'j', 'k', 'n', 'r', 'x', 'y', 'z']
			}
		],
		'id-match': 'off',
		'implicit-arrow-linebreak': ['warn', 'beside'],
		'indent': ['error', 'tab'],
		'init-declarations': 'off',
		'jsx-quotes': ['error', 'prefer-single'],
		'key-spacing': 'error',
		'keyword-spacing': 'error',
		'line-comment-position': ['error', 'above'],
		'linebreak-style': ['off'],
		'lines-around-comment': [
			'error',
			{
				'allowArrayEnd': false,
				'allowBlockEnd': false,
				'allowBlockStart': true,
				'allowClassEnd': false,
				'allowClassStart': true,
				'allowObjectStart': true,
				'allowObjectEnd': false,
				'beforeBlockComment': true,
				'beforeLineComment': true,
			}
		],
		'lines-between-class-members': ['error', 'always'],
		'max-classes-per-file': ['error', 5],
		'max-depth': ['error', 4],
		'max-len': [
			'error',
			{
				'code': 80,
				'comments': 80,
				'ignoreUrls': true,
				'tabWidth': 4
			}
		],
		'max-lines': 'off',
		'max-lines-per-function': ['warn', 100],
		'max-nested-callbacks': ['warn', 10],
		'max-params': ['error', 8],
		'max-statements': 'off',
		'max-statements-per-line': [
			'error',
			{
				'max': 3
			}
		],
		'multiline-comment-style': ['error', 'starred-block'],
		'multiline-ternary': ['error', 'always-multiline'],
		'new-cap': [
			'error',
			{
				'capIsNew': false,
				'newIsCap': true
			}
		],
		'new-parens': 'error',
		'newline-per-chained-call': [
			'error',
			{
				'ignoreChainWithDepth': 2
			}
		],
		'no-alert': 'off',
		'no-array-constructor': 'error',
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',
		'no-bitwise': 'off',
		'no-buffer-constructor': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-class-assign': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-confusing-arrow': [
			'error',
			{
				'allowParens': true
			}
		],
		'no-console': 'warn',
		'no-const-assign': 'error',
		'no-constant-condition': 'error',
		'no-continue': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-delete-var': 'error',
		'no-div-regex': 'warn',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': [
			'error',
			{
				'includeExports': true
			}
		],
		'no-else-return': 'error',
		'no-empty': 'error',
		'no-empty-character-class': 'error',
		'no-empty-function': 'error',
		'no-empty-pattern': 'error',
		'no-eq-null': 'warn',
		'no-eval': 'error',
		'no-ex-assign': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-label': 'error',
		'no-extra-parens': 'error',
		'no-extra-semi': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'warn',
		'no-func-assign': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': 'off',
		'no-implicit-globals': 'warn',
		'no-implied-eval': 'error',
		'no-inline-comments': 'error',
		'no-inner-declarations': ['error', 'both'],
		'no-invalid-regexp': 'error',
		'no-invalid-this': 'error',
		'no-irregular-whitespace': 'error',
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-magic-numbers': 'warn',
		'no-misleading-character-class': 'error',
		'no-mixed-operators': 'error',
		'no-mixed-requires': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-assign': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'warn',
		'no-multiple-empty-lines': [
			'error',
			{
				'max': 2,
				'maxBOF': 1,
				'maxEOF': 1
			}
		],
		'no-negated-condition': 'warn',
		'no-nested-ternary': 'error',
		'no-new': 'warn',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-require': 'error',
		'no-new-symbol': 'error',
		'no-new-wrappers': 'error',
		'no-obj-calls': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'error',
		'no-path-concat': 'error',
		'no-plusplus': [
			'warn',
			{
				'allowForLoopAfterthoughts': true
			}
		],
		'no-process-env': 'off',
		'no-process-exit': 'off',
		'no-proto': 'error',
		'no-prototype-builtins': 'error',
		'no-redeclare': 'error',
		'no-regex-spaces': 'error',
		'no-restricted-globals': 'error',
		'no-restricted-imports': 'off',
		'no-restricted-modules': 'off',
		'no-restricted-properties': 'off',
		'no-restricted-syntax': [
			'error',
			'ForInStatement',
			'ForOfStatement',
			'WithStatement'
		],
		'no-return-assign': ['error', 'always'],
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-shadow': 'warn',
		'no-shadow-restricted-names': 'error',
		'no-sparse-arrays': 'error',
		'no-sync': 'off',
		'no-tabs': [
			'error',
			{
				'allowIndentationTabs': true
			}
		],
		'no-template-curly-in-string': 'warn',
		'no-ternary': 'off',
		'no-this-before-super': 'error',
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undef': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'error',
		'no-underscore-dangle': 'error',
		'no-unexpected-multiline': 'error',
		'no-unmodified-loop-condition': 'warn',
		'no-unneeded-ternary': 'error',
		'no-unreachable': 'warn',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'no-unused-expressions': 'warn',
		'no-unused-labels': 'error',
		'no-unused-vars': 'error',
		'no-use-before-define': 'error',
		'no-useless-call': 'error',
		'no-useless-catch': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-constructor': 'error',
		'no-useless-escape': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-var': 'warn',
		'no-void': 'error',
		'no-warning-comments': 'warn',
		'no-whitespace-before-property': 'error',
		'no-with': 'error',
		'nonblock-statement-body-position': ['error', 'beside'],
		'object-curly-newline': [
			'error',
			{
				'multiline': true
			}
		],
		'object-curly-spacing': ['error', 'always'],
		'object-property-newline': [
			'error',
			{
				'allowAllPropertiesOnSameLine': true
			}
		],
		'object-shorthand': [
			'warn',
			'always',
			{
				'avoidExplicitReturnArrows': true,
				'avoidQuotes': false
			}
		],
		'one-var': [
			'error',
			{
				'var': 'consecutive',
				'let': 'never',
				'const': 'never'
			}
		],
		'one-var-declaration-per-line': ['error', 'initializations'],
		'operator-assignment': ['warn', 'always'],
		'operator-linebreak': ['error', 'before'],
		'padded-blocks': ['error', 'never'],
		'padding-line-between-statements': [
			'error',
			{
				'blankLine': 'always',
				'prev': '*',
				'next': 'return'
			}
		],
		'prefer-arrow-callback': 'error',
		'prefer-const': [
			'error',
			{
				'destructuring': 'all',
				'ignoreReadBeforeAssign': true
			}
		],
		'prefer-destructuring': [
			'error',
			{
				'array': true,
				'object': true
			}
		],
		'prefer-named-capture-group': 'warn',
		'prefer-numeric-literals': 'error',
		'prefer-object-spread': 'error',
		'prefer-promise-reject-errors': 'warn',
		'prefer-rest-params': 'error',
		'prefer-spread': 'warn',
		'prefer-template': 'warn',
		'quote-props': ['warn', 'consistent-as-needed'],
		'quotes': ['error', 'single'],
		'radix': 'warn',
		'require-atomic-updates': 'error',
		'require-await': 'warn',
		'require-unicode-regexp': 'off',
		'require-yield': 'error',
		'rest-spread-spacing': ['error', 'never'],
		'semi': 'error',
		'semi-spacing': [
			'error',
			{
				'before': false,
				'after': true
			}
		],
		'semi-style': ['error', 'last'],
		'sort-imports': 'off',
		'sort-keys': 'off',
		'sort-vars': 'off',
		'space-before-blocks': 'error',
		'space-before-function-paren': ['error', 'never'],
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': 'error',
		'space-unary-ops': [
			'error',
			{
				'nonwords': false,
				'words': true
			}
		],
		'spaced-comment': ['error', 'always'],
		'switch-colon-spacing': [
			'error',
			{
				'after': true,
				'before': false
			}
		],
		'symbol-description': 'warn',
		'template-curly-spacing': ['error', 'never'],
		'template-tag-spacing': ['error', 'always'],
		'unicode-bom': ['error', 'never'],
		'use-isnan': 'error',
		'valid-typeof': 'error',
		'vars-on-top': 'warn',
		'wrap-iife': ['error', 'outside'],
		'wrap-regex': 'off',
		'yield-star-spacing': ['error', 'after'],
		'yoda': 'error'
	}
};
