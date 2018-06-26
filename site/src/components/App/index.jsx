import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import DefaultRoute from "@site/containers/Default";
import { Switch, Route } from "react-router-dom";

import Index from "../../pages/Index";
import Download from "../../pages/Download";

const App = ({ location }) => (
	<div>
		<h2>Levelup Components</h2>
		<Switch
			location={location}
			key={location.key}
			onUpdate={() => window.scrollTo(0, 0)}
		>
			<DefaultRoute exact path="/" component={Index} />
			<DefaultRoute exact path="/download" component={Download} />
		</Switch>
	</div>
);


App.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string,
	}).isRequired
};

export default withRouter(App);