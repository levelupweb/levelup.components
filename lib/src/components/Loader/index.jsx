import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/index.less";
import { className } from "./utils";


class Loader extends React.Component {
	constructor(props) {
		super(props);
	}
  
	renderDots() {
		return [
			<span key={1} className={styles.dots}></span>,
			<span key={2} className={styles.dots}></span>,
			<span key={3} className={styles.dots}></span>
		];
	}
  
	render () {
		const {
			as,
			style,
			active,
		} = this.props;
		
		if (!active) {
			return null;
		}
    
		return React.createElement(as, {
			style,
			className: className(this.props),
		}, this.renderDots());
	}
}

Loader.propTypes = {
	as: PropTypes.string,
	style: PropTypes.object,
	className: PropTypes.string,
	active: PropTypes.bool,
	compact: PropTypes.bool,
	isDefalt: PropTypes.bool,
	isBlack: PropTypes.bool,
	isLight: PropTypes.bool,
	isAbsolute: PropTypes.bool,
};

Loader.defaultProps = {
	as: "div",
	style: {},
	active: false,
	compact: false,
	className: "",
	isDefault: true,
	isBlack: false,
	isLight: false,
	isAbsolute: false,
};

export default Loader;