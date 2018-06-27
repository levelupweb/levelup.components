const path = require("path");
const config = require("./config");
const nodeModules = {};

const webpack = {
	name: "server",
	mode: config.env,
	entry: path.join(__dirname, "site/backend/src", "index.js"),
	output: {
		filename: "build.js",
		path: path.resolve(__dirname, "site/backend/dist"),
	},
	target: "node",
	externals: nodeModules,
	node: {
		fs: "empty",
		net: "empty"
	},
	optimization: {
		minimize: true
	},
	watch: config.env === "development",
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: [{
				loader: "babel-loader",
				query: {
					plugins: [require("babel-plugin-transform-object-rest-spread")],
					presets: ["env", "react"]
				}
			}],
		}, ]
	},
	resolve: {
		alias: {
			["@config"]: path.resolve("config.js"),
			["@site"]: path.resolve("site/frontend/src"),
			["@root"]: path.resolve("site/backend/src"),
			["levelup-components"]: path.resolve("lib/dist/main.js")
		},
		extensions: ["*", ".js", ".jsx"]
	}
};

module.exports = webpack;