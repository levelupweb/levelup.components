import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/index.less";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	render() {
		return (
			<form
				className={styles.form}
			/>
		);
	}
}

Form.propTypes = {
	onSubmit: PropTypes.func
};

Form.defaultProps = {
	onSubmit: null
};

export default Form;
