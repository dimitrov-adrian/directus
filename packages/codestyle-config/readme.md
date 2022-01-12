# Directus Codestyle

Sharable codestyle configuration used by Directus

## Includes

- [eslint](https://eslint.org/) config
- [stylelint](https://stylelint.io/) config
- [prettier](https://prettier.io/) config

## Install

```
npm install --save-dev @directus/codestyle-config
```

## Usage

### Per config files

Use regular configuration files for eslint, stylelint and prettier.

```js
// .prettierrc.js
module.exports = {
	...require('@directus/codestyle-config/prettier'),
	// your overrides here
};
```

```js
// .eslintrc.js
module.exports = {
	...require('@directus/codestyle-config/eslint'),
	// your overrides here
};
```

```jsonc
// .stylelintrc.json
{
	"extends": ["@directus/codestyle-config/stylelint"]
	// your overrides here
}
```

### or in `package.json`

```jsonc
// package.json
{
	"prettier": "@directus/codestyle-config/prettier",
	"stylelint": {
		"extends": "@directus/codestyle-config/stylelint"
	},
	"eslintConfig": {
		// Because of way how eslint normalizes config module names, need to file path.
		"extends": "./node_modules/@directus/codestyle-config/.eslintrc.js",
		"parserOptions": {
			"sourceType": "module"
		}
	}
}
```

## Editor Integration

### VS Code

- Prettier - Code formatter
- ESLint
- Stylelint
- Vetur
- (optional) EditorConfig for VS Code
- (optional) Vue
- (optional) VueDX

##### Simple vscode settings

```jsonc
{
	"stylelint.validate": ["css", "less", "postcss", "vue"],
	"[javascript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[typescript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[vue]": {
		"editor.defaultFormatter": "octref.vetur"
	},
	"[json]": {
		"editor.defaultFormatter": "vscode.json-language-features"
	}
}
```
