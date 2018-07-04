import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/index.less";
import randomNumber from "../../../../utils/randomNumber";

class CheckBox extends React.Component {
	constructor(props) {
		super(props);
		this.getValue = this.getValue.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleRef = this.handleRef.bind(this);
		this.state = {
			checked: props.checked,
			input: null,
			id: null
		};
	}

	componentDidMount() {
		this.setState({
			id: randomNumber(10),
		});
	}

	handleChange() {
		const { onChange } = this.props;
		const { input } = this.state;
		if (input) {
			const newValue = !input.checked;

			if (onChange && typeof onChange === "function") {
				onChange(newValue);
				return;
			}

			this.setState({
				checked: newValue,
			});
		}
	}

	getValue() {
		const { checked } = this.props;

		if (checked !== null) {
			return checked;
		}

		return this.state.checked;
	}

	handleRef(element) {
		const { input } = this.state;

		if (!input) {
			this.setState({
				input : element
			});
		}
	}

	render() {
		const { id } = this.state;
		const value = this.getValue();

		if (!id) {
			return null;
		}

		return (
			<div onClick={this.handleChange} className={styles.checkBox}>
				<input
					type="checkbox"
					checked={!!value}
					name={id}
					ref={this.handleRef}
				/>
				<span />
				<label htmlFor={id}>
					Some label for checkbox
				</label>
			</div>
		);
	}
}

CheckBox.propTypes = {
	type: PropTypes.string,
	checked: PropTypes.bool,
	onChange: PropTypes.func,

};

CheckBox.defaultProps = {
	onChange: null,
	checked: null,
};

export default CheckBox;
