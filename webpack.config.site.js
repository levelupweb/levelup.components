const path = require("path");
const config = require("./config");

const webpack = {
	name: "site",
	mode: config.env,
	entry: path.join(__dirname, "site", "src", "index.jsx"),
	output: {
		filename: "build.js",
		path: path.resolve(__dirname, "site", "dist"),
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
	resolve: {
		alias: {
			["@config"]: path.resolve("config.js"),
			["@site"]: path.resolve("site/src"),
		},
		extensions: ["*", ".js", ".jsx"]
	}
};

module.exports = webpack;
