/*
 * This pattern looks for any set of a-z characters, followed by a hyphen (-)
 * and any set of a-z characters, including 0-9 numbers.
 */
const ClassPattern = '^[a-z]+(-[a-z0-9]+)*$';

/*
 * This pattern looks for any set of a-z characters, followed by any set of A-Z
 * characters, including 0-9 numbers.
 */
const KeyframePattern = '^[a-z][a-zA-Z0-9]+$';

module.exports = {
	'rules': {
		// 'at-rule-blacklist': [],
		'at-rule-empty-line-before': [
			'always', {
				'except': ['blockless-after-blockless', 'first-nested'],
				'ignore': ['after-comment']
			}
		],
		'at-rule-name-case': 'lower',
		'at-rule-name-newline-after': 'always-multi-line',
		'at-rule-name-space-after': 'always-single-line',
		'at-rule-no-unknown': [
			true, {
				'ignoreAtRules': [
					'apply',
					'tailwind',
					'variants'
				]
			}
		],
		'at-rule-no-vendor-prefix': true,
		// 'at-rule-property-requirelist': {},
		'at-rule-semicolon-newline-after': 'always',
		'at-rule-semicolon-space-before': 'never',
		// 'at-rule-whitelist': [],
		'block-closing-brace-empty-line-before': 'never',
		'block-closing-brace-newline-after': 'always',
		'block-closing-brace-newline-before': 'always-multi-line',
		'block-closing-brace-space-after': 'always-single-line',
		'block-closing-brace-space-before': 'always-single-line',
		'block-no-empty': true,
		'block-opening-brace-newline-after': 'always-multi-line',
		'block-opening-brace-newline-before': ['never-single-line', 'never-multi-line'],
		'block-opening-brace-space-after': 'always-single-line',
		'block-opening-brace-space-before': 'always',
		'color-hex-case': 'lower',
		'color-hex-length': 'long',
		// 'color-named': 'always-where-possible'|'never',
		// 'color-no-hex': true,
		'color-no-invalid-hex': true,
		'comment-empty-line-before': [
			'always', {
				'except': ['first-nested'],
				'ignore': ['after-comment']
			}
		],
		'comment-no-empty': true,
		'comment-whitespace-inside': 'always',
		// 'comment-word-blacklist': [],
		'custom-media-pattern': ClassPattern,
		'custom-property-empty-line-before': [
			'always', {
				'except': ['after-custom-property'],
				'ignore': ['first-nested']
			}
		],
		'custom-property-pattern': ClassPattern,
		'declaration-bang-space-after': 'never',
		'declaration-bang-space-before': 'always',
		'declaration-block-no-duplicate-properties': [
			true, {
				'ignore': 'consecutive-duplicates-with-different-values'
			}
		],
		'declaration-block-no-redundant-longhand-properties': true,
		'declaration-block-no-shorthand-property-overrides': true,
		'declaration-block-semicolon-newline-after': 'always-multi-line',
		'declaration-block-semicolon-newline-before': 'never-multi-line',
		'declaration-block-semicolon-space-after': 'always-single-line',
		'declaration-block-semicolon-space-before': 'never',
		'declaration-block-single-line-max-declarations': 1,
		'declaration-block-trailing-semicolon': 'always',
		'declaration-colon-newline-after': 'always-multi-line',
		'declaration-colon-space-after': 'always-single-line',
		'declaration-colon-space-before': 'never',
		'declaration-empty-line-before': [
			'always', {
				'except': ['after-comment'],
				'ignore': ['after-declaration', 'first-nested']
			}
		],
		// 'declaration-no-important': true,
		// 'declaration-property-unit-blacklist': {},
		// 'declaration-property-unit-whitelist': {},
		// 'declaration-property-value-blacklist': {},
		// 'declaration-property-value-whitelist': {},
		// 'font-family-name-quotes': 'always-unless-keyword',
		'font-family-no-duplicate-names': true,
		'font-family-no-missing-generic-family-keyword': true,
		'font-weight-notation': 'numeric',
		// 'function-blacklist': [],
		'function-calc-no-invalid': true,
		'function-calc-no-unspaced-operator': true,
		'function-comma-newline-after': 'always-multi-line',
		'function-comma-newline-before': 'never-multi-line',
		'function-comma-space-after': 'always-single-line',
		'function-comma-space-before': 'never-single-line',
		'function-linear-gradient-no-nonstandard-direction': true,
		'function-max-empty-lines': 0,
		'function-name-case': 'lower',
		'function-parentheses-newline-inside': 'always-multi-line',
		'function-parentheses-space-inside': 'never-single-line',
		'function-url-no-scheme-relative': true,
		'function-url-quotes': 'always',
		// 'function-url-scheme-blacklist': [],
		// 'function-url-scheme-whitelist': [],
		// 'function-whitelist': [],
		'function-whitespace-after': 'always',
		'indentation': 'tab',
		'keyframe-declaration-no-important': true,
		'keyframes-name-pattern': KeyframePattern,
		'length-zero-no-unit': true,
		'linebreaks': 'unix',
		'max-empty-lines': 2,
		'max-line-length': 80,
		'max-nesting-depth': 4,
		'media-feature-colon-space-after': 'always',
		'media-feature-colon-space-before': 'never',
		// 'media-feature-name-blacklist': [],
		'media-feature-name-case': 'lower',
		'media-feature-name-no-unknown': true,
		'media-feature-name-no-vendor-prefix': true,
		// 'media-feature-name-value-whitelist': {},
		// 'media-feature-name-whitelist': [],
		'media-feature-parentheses-space-inside': 'never',
		'media-feature-range-operator-space-after': 'always',
		'media-feature-range-operator-space-before': 'always',
		'media-query-list-comma-newline-after': 'always-multi-line',
		'media-query-list-comma-newline-before': 'never-multi-line',
		'media-query-list-comma-space-after': 'always-single-line',
		'media-query-list-comma-space-before': 'never',
		'no-descending-specificity': true,
		'no-duplicate-at-import-rules': true,
		'no-duplicate-selectors': true,
		'no-empty-source': true,
		'no-empty-first-line': true,
		'no-eol-whitespace': true,
		'no-extra-semicolons': true,
		'no-invalid-double-slash-comments': true,
		'no-missing-end-of-source-newline': true,
		'no-unknown-animations': true,
		'number-leading-zero': 'always',
		'number-max-precision': 4,
		'number-no-trailing-zeros': true,
		// 'property-blacklist': [],
		'property-case': 'lower',
		'property-no-unknown': true,
		'property-no-vendor-prefix': true,
		// 'property-whitelist': [],
		'rule-empty-line-before': [
			'always', {
				'except': ['first-nested'],
				'ignore': ['after-comment']
			}
		],
		'selector-attribute-brackets-space-inside': 'never',
		// 'selector-attribute-operator-blacklist': [],
		'selector-attribute-operator-space-after': 'never',
		'selector-attribute-operator-space-before': 'never',
		// 'selector-attribute-operator-whitelist': [],
		'selector-attribute-quotes': 'always',
		'selector-class-pattern': ClassPattern,
		// 'selector-combinator-blacklist': [],
		'selector-combinator-space-after': 'always',
		'selector-combinator-space-before': 'always',
		// 'selector-combinator-whitelist': [],
		'selector-descendant-combinator-no-non-space': true,
		'selector-id-pattern': ClassPattern,
		// 'selector-list-comma-newline-after': 'always'|'always-multi-line'|'never-multi-line',
		'selector-list-comma-newline-before': 'never-multi-line',
		'selector-list-comma-space-after': 'always-single-line',
		'selector-list-comma-space-before': 'never',
		'selector-max-attribute': 3,
		'selector-max-class': 4,
		'selector-max-combinators': 4,
		'selector-max-compound-selectors': 4,
		'selector-max-empty-lines': 0,
		'selector-max-id': 1,
		'selector-max-pseudo-class': 3,
		// 'selector-max-specificity': string,
		'selector-max-type': 2,
		'selector-max-universal': 2,
		// 'selector-nested-pattern': ClassPattern,
		// 'selector-no-qualifying-type': true,
		'selector-no-vendor-prefix': true,
		// 'selector-pseudo-class-blacklist': [],
		'selector-pseudo-class-case': 'lower',
		'selector-pseudo-class-no-unknown': true,
		'selector-pseudo-class-parentheses-space-inside': 'never',
		// 'selector-pseudo-class-whitelist': [],
		// 'selector-pseudo-element-blacklist': [],
		'selector-pseudo-element-case': 'lower',
		'selector-pseudo-element-colon-notation': 'single',
		'selector-pseudo-element-no-unknown': true,
		// 'selector-pseudo-element-whitelist': [],
		'selector-type-case': 'lower',
		'selector-type-no-unknown': true,
		'shorthand-property-no-redundant-values': true,
		'string-no-newline': true,
		'string-quotes': 'double',
		'time-min-milliseconds': 0,
		// 'unit-blacklist': [],
		'unit-case': 'lower',
		'unit-no-unknown': true,
		// 'unit-whitelist': [],
		'value-keyword-case': 'lower',
		'value-list-comma-newline-after': 'always-multi-line',
		'value-list-comma-newline-before': 'never-multi-line',
		'value-list-comma-space-after': 'always-single-line',
		'value-list-comma-space-before': 'never-single-line',
		'value-list-max-empty-lines': 0,
		'value-no-vendor-prefix': true
	}
};
