import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "@site/components/Header";
import { Container } from "levelup-components";

const DefaultContainer = ({ 
	component, 
	exact, 
	path 
}) => (
	<Container>
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
	</Container>
);

DefaultContainer.propTypes = {
	component: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.node,
		PropTypes.element,
	]),
	path: PropTypes.string,
	exact: PropTypes.bool,
};

DefaultContainer.defaultProps = {
	component: null,
	path: null,
	exact: false,
};

export default DefaultContainer;