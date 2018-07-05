import React from "react";
import PropTypes from "prop-types";
import { className } from "./utils";

class Logo extends React.Component {
	constructor(props) {
		super(props);
	}

	renderImg() {
		const { 
			src,
			isSmall,
		} = this.props;

		if (!src) {
			return null;
		}

		return (
			<img src={src} height={isSmall && "32px" || "128px"} />
		);
	}
  
	render(){
		const {
			as,
			style,
		} = this.props;

		return React.createElement(as, {
			style,
			className: className(this.props),
		}, this.renderImg());
	}
}

Logo.propTypes = {
	as: PropTypes.string,
	style: PropTypes.object,
	isSmall: PropTypes.bool,
	isLong: PropTypes.bool,
	className: PropTypes.string,
	src: PropTypes.string,
};

Logo.defaultProps = {
	as: "div",
	style: {},
	src: null,
	isSmall: false,
	isLong: false,
	className: "",
};

export default Logo;
