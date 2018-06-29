import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/index.less";

class Radio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	render() {
		return (
			<input
				type="radio"
				className={styles.radio}
			/>
		);
	}
}

Radio.propTypes = {
	type: PropTypes.string
};

Radio.defaultProps = {
	type: "radio"
};

export default Radio;
