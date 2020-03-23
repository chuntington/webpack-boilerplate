module.exports = function({ addUtilities, theme, variants }) {
	const spacing = theme('spacing', {});
	const scrollSnap = theme('scrollSnap', {});

	const snapAlignmentClasses = Object.keys(scrollSnap.alignments).map((key) => {
		return {
			[`.scroll-snap-align-${key}`]: {
				'scrollSnapAlign': scrollSnap.alignments[key]
			}
		};
	});

	const snapStopClasses = Object.keys(scrollSnap.stops).map((key) => {
		return {
			[`.scroll-snap-stop-${key}`]: {
				'scrollSnapStop': scrollSnap.stops[key]
			}
		};
	});

	const snapTypeClasses = Object.keys(scrollSnap.types).map((key) => {
		return {
			[`.scroll-snap-type-${key}`]: {
				'scrollSnapType': scrollSnap.types[key]
			}
		};
	});

	const scrollMarginClasses = Object.keys(spacing).map((key) => {
		let space = spacing[key];

		return {
			[`.scroll-m-${key}`]: {
				'scrollMargin': space
			},
			[`.scroll-mb-${key}`]: {
				'scrollMarginBottom': space
			},
			[`.scroll-ml-${key}`]: {
				'scrollMarginLeft': space
			},
			[`.scroll-mr-${key}`]: {
				'scrollMarginRight': space
			},
			[`.scroll-mt-${key}`]: {
				'scrollMarginTop': space
			},
			[`.scroll-mx-${key}`]: {
				'scrollMarginLeft': space,
				'scrollMarginRight': space
			},
			[`.scroll-my-${key}`]: {
				'scrollMarginBottom': space,
				'scrollMarginTop': space
			},
			[`.scroll-m-block-${key}`]: {
				'scrollMarginBlock': space
			},
			[`.scroll-m-block-end-${key}`]: {
				'scrollMarginBlockEnd': space
			},
			[`.scroll-m-block-start-${key}`]: {
				'scrollMarginBlockStart': space
			},
			[`.scroll-m-inline-${key}`]: {
				'scrollMarginInline': space
			},
			[`.scroll-m-inline-end-${key}`]: {
				'scrollMarginInlineEnd': space
			},
			[`.scroll-m-inline-start-${key}`]: {
				'scrollMarginInlineStart': space
			}
		};
	});

	const scrollPaddingClasses = Object.keys(spacing).map((key) => {
		let space = spacing[key];

		return {
			[`.scroll-p-${key}`]: {
				'scrollPadding': space
			},
			[`.scroll-pb-${key}`]: {
				'scrollPaddingBottom': space
			},
			[`.scroll-pl-${key}`]: {
				'scrollPaddingLeft': space
			},
			[`.scroll-pr-${key}`]: {
				'scrollPaddingRight': space
			},
			[`.scroll-pt-${key}`]: {
				'scrollPaddingTop': space
			},
			[`.scroll-px-${key}`]: {
				'scrollPaddingLeft': space,
				'scrollPaddingRight': space
			},
			[`.scroll-py-${key}`]: {
				'scrollPaddingBottom': space,
				'scrollPaddingTop': space
			},
			[`.scroll-p-block-${key}`]: {
				'scrollPaddingBlock': space
			},
			[`.scroll-p-block-end-${key}`]: {
				'scrollPaddingBlockEnd': space
			},
			[`.scroll-p-block-start-${key}`]: {
				'scrollPaddingBlockStart': space
			},
			[`.scroll-p-inline-${key}`]: {
				'scrollPaddingInline': space
			},
			[`.scroll-p-inline-end-${key}`]: {
				'scrollPaddingInlineEnd': space
			},
			[`.scroll-p-inline-start-${key}`]: {
				'scrollPaddingInlineStart': space
			}
		};
	});

	addUtilities([
		snapAlignmentClasses,
		snapTypeClasses,
		snapStopClasses,
		scrollMarginClasses,
		scrollPaddingClasses
	], variants('scrolls'));
};
