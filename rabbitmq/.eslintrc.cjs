module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		sourceType: 'module'
	},
	env: {
		node: true
	},
	plugins: ['@typescript-eslint/eslint-plugin', 'import'],
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	rules: {
		'quotes': ['error', 'single'],
		'curly': ['error', 'all'],
		'indent': 'off',
		'no-unused-vars': 'off',
		'func-call-spacing': 'off',
		'arrow-spacing': ['error', { 'before': true, 'after': true }],
		'arrow-parens': ['error', 'always'],
		'space-before-function-paren': ['error', {
			'anonymous': 'always',
			'named': 'never',
			'asyncArrow': 'always'
		}],
		'max-len': ['error', {
			code: 140,
			ignoreComments: true,
			ignoreUrls: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			ignoreRegExpLiterals: true
		}],
		'no-multi-assign': ['error'],
		'func-names': ['error', 'always'],
		'brace-style': ['error', 'stroustrup'],
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/no-warning-comments': 'off',
		'@typescript-eslint/indent': ['error', 4, {
			ignoredNodes: ['TSTypeParameterInstantiation'],
			SwitchCase: 1
		}],
		'@typescript-eslint/func-call-spacing': ['error', 'never'],
		'@typescript-eslint/no-unused-vars': ['warn'],
		'@typescript-eslint/no-var-requires': 'off',
		'semi': 'off',
		'@typescript-eslint/semi': ['error', 'always'],
		'no-multiple-empty-lines': ['error', { max: 2 }],
		'@typescript-eslint/type-annotation-spacing': ['error'],
		'@typescript-eslint/ban-ts-comment': 'off'
	},
};
