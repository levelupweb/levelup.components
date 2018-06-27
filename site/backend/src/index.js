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

const staticPathSite = path.join("site/frontend/dist");
const staticPathLib = path.join("lib/dist");
app.use(`/${config.siteDistPathname}`, express.static(staticPathSite));
app.use(`/${config.siteDistPathname}`, express.static(staticPathLib));

app.get("*", (req, res) => {
	const html = renderToString(React.createElement(StaticRouter, {
		location: req.url,
		context: {}
	}, React.createElement(App, {})));

	res.send(indexRenderer(html));
});

app.listen(config.port, () => {
	console.log(`Example app listening on port ${config.port}!`);
	return;
});