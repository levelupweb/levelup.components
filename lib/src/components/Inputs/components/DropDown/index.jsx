import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/index.less";

class DropDown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	render() {
		return (
			<div
				className={styles.dropDown}
			/>
		);
	}
}

DropDown.propTypes = {
	onFocus: PropTypes.func
};

DropDown.defaultProps = {
	onFocus: null
};

export default DropDown;
