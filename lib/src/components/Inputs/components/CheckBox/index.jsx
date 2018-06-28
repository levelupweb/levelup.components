import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.less";

class CheckBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	render() {
		return (
			<input
				type="checkbox"
			/>
		);
	}
}

CheckBox.propTypes = {

};

CheckBox.defaultProps = {

};

export default CheckBox;
