import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "@site/components/Header";

const DefaultContainer = ({ 
	component, 
	exact, 
	path 
}) => (
	<div>
		<div className="default-container">
			<div className="site-content">
				<Header />
				<Route
					exact={exact}
					path={path}
					render={() => React.createElement(component)}
				/>
			</div>
		</div>
	</div>
);

DefaultContainer.propTypes = {
	component: PropTypes.node,
	path: PropTypes.string,
	exact: PropTypes.bool,
};

DefaultContainer.defaultProps = {
	component: null,
	path: null,
	exact: false,
};

export default DefaultContainer;