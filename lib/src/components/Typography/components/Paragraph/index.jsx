import React from "react";
import PropTypes from "prop-types";
import compStyles from "./styles.less";

class Paragraph extends React.Component {
	render() {
		const { 
			children,
			isSuper,
			styles,
			className
		} = this.props;

		if (!children) {
			return null;
		}

		return (
			<p 
				styles={styles} 
				className={`
          ${compStyles.paragraph} 
          ${isSuper && compStyles.super} 
          ${className}
        `}
			>
				{children}
			</p>
		);
	}
}

Paragraph.propTypes = {
	isSuper: PropTypes.bool,
	className: PropTypes.string,
	styles: PropTypes.object,
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.string,
	]),
};

Paragraph.defaultProps = {
	isSuper: false,
	className: "",
	styles: {}
};

export default Paragraph;