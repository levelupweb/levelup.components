import React from "react";
import Icon from "../../../Icon";
import PropTypes from "prop-types";
import styles from "./styles/index.less";

class TextInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false,
			value: ""
		};
		this.handleInput=this.handleInput.bind(this);
	}
	handleActive(isActive) {
		this.setState({
			isActive
		});
	}

	handleInput(event) {
		const { target: { value } } = event;
		const { onChange } = this.props;

		this.setState({ value: value }, () => {
			onChange({
				event,
				value,
				...this.props
			});
		});
	}

	renderIcon() {
		const { icon } = this.props;

		if (icon) {
			return (
				<Icon
					className={styles.icon}
					icon={icon}
				/>
			);
		}

		return null;
	}

	renderLabel() {
		const { isActive } = this.state;
		const { label } = this.props;

		if (!label) {
			return null;
		}

		return (
			<label className={`${isActive && styles.active}`}>
				{label}
			</label>
		);
	}

	render() {
		return (
			<div className={styles.input}>
				{this.renderIcon()}
				<input
					type="text"
					onBlur={this.handleActive.bind(this, false)}
					onClick={this.handleActive.bind(this, true)}
					onChange={this.handleInput}
				/>
				{this.renderLabel()}
			</div>
		);
	}
}

TextInput.propTypes = {
	type: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	label: PropTypes.string,
	icon: PropTypes.string,
	iconPosition: PropTypes.oneOf([
		"left",
		"right"
	])
};

TextInput.defaultProps = {
	iconPosition: "left",
	label: null,
	icon: null,
	type: "text",
};

export default TextInput;
