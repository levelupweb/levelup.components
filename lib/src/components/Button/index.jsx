import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
	render() {
		const { label } = this.props;
		return (
			<button>{label}</button>
		);
	}
}

Button.propTypes = {
	label: PropTypes.string
};

Button.propTypes = {
	label: "Без названия"
};

export default Button;