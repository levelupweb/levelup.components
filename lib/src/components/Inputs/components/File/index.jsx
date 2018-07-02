import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/index.less";
import Button from "./../../../Button";

class FileLoad extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleRef=  this.handleRef.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			ref: null,
			files: [],
		};
	}

	handleClick() {
		const { ref } = this.state;

		if (ref && ref.click && typeof ref.click === "function") {
			ref.click();
		}
	}

	handleRef(element) {
		const { ref } = this.state;

		if (!ref) {
			this.setState({
				ref: element
			});
		}
	}

	handleChange({ target: { files } }) {
		this.setState({
			files,
		});
	}

	render() {
		const { multi } = this.props;

		return (
			<div className={styles.fileLoad}>
				<Button onClick={this.handleClick} isPrimary>Choose a file to load</Button>
				<p>{this.state.files[0] && this.state.files[0].name}</p>
				<input multiple={multi} onChange={this.handleChange} type="file" ref={this.handleRef} hidden />
			</div>
		);
	}
}

FileLoad.propTypes = {
	load: PropTypes.func,
	multi: PropTypes.bool,
};

FileLoad.defaultProps = {
	load: null,
	multi: false,
};

export default FileLoad;
