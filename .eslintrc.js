/* eslint-disable max-lines */
module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true,
		'jest/globals': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jest/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'plugins': ['react', 'jest', '@typescript-eslint'],
	'rules': {
		'accessor-pairs': 'error',
		'array-bracket-newline': 'error',
		'array-bracket-spacing': [
			'error',
			'never'
		],
		'array-callback-return': 'error',
		'array-element-newline': 'off',
		'arrow-body-style': 'error',
		'arrow-parens': [
			'error',
			'as-needed'
		],
		'arrow-spacing': [
			'error',
			{
				'after': true,
				'before': true
			}
		],
		'@typescript-eslint/ban-ts-comment': [
			'error',
			{
				'ts-ignore': 'allow-with-description',
				'minimumDescriptionLength': 10
			}
		],
		'@typescript-eslint/no-empty-function': ['warn'],
		'block-scoped-var': 'error',
		'block-spacing': 'error',
		'brace-style': 'error',
		'camelcase': 'error',
		'capitalized-comments': [
			'off',
			'never'
		],
		'class-methods-use-this': 'error',
		'comma-dangle': 'error',
		'comma-spacing': [
			'error',
			{
				'after': true,
				'before': false
			}
		],
		'comma-style': 'error',
		'complexity': 'error',
		'computed-property-spacing': [
			'error',
			'never'
		],
		'consistent-return': 'error',
		'consistent-this': 'error',
		'curly': 'error',
		'default-case': 'error',
		'default-case-last': 'error',
		'default-param-last': 'error',
		'dot-location': [
			'error',
			'property'
		],
		'dot-notation': 'error',
		'eol-last': 'error',
		'eqeqeq': 'error',
		'func-call-spacing': 'error',
		'func-name-matching': 'error',
		'func-names': 'off',
		'func-style': [
			'error',
			'expression'
		],
		'function-paren-newline': 'off',
		'generator-star-spacing': 'error',
		'grouped-accessor-pairs': 'error',
		'guard-for-in': 'error',
		'id-denylist': 'error',
		'id-length': 'off',
		'id-match': 'error',
		'implicit-arrow-linebreak': [
			'off',
			'beside'
		],
		'indent': ['error', 'tab'],
		'init-declarations': 'error',
		'jest/no-focused-tests': 'warn',
		'jest/no-test-prefixes': 'off',
		'jsx-quotes': 'off',
		'key-spacing': 'error',
		'keyword-spacing': [
			'error',
			{
				'after': true,
				'before': true
			}
		],
		'line-comment-position': 'off',
		'linebreak-style': [
			'error',
			'unix'
		],
		'lines-around-comment': 'error',
		'lines-between-class-members': 'error',
		'max-classes-per-file': 'error',
		'max-depth': 'error',
		'max-len': 'off',
		'max-lines': 'error',
		'max-lines-per-function': 'off',
		'max-nested-callbacks': 'error',
		'max-params': 'error',
		'max-statements': 'off',
		'max-statements-per-line': 'error',
		'multiline-comment-style': 'off',
		'multiline-ternary': [
			'error',
			'always-multiline'
		],
		'new-cap': 'error',
		'new-parens': 'error',
		'newline-per-chained-call': 'error',
		'no-alert': 'error',
		'no-array-constructor': 'error',
		'no-await-in-loop': 'error',
		'no-bitwise': 'error',
		'no-caller': 'error',
		'no-confusing-arrow': 'error',
		'no-console': 'warn',
		'no-constructor-return': 'error',
		'no-continue': 'error',
		'no-div-regex': 'error',
		'no-duplicate-imports': 'error',
		'no-else-return': 'error',
		'no-empty-function': 'warn',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-extra-parens': 'off',
		'no-floating-decimal': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-inline-comments': 'off',
		'no-invalid-this': 'error',
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-loss-of-precision': 'error',
		'no-magic-numbers': 'off',
		'no-mixed-operators': 'error',
		'no-multi-assign': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-multiple-empty-lines': 'error',
		'no-negated-condition': 'off',
		'no-nested-ternary': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-wrappers': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'error',
		'no-plusplus': 'error',
		'no-promise-executor-return': 'error',
		'no-proto': 'error',
		'no-restricted-exports': 'error',
		'no-restricted-globals': 'error',
		'no-restricted-imports': 'error',
		'no-restricted-properties': 'error',
		'no-restricted-syntax': 'error',
		'no-return-assign': 'error',
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-shadow': 'error',
		'no-tabs': 'off',
		'no-template-curly-in-string': 'error',
		'no-ternary': 'off',
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'off',
		'no-undef-init': 'error',
		'no-undefined': 'error',
		'no-underscore-dangle': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': 'error',
		'no-unreachable-loop': 'error',
		'no-unsafe-optional-chaining': 'error',
		'no-unused-expressions': 'error',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'no-useless-backreference': 'error',
		'no-useless-call': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-void': 'error',
		'no-warning-comments': 'off',
		'no-whitespace-before-property': 'error',
		'nonblock-statement-body-position': 'error',
		'object-curly-newline': 'off',
		'object-curly-spacing': [
			'error',
			'always'
		],
		'object-property-newline': 'off',
		'object-shorthand': 'error',
		'one-var': 'off',
		'one-var-declaration-per-line': 'error',
		'operator-assignment': 'error',
		'operator-linebreak': [
			'error',
			'after'
		],
		'padded-blocks': 'off',
		'padding-line-between-statements': 'error',
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'prefer-destructuring': 'error',
		'prefer-exponentiation-operator': 'error',
		'prefer-named-capture-group': 'off',
		'prefer-numeric-literals': 'error',
		'prefer-object-spread': 'error',
		'prefer-promise-reject-errors': 'error',
		'prefer-regex-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'quote-props': 'off',
		'quotes': [
			'error',
			'single'
		],
		'radix': 'error',
		'require-atomic-updates': 'error',
		'require-await': 'error',
		'require-unicode-regexp': 'error',
		'rest-spread-spacing': 'error',
		'semi': 'error',
		'semi-spacing': 'error',
		'semi-style': [
			'error',
			'last'
		],
		'sort-keys': 'off',
		'sort-vars': 'error',
		'space-before-blocks': 'error',
		'space-before-function-paren': 'off',
		'space-in-parens': [
			'error',
			'never'
		],
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': [
			'error',
			'always'
		],
		'strict': 'error',
		'switch-colon-spacing': 'error',
		'symbol-description': 'error',
		'template-curly-spacing': 'error',
		'template-tag-spacing': 'error',
		'unicode-bom': [
			'error',
			'never'
		],
		'vars-on-top': 'error',
		'wrap-iife': 'error',
		'wrap-regex': 'error',
		'yield-star-spacing': 'error',
		'yoda': [
			'error',
			'never'
		]
	}
};
