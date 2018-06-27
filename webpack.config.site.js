const path = require("path");
const config = require("./config");

const webpack = {
	name: "site",
	mode: config.env,
	entry: path.join(__dirname, "site/frontend/src", "index.jsx"),
	output: {
		filename: "build.js",
		path: path.resolve(__dirname, "site/frontend/dist"),
	},
	target: "web",
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
	optimization: {
		minimize: true
	},
	resolve: {
		alias: {
			["@config"]: path.resolve("config.js"),
			["@site"]: path.resolve("site/frontend/src"),
			["levelup-components"]: path.resolve("lib/dist/main.js"),
		},
		extensions: ["*", ".js", ".jsx"]
	}
};

module.exports = webpack;
