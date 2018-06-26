const path = require("path");
const config = require("./config");

const getPathToComponent = component => path.join(__dirname, "lib", "src", "components", component, "index.jsx");

module.exports = {
	mode: config.env,
	entry: {
		["button"]: getPathToComponent("Button"),
		["typography"]: getPathToComponent("typography"),
		// ["storybook"]: path.join(__dirname, "storybook", "index.js"),
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "lib", "dist"),
	},
	// optimization: {
	// 	splitChunks: {
	// 		chunks: "all",
	// 		filename: "vendor.js"
	// 	},
	// },
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
			["@components"]: path.resolve("lib/src/components")
		}
	}
};