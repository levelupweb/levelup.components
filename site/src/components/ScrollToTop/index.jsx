import React from "react";
import PropTypes from "prop-types";

class ScrollToTop extends React.Component {
	componentDidUpdate() {
		window.scrollTo(0, 0);
	}
	render() {
		return this.props.children;
	}
}

ScrollToTop.propTypes = {
	children: PropTypes.node,
};

ScrollToTop.defaultProps = {
	children: null
};

export default ScrollToTop;