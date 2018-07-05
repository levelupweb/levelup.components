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
		this.renderLabel=this.renderLabel.bind(this);
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
			<div className={styles.textArea}>
				<textarea
					onBlur={this.handleActive.bind(this, false)}
					onClick={this.handleActive.bind(this, true)}
					onChange={this.handleInput}
				/>
				{this.renderLabel()}
			</div>
		);
	}
}

TextArea.propTypes = {
	label: PropTypes.string
};

TextArea.defaultProps = {
	label: null
};

export default TextArea;
