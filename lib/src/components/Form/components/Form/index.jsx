import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/index.less";
import Typography from "../../../Typography";
import Button from "../../../Button";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.handleForm = this.handleForm.bind(this);
		this.renderFormName= this.renderFormName.bind(this);
		this.state = {

		};
	}

	handleForm(e){
		e.preventDefault();
		return false;
	}

	renderFormName(){
		const { formName } = this.props;

		if (!formName) {
			return null;
		}

		return (
			<Typography.Title
				fontWeight={900}
				as="h3"
				header={formName}
				className={styles.formName}
			/>
		);
	}

	renderButton(){
		const { buttonText } = this.props;

		if (!buttonText) {
			return null;
		}

		return (
			<div className={styles.formButton}>
				<Button isPrimary>{buttonText}</Button>
			</div>
		);
	}

	render() {
		const { children } = this.props;
		return (
			<form
				className={styles.form}
				onSubmit={this.handleForm}
			>
				{this.renderFormName()}
				{children}
				{this.renderButton()}
			</form>
		);
	}
}

Form.propTypes = {
	buttonText: PropTypes.string,
	formName: PropTypes.string,
	onSubmit: PropTypes.func,
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.func,
		PropTypes.element,
		PropTypes.object,
		PropTypes.arrayOf(PropTypes.oneOfType([
			PropTypes.node,
			PropTypes.func,
			PropTypes.element,
			PropTypes.object
		]))
	])
};

Form.defaultProps = {
	onSubmit: null,
	children: null,
	formName: null
};

export default Form;
