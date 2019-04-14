const { join, dirname } = require( 'path' );

const commonRules = {
	'align': {
		'options': ['arguments', 'elements', 'members', 'parameters', 'statements'],
	},
	'arrow-parens': {
		'options': ['ban-single-arg-parens'],
	},
	'arrow-return-shorthand': {
		'options': ['multiline'],
	},
	'completed-docs': {
		'options': ['enums', 'functions', 'methods'],
	},
	'indent': {
		'options': ['tabs', 4],
	},
	'jsdoc-format': {
		'options': ['check-multiline-start'],
	},
	'linebreak-style': {
		'options': ['LF'],
	},
	'max-line-length': {
		'options': [200],
	},
	'member-ordering': false,
	'no-duplicate-variable': {
		'options': ['check-parameters'],
	},
	'no-implicit-dependencies': true,
	'no-invalid-template-strings': true,
	'no-irregular-whitespace': true,
	'no-namespace': false,
	'no-return-await': true,
	'object-curly-spacing': [true, 'always', { 'objectsInObjects': false }],
	'prefer-template': {
		'options': ['allow-single-concat'],
	},
	'quotemark': {
		'options': ['single', 'avoid-escape', 'avoid-template'],
	},
	'space-within-parens': {
		'options': [1],
	},
	'variable-name': {
		'options': ['ban-keywords', 'check-format', 'allow-pascal-case', 'allow-leading-underscore'],
	},
};

module.exports = {
	'defaultSeverity': 'error',
	'extends': 'tslint:recommended',
	'rulesDirectory': [
		join( dirname( require.resolve( 'tslint-eslint-rules' ) ), 'dist/rules' ),
	],
	'rules': {
		...commonRules,
		'array-type': {
			'options': 'array-simple',
		},
		'await-promise': true,
		'member-access': {
			'options': ['check-accessor', 'check-constructor', 'check-parameter-property'],
		},
		'no-boolean-literal-compare': true,
		'no-floating-promises': true,
		'no-inferred-empty-object-type': true,
		'no-redundant-jsdoc': true,
		'no-unnecessary-qualifier': true,
		'prefer-readonly': true,
		'type-literal-delimiter': true,
	},
	'jsRules': {
		...commonRules,
	},
};
