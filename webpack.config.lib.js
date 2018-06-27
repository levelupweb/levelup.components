const path = require("path");
const config = require("./config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLESS = new ExtractTextPlugin("main.css");

module.exports = {
	mode: config.env,
	entry: path.resolve(__dirname, "lib/src", "index.js"),
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "lib", "dist"),
		library: "levelupComponents",
		libraryTarget: "amd"
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
		}, {
			test: /\.less$/,
			exclude: /node_modules/,
			use: extractLESS.extract([
				{ loader: "css-loader",  options: { sourceMap: true, localIdentName: "[local]_[hash:base64:5]" } }, 
				{ loader: "less-loader", options: { sourceMap: true } }
			])
		}]
	},
	plugins: [extractLESS],
	resolve: {
		alias: {
			["@config"]: path.resolve("config.js"),
			["@components"]: path.resolve("lib/src/components")
		},
		extensions: ["*", ".js", ".jsx"]
	},
	watch: config.env === "development"
};