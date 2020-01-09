const selectorParser = require('postcss-selector-parser');

module.exports = function({ addVariant, config }) {
	const prefixClass = function(className) {
		const prefix = config('prefix');
		const getPrefix = (typeof prefix === 'function') ? prefix : () => prefix;

		return `${getPrefix(`.${className}`)}${className}`;
	};

	const generateParentPseudoVariant = function(parentClass, pseudoClass) {
		return ({ modifySelectors, separator }) => {
			return modifySelectors(({ selector }) => {
				return selectorParser((selectors) => {
					selectors.walkClasses((classNode) => {
						classNode.value = `${parentClass}-${pseudoClass}${separator}${classNode.value}`;
						classNode.parent.insertBefore(
							classNode,
							selectorParser().astSync(`.${prefixClass(parentClass)}:${pseudoClass} `)
						);
					});
				}).processSync(selector);
			});
		};
	};

	const parentPseudoVariants = {
		'group': ['active', 'disabled', 'focus', 'focus-within', 'visited']
	};

	Object.keys(parentPseudoVariants).forEach((parentClass) => {
		const pseudoClassList = parentPseudoVariants[parentClass];

		if (Array.isArray(pseudoClassList)) {
			parentPseudoVariants[parentClass].forEach((pseudoClass) => {
				addVariant(`${parentClass}-${pseudoClass}`, generateParentPseudoVariant(parentClass, pseudoClass));
			});
		} else {
			addVariant(`${parentClass}-${pseudoClassList}`, generateParentPseudoVariant(parentClass, pseudoClassList));
		}
	});
};
