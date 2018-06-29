import React from "react";
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
	handleInput({target: {value}}){
		this.setState({
			value: value
		});
	}
	render() {
		const { isActive } = this.state;

		return (
			<div className={styles.input}>
				<input
					type="text"
					onBlur={this.handleActive.bind(this, false)}
					onClick={this.handleActive.bind(this, true)}
					onChange={this.handleInput}
				/>
				<label className={`${isActive && styles.active}`}>Some Label</label>
			</div>
		);
	}
}

TextInput.propTypes = {
	type: PropTypes.string
};

TextInput.defaultProps = {

};

export default TextInput;
