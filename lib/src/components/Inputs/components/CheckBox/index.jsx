import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/index.less";

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
				className={styles.checkBox}
			/>
		);
	}
}

CheckBox.propTypes = {
	type: PropTypes.string
};

CheckBox.defaultProps = {
};

export default CheckBox;
