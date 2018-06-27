import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/index.less";

class Container extends React.Component {
	render() {
		const {
			isFluid,
			children
		} = this.props;

		if (!children) {
			return null;
		}

		return (
			<div className={`${styles.container} ${isFluid && styles.fluid}`}>
				{children}
			</div>
		);
	}
}

Container.propTypes = {
	isFluid: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.string,
		PropTypes.element,
	])
};

Container.defaultProps = {
	isFluid: false,
	children: null,
};

export default Container;