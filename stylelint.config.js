/*
 * This pattern looks for any set of a-z characters, followed by a hyphen (-)
 * and any set of a-z characters, including 0-9 numbers and the $ symbol.
 */
const ClassPattern = '^[a-z]+(-[$a-z0-9]+)*$';

/*
 * This pattern looks for any set of a-z characters, followed by any set of A-Z
 * characters, including 0-9 numbers and the $ symbol.
 */
const KeyframePattern = '^[a-z][$a-zA-Z0-9]+$';

module.exports = {
	rules: {
		'alpha-value-notation': 'number',
		'annotation-no-unknown': true,
		// 'at-rule-allowed-list': [''],
		// 'at-rule-disallowed-list': [''],
		'at-rule-empty-line-before': [
			'always',
			{
				'except': ['blockless-after-blockless', 'first-nested'],
				'ignore': ['after-comment']
			}
		],
		'at-rule-no-unknown': [
			true,
			{
				'ignoreAtRules': [
					'apply',
					'content',
					'each',
					'else',
					'for',
					'if',
					'import',
					'include',
					'mixin',
					'tailwind',
					'variants'
				]
			}
		],
		'at-rule-no-vendor-prefix': true,
		'at-rule-property-required-list': {},
		'block-no-empty': true,
		'color-function-notation': 'legacy',
		'color-hex-alpha': 'never',
		'color-hex-length': 'long',
		// 'color-named': '',
		// 'color-no-hex': true,
		'color-no-invalid-hex': true,
		'comment-empty-line-before': [
			'always', {
				'except': ['first-nested'],
				'ignore': ['after-comment']
			}
		],
		'comment-no-empty': true,
		// 'comment-pattern': '',
		'comment-whitespace-inside': 'always',
		// 'comment-word-disallowed-list': [''],
		'custom-media-pattern': ClassPattern,
		'custom-property-empty-line-before': [
			'always',
			{
				'except': ['after-custom-property'],
				'ignore': ['first-nested']
			}
		],
		'custom-property-no-missing-var-function': true,
		// 'custom-property-pattern': '',
		'declaration-block-no-duplicate-custom-properties': true,
		'declaration-block-no-duplicate-properties': [
			true,
			{
				'ignore': 'consecutive-duplicates-with-different-values'
			}
		],
		'declaration-block-no-redundant-longhand-properties': true,
		'declaration-block-no-shorthand-property-overrides': true,
		'declaration-block-single-line-max-declarations': 1,
		'declaration-empty-line-before': [
			'always',
			{
				'except': ['after-comment'],
				'ignore': ['after-declaration', 'first-nested']
			}
		],
		// 'declaration-no-important': true,
		// 'declaration-property-max-values': {},
		// 'declaration-property-unit-allowed-list': {},
		// 'declaration-property-unit-disallowed-list': {},
		// 'declaration-property-value-allowed-list': {},
		// 'declaration-property-value-disallowed-list': {},
		// 'declaration-property-value-no-unknown': true,
		'font-family-name-quotes': 'always-unless-keyword',
		'font-family-no-duplicate-names': true,
		'font-family-no-missing-generic-family-keyword': true,
		'font-weight-notation': 'numeric',
		// 'function-allowed-list': [''],
		'function-calc-no-unspaced-operator': true,
		// 'function-disallowed-list': [''],
		'function-linear-gradient-no-nonstandard-direction': true,
		'function-name-case': 'lower',
		'function-no-unknown': [
			true,
			{
				'ignoreFunctions': ['theme']
			}
		],
		'function-url-no-scheme-relative': true,
		'function-url-quotes': 'always',
		// 'function-url-scheme-allowed-list': [''],
		// 'function-url-scheme-disallowed-list': [''],
		'hue-degree-notation': 'angle',
		// 'import-notation': '',
		'keyframe-block-no-duplicate-selectors': true,
		'keyframe-declaration-no-important': true,
		'keyframe-selector-notation': 'percentage',
		'keyframes-name-pattern': KeyframePattern,
		'length-zero-no-unit': true,
		'max-nesting-depth': 4,
		// 'media-feature-name-allowed-list': [''],
		// 'media-feature-name-disallowed-list': [''],
		'media-feature-name-no-unknown': true,
		'media-feature-name-no-vendor-prefix': true,
		// 'media-feature-name-unit-allowed-list': [''],
		// 'media-feature-name-value-allowed-list': [''],
		'media-feature-range-notation': 'prefix',
		'named-grid-areas-no-invalid': true,
		'no-descending-specificity': true,
		'no-duplicate-at-import-rules': true,
		'no-duplicate-selectors': true,
		'no-empty-source': true,
		'no-invalid-double-slash-comments': true,
		'no-invalid-position-at-import-rule': true,
		'no-irregular-whitespace': true,
		'no-unknown-animations': true,
		'number-max-precision': 4,
		// 'property-allowed-list': [''],
		// 'property-disallowed-list': [''],
		'property-no-unknown': true,
		'property-no-vendor-prefix': true,
		'rule-empty-line-before': [
			'always',
			{
				'except': ['first-nested'],
				'ignore': ['after-comment']
			}
		],
		// 'rule-selector-property-disallowed-list': [''],
		// 'selector-attribute-name-disallowed-list': [''],
		// 'selector-attribute-operator-allowed-list': [''],
		// 'selector-attribute-operator-disallowed-list': [''],
		'selector-attribute-quotes': 'always',
		'selector-class-pattern': ClassPattern,
		// 'selector-combinator-allowed-list': [''],
		// 'selector-combinator-disallowed-list': [''],
		// 'selector-disallowed-list': [''],
		'selector-id-pattern': ClassPattern,
		'selector-max-attribute': 3,
		'selector-max-class': 4,
		'selector-max-combinators': 4,
		'selector-max-compound-selectors': 4,
		'selector-max-id': 1,
		'selector-max-pseudo-class': 3,
		// 'selector-max-specificity': '',
		'selector-max-type': 2,
		'selector-max-universal': 2,
		// 'selector-nested-pattern': '',
		// 'selector-no-qualifying-type': true,
		'selector-no-vendor-prefix': true,
		'selector-not-notation': 'complex',
		// 'selector-pseudo-class-allowed-list': [''],
		// 'selector-pseudo-class-disallowed-list': [''],
		'selector-pseudo-class-no-unknown': true,
		// 'selector-pseudo-element-allowed-list': [''],
		'selector-pseudo-element-colon-notation': 'single',
		// 'selector-pseudo-element-disallowed-list': [''],
		'selector-pseudo-element-no-unknown': true,
		'selector-type-case': 'lower',
		'selector-type-no-unknown': true,
		'shorthand-property-no-redundant-values': true,
		'string-no-newline': true,
		'time-min-milliseconds': 0,
		// 'unit-allowed-list': [''],
		// 'unit-disallowed-list': [''],
		'unit-no-unknown': true,
		'value-keyword-case': 'lower',
		'value-no-vendor-prefix': true
	}
};
