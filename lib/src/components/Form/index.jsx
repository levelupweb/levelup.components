import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/index.less";
import Fieldset from "./components/Fieldset/Fieldset";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.handleForm = this.handleForm.bind(this);
		this.state = {

		};
	}

	handleForm(){

	}

	render() {
		return (
			<form
				className={styles.form}
				onSubmit={this.handleForm}
			>
				<Fieldset legend="caption" />
			</form>
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
