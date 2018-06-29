import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/index.less";

class TextArea extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	render() {
		return (
			<textarea
				className={styles.textArea}
			/>
		);
	}
}

TextArea.propTypes = {
	onFocus: PropTypes.func
};

TextArea.defaultProps = {
	onFocus: null
};

export default TextArea;
