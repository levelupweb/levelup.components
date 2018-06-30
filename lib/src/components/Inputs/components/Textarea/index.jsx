import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/index.less";

class TextArea extends React.Component {
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
			<div className={styles.textArea}>
				<textarea
					onBlur={this.handleActive.bind(this, false)}
					onClick={this.handleActive.bind(this, true)}
					onChange={this.handleInput}
				/>
				<span className={`${isActive && styles.active}`}>Enter some text here</span>
			</div>
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
