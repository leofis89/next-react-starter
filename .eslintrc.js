module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	parser: 'babel-eslint',
	extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
	plugins: ['react', 'jsx-a11y', 'import'],
	rules: {
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.js', '.jsx'],
			},
		],
		'prettier/prettier': [
			'error',
			{
				printWidth: 80,
				traillingCOma: 'es5',
				semi: true,
				jsxSingleQuote: true,
				UseTabs: true,
			},
		],
		'global-require': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
	},
};
