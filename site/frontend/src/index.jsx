import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter  } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import App from "./components/App";

hydrate(
	<BrowserRouter>
		<ScrollToTop>
			<App />
		</ScrollToTop>
	</BrowserRouter>,
	document.getElementById("root")
);