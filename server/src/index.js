import express from "express";
import path from "path";
import React from "react";
import config from "@config";
import StaticRouter from "react-router-dom/StaticRouter";
import App from "@site/components/App";
import indexRenderer from "./renderers/index";

import {
	renderToString
} from "react-dom/server";

const app = express();

const staticPath = path.join("site", "dist");
app.use(`/${config.siteDist}`, express.static(staticPath));

app.get("*", (req, res) => {
	const html = renderToString(React.createElement(StaticRouter, {
		location: req.url,
		context: {}
	}, React.createElement(App, {})));

	res.send(indexRenderer(html));
});

app.listen(3000, () => {
	console.log("Example app listening on port 3000!");
	return;
});