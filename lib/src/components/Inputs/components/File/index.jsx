import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.less";

class FileLoad extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	render() {
		return (
			<input
				type="file"
			/>
		);
	}
}

FileLoad.propTypes = {

};

FileLoad.defaultProps = {

};

export default FileLoad;
