import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.less";

class TextInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	render() {
		return (
			<input
				type="text"
			/>
		);
	}
}

TextInput.propTypes = {

};

TextInput.defaultProps = {

};

export default TextInput;
