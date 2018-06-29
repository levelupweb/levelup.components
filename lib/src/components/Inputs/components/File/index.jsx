import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/index.less";

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
				className={styles.fileLoad}
			/>
		);
	}
}

FileLoad.propTypes = {
	load: PropTypes.func
};

FileLoad.defaultProps = {
	load: null
};

export default FileLoad;
