module.exports = {
	"env": {
		"node": true,
		"es6": true
	},
	"extends": ["eslint:recommended"],
	"parserOptions": {
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
		},
		"sourceType": "module"
	},
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"no-console": [
			"error", {
				allow: ["log"]
			}
		]
	}
};